'use client'

import { useEffect, useRef } from 'react'

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    if (!ctx) return

    let W: number, H: number
    let stars: { x: number; y: number; r: number; a: number; tw: number }[] = []
    let cars: { phase: number; speed: number }[] = []
    let raf: number

    const VPX = 0.5, VPY = 0.44
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      W = canvas!.width = canvas!.offsetWidth
      H = canvas!.height = canvas!.offsetHeight
      build()
    }

    function build() {
      stars = []
      const sh = H * VPY
      for (let i = 0; i < 120; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * sh * 0.92,
          r: 0.25 + Math.random() * 1.1,
          a: 0.1 + Math.random() * 0.5,
          tw: 1.5 + Math.random() * 3.5,
        })
      }
      cars = []
      for (let i = 0; i < 5; i++) {
        cars.push({ phase: i / 5, speed: 0.045 + Math.random() * 0.025 })
      }
    }

    const pY = (u: number) => H * VPY + (H - H * VPY) * u * u

    function drawBg() {
      const sg = ctx.createLinearGradient(0, 0, 0, H * VPY)
      sg.addColorStop(0, '#020a18')
      sg.addColorStop(0.6, '#060f1e')
      sg.addColorStop(1, '#0a1526')
      ctx.fillStyle = sg
      ctx.fillRect(0, 0, W, H * VPY)

      // Horizon glow
      const hg = ctx.createRadialGradient(W * VPX, H * VPY, 0, W * VPX, H * VPY, W * 0.55)
      hg.addColorStop(0, 'rgba(212,43,33,0.28)')
      hg.addColorStop(0.2, 'rgba(180,36,28,0.1)')
      hg.addColorStop(0.6, 'rgba(90,18,14,0.03)')
      hg.addColorStop(1, 'transparent')
      ctx.fillStyle = hg
      ctx.fillRect(0, 0, W, H)
    }

    function drawStars(t: number) {
      for (const s of stars) {
        const tw = 0.75 + 0.25 * Math.sin(t * s.tw)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,210,228,${s.a * tw})`
        ctx.fill()
      }
    }

    function drawRoad() {
      const vpX = W * VPX, vpY = H * VPY
      const lx = W * 0.04, rx = W * 0.96

      const rg = ctx.createLinearGradient(vpX, vpY, vpX, H)
      rg.addColorStop(0, '#0b1220')
      rg.addColorStop(0.35, '#0f1828')
      rg.addColorStop(1, '#141e30')
      ctx.beginPath()
      ctx.moveTo(vpX, vpY)
      ctx.lineTo(lx, H)
      ctx.lineTo(rx, H)
      ctx.closePath()
      ctx.fillStyle = rg
      ctx.fill()

      // Road edges
      ;([[vpX, vpY, lx, H], [vpX, vpY, rx, H]] as [number,number,number,number][]).forEach(([x0, y0, x1, y1]) => {
        ctx.beginPath()
        ctx.moveTo(x0, y0)
        ctx.lineTo(x1, y1)
        ctx.strokeStyle = 'rgba(180,190,210,0.08)'
        ctx.lineWidth = 1.5
        ctx.stroke()
      })
    }

    function drawDashes(t: number) {
      const vpX = W * VPX
      const SPEED = 0.26, DLEN = 0.085, GLEN = 0.085, PER = DLEN + GLEN
      const phase = (t * SPEED) % PER

      for (let i = 0; i <= 12; i++) {
        let u0 = i * PER + phase, u1 = u0 + DLEN
        if (u1 < 0.015 || u0 > 1.05) continue
        u0 = Math.max(u0, 0.006)
        u1 = Math.min(u1, 1.02)
        const um = (u0 + u1) / 2
        ctx.beginPath()
        ctx.moveTo(vpX, pY(u0))
        ctx.lineTo(vpX, pY(u1))
        ctx.strokeStyle = `rgba(235,195,75,${Math.min(1, um * 2.8) * 0.65})`
        ctx.lineWidth = 1.5 + um * 11
        ctx.lineCap = 'round'
        ctx.stroke()
      }
    }

    function drawHeadlights() {
      const vpX = W * VPX
      for (const car of cars) {
        car.phase = (car.phase + car.speed / 60) % 1
        const u = car.phase * car.phase * 0.68
        if (u < 0.003) continue
        const fy = pY(u)
        const hw = W * 0.88 * u * u * 0.5
        const laneX = vpX - hw * 0.28
        const sep = hw * 0.1
        const alpha = Math.min(1, u * 3.5) * (1 - Math.max(0, (u - 0.62) / 0.3))
        const sz = Math.max(0.5, u * 14)

        ;([[laneX - sep, fy], [laneX + sep, fy]] as [number,number][]).forEach(([hx, hy]) => {
          const og = ctx.createRadialGradient(hx, hy, 0, hx, hy, sz * 12)
          og.addColorStop(0, `rgba(190,210,255,${alpha * 0.16})`)
          og.addColorStop(0.4, `rgba(150,180,255,${alpha * 0.05})`)
          og.addColorStop(1, 'transparent')
          ctx.fillStyle = og
          ctx.fillRect(hx - sz * 12, hy - sz * 12, sz * 24, sz * 24)

          const ig = ctx.createRadialGradient(hx, hy, 0, hx, hy, sz * 2.8)
          ig.addColorStop(0, `rgba(220,235,255,${alpha})`)
          ig.addColorStop(1, 'transparent')
          ctx.fillStyle = ig
          ctx.beginPath()
          ctx.arc(hx, hy, sz * 2.8, 0, Math.PI * 2)
          ctx.fill()

          ctx.beginPath()
          ctx.arc(hx, hy, Math.max(0.5, sz * 0.42), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(245,252,255,${alpha})`
          ctx.fill()
        })
      }
    }

    function drawFog() {
      const fg = ctx.createLinearGradient(0, H * 0.8, 0, H)
      fg.addColorStop(0, 'transparent')
      fg.addColorStop(1, 'rgba(6,16,30,0.45)')
      ctx.fillStyle = fg
      ctx.fillRect(0, H * 0.8, W, H)
    }

    function frame(ts: number) {
      const t = ts / 1000
      ctx.clearRect(0, 0, W, H)
      drawBg()
      drawStars(t)
      drawRoad()
      drawDashes(t)
      drawHeadlights()
      drawFog()
      if (!reduced) raf = requestAnimationFrame(frame)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    raf = requestAnimationFrame(frame)

    const onVisChange = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else raf = requestAnimationFrame(frame)
    }
    document.addEventListener('visibilitychange', onVisChange)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisChange)
    }
  }, [])

  return <canvas ref={ref} id="hero-canvas" />
}
