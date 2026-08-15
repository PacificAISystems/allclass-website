'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: "What do I need before starting Class 1 training?",
    a: "You need a valid Class 5 licence (non-GDL), be 18 or older, pass a medical exam, and complete the government's 40-hour online Entry Program. We'll walk you through each step when you call.",
  },
  {
    q: "How long does the Class 1 Learning Pathway take?",
    a: "The full pathway is 125–145 hours across three stages. Most students complete it in 6–10 weeks depending on scheduling. We work around your existing job.",
  },
  {
    q: "Do I need the Air Brake course?",
    a: "If you don't already hold a Q endorsement, yes — all Class 1 vehicles have air brakes. The 8-hour Air Brake course is built into the Core Learning stage, or you can take it standalone.",
  },
  {
    q: "Can Amazon Career Choice pay for my training?",
    a: "We're an approved Amazon Career Choice partner. Eligible Amazon employees can use their benefits toward Class 1 training. Confirm your eligibility through your Amazon Career Choice portal, then call us to enrol.",
  },
  {
    q: "What's the difference between Class 1 and Class 3?",
    a: "Class 1 lets you drive tractor-trailers (semis) — the full long-haul licence. Class 3 covers single vehicles over 4,600 kg like dump trucks and large delivery vehicles. Class 3 has no mandatory curriculum, so training is tailored to your current skill level.",
  },
  {
    q: "Is training one-on-one or in a group?",
    a: "All in-cab and in-yard training is conducted one-on-one with your instructor. You get dedicated time behind the wheel on every session — not split between students.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {FAQS.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
            <button
              className="faq-q"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.q}
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div className="faq-a" style={{ maxHeight: isOpen ? '500px' : '0' }}>
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
