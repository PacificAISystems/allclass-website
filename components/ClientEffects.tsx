'use client'

import { useEffect } from 'react'

export function ClientEffects() {
  useEffect(() => {
    // Scroll progress bar
    const prog = document.getElementById('progress')
    const onScroll = () => {
      if (prog) {
        const h = document.documentElement.scrollHeight - window.innerHeight
        prog.style.width = (window.scrollY / h * 100) + '%'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Scroll reveals
    const ro = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('v'); ro.unobserve(e.target) }
      }),
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.r,.rl,.rr').forEach(el => ro.observe(el))

    // Animated counters
    function animateCounter(el: Element) {
      const target = parseFloat(el.getAttribute('data-target') || '0')
      const isFloat = el.getAttribute('data-float') === 'true'
      const prefix = el.getAttribute('data-prefix') || ''
      const suffix = el.getAttribute('data-suffix') || ''
      const dur = 1800
      const start = performance.now()
      const update = (now: number) => {
        const pct = Math.min((now - start) / dur, 1)
        const ease = 1 - Math.pow(1 - pct, 4)
        const val = target * ease
        el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.round(val).toLocaleString()) + suffix
        if (pct < 1) requestAnimationFrame(update)
      }
      requestAnimationFrame(update)
    }

    const counterObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target)
          counterObs.unobserve(e.target)
        }
      }),
      { threshold: 0.5 }
    )
    document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      counterObs.disconnect()
    }
  }, [])

  return <div className="progress" id="progress" />
}
