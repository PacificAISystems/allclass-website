'use client'
import { useState, type FormEvent } from 'react'
import { SITE } from '@/lib/site'

const PROGRAMS = [
  'Class 1 Learning Pathway',
  'Class 3 Training',
  'Air Brake Course',
  'Not sure yet — I need guidance',
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [fields, setFields] = useState({
    name: '', email: '', phone: '', program: '', message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h3 className="form-success-h">We got your message.</h3>
        <p className="form-success-p">
          We'll be in touch within one business day. Need us sooner?{' '}
          <a href={SITE.phoneHref}>Call {SITE.phone}</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="cf-name">Full Name</label>
          <input
            id="cf-name"
            className="form-input"
            type="text"
            placeholder="John Smith"
            required
            value={fields.name}
            onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
            suppressHydrationWarning
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="cf-phone">Phone</label>
          <input
            id="cf-phone"
            className="form-input"
            type="tel"
            placeholder="780-000-0000"
            value={fields.phone}
            onChange={e => setFields(f => ({ ...f, phone: e.target.value }))}
            suppressHydrationWarning
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="cf-email">Email Address</label>
        <input
          id="cf-email"
          className="form-input"
          type="email"
          placeholder="you@email.com"
          required
          value={fields.email}
          onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
          suppressHydrationWarning
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="cf-program">Program of Interest</label>
        <select
          id="cf-program"
          className="form-select"
          value={fields.program}
          onChange={e => setFields(f => ({ ...f, program: e.target.value }))}
          suppressHydrationWarning
        >
          <option value="">Select a program…</option>
          {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="cf-message">Message (optional)</label>
        <textarea
          id="cf-message"
          className="form-textarea"
          placeholder="Tell us about your schedule, current licence, or any questions…"
          value={fields.message}
          onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
          suppressHydrationWarning
        />
      </div>
      {status === 'error' && (
        <p className="form-error">
          Something went wrong. Please call us at{' '}
          <a href={SITE.phoneHref}>{SITE.phone}</a> directly.
        </p>
      )}
      <button type="submit" className="form-submit" disabled={status === 'sending'} suppressHydrationWarning>
        {status === 'sending' ? 'Sending…' : 'Send Enquiry →'}
      </button>
    </form>
  )
}
