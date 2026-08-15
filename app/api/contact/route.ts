import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, phone, program, message } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

  const TO = 'allclassdrivingacademy@gmail.com'
  const subject = `New enquiry – ${program || 'General'} – ${name}`
  const body = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone || '—'}`,
    `Program: ${program || '—'}`,
    ``,
    message || '(no message)',
  ].join('\n')

  /* ── Try Resend if key is present ─────────────────────────────── */
  const RESEND_KEY = process.env.RESEND_API_KEY
  if (RESEND_KEY) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'All Class Website <onboarding@resend.dev>',
        to: [TO],
        reply_to: email,
        subject,
        text: body,
      }),
    })
    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send.' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  }

  /* ── Fallback: log to console (configure RESEND_API_KEY to send) */
  console.log('=== CONTACT ENQUIRY ===\n' + body + '\n=======================')
  return NextResponse.json({ ok: true })
}
