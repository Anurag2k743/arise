"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function OurMission() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | null>(null) // ✅ Fixed TypeScript error

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      const scale = window.devicePixelRatio || 1
      canvas.width = width * scale
      canvas.height = height * scale
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(scale, scale)
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const count = Math.floor((container.clientWidth * container.clientHeight) / 9000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * container.clientWidth,
          y: Math.random() * container.clientHeight,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.6 + 0.3,
        })
      }
      particlesRef.current = particles
    }

    const animate = () => {
      ctx.clearRect(0, 0, container.clientWidth, container.clientHeight)

      // Soft moving light background
      const time = Date.now() * 0.0005
      const gradient = ctx.createRadialGradient(
        container.clientWidth / 2 + Math.sin(time) * 50,
        container.clientHeight / 2 + Math.cos(time) * 50,
        50,
        container.clientWidth / 2,
        container.clientHeight / 2,
        Math.max(container.clientWidth, container.clientHeight) * 0.8
      )
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.12)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, container.clientWidth, container.clientHeight)

      // Particles + lines
      particlesRef.current.forEach((p, idx) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = container.clientWidth
        if (p.x > container.clientWidth) p.x = 0
        if (p.y < 0) p.y = container.clientHeight
        if (p.y > container.clientHeight) p.y = 0

        p.opacity = 0.4 + Math.sin(Date.now() * 0.002 + idx) * 0.3

        ctx.shadowColor = "rgba(255,255,255,0.8)"
        ctx.shadowBlur = p.size * 2
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fill()
        ctx.shadowBlur = 0

        particlesRef.current.forEach((other, otherIdx) => {
          if (idx !== otherIdx) {
            const dx = p.x - other.x
            const dy = p.y - other.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 100) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(other.x, other.y)
              ctx.strokeStyle = `rgba(147, 197, 253, ${(1 - dist / 100) * 0.3})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <section className="bg-[#00020F] py-12 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="border border-[#080B1C] p-1 rounded-3xl">
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-3xl text-center p-6 md:p-24 
              bg-[url('/our_mision.png')] bg-cover bg-center border border-[#0E122E]"
          >
            {/* Animation canvas */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, #00020F 0%, rgba(0, 2, 15, 0) 57.46%, #00020F 100%)",
              }}
            />

            {/* Text content */}
            <div className="relative z-10">
              <h2 className="mb-6 text-white">
                Our mission is to design websites that attract and engage customers.
              </h2>
              <p className="text-gray-300">
                However, we approach things a bit differently around here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
