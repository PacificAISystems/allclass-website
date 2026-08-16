'use client'
import { useEffect, useState } from 'react'
import { SITE } from '@/lib/site'

const LINKS = [
  { href: '#programs',    label: 'Programs' },
  { href: '#pathway',     label: 'Pathway' },
  { href: '#financing',   label: 'Financing' },
  { href: '#reviews',     label: 'Reviews' },
  { href: '#faq',         label: 'FAQ' },
]

export function Nav() {
  const [solid, setSolid] = useState(false)
  const [open,  setOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`nav${solid || open ? ' solid' : ''}`} aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="All Class Driving Academy — home">
          <div className="brand-crest">AC</div>
          <div className="brand-text">
            <span><em>All Class</em> Driving Academy</span>
          </div>
        </a>

        <ul className="nav-links" role="list">
          {LINKS.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a className="nav-cta" href="#contact">Book Now</a></li>
        </ul>

        <button
          className="ham"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <nav className={`mnav${open ? ' open' : ''}`} aria-label="Mobile navigation">
        {LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)} style={{ color: 'var(--gold)' }}>
          Book Now
        </a>
        <div className="mnav-sub">
          {SITE.phone}<br />
          {SITE.address}<br />
          {SITE.hours}
        </div>
      </nav>
    </>
  )
}
