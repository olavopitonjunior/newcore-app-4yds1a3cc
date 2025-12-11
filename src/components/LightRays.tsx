import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface LightRaysProps {
  className?: string
  raysOrigin?:
    | 'top-center'
    | 'center'
    | 'top-left'
    | 'top-right'
    | 'bottom-center'
  raysColor?: string
  raysSpeed?: number
  lightSpread?: number
  rayLength?: number
  pulsating?: boolean
  fadeDistance?: number
  saturation?: number
  noiseAmount?: number
  distortion?: number
  mouseInfluence?: number
  followMouse?: boolean
}

export const LightRays: React.FC<LightRaysProps> = ({
  className,
  raysOrigin = 'center',
  raysColor = '#ffffff',
  raysSpeed = 0.3,
  lightSpread = 1.0,
  rayLength = 1.0,
  pulsating = false,
  fadeDistance = 0.5,
  saturation = 1.0,
  noiseAmount = 0.05,
  distortion = 0.0,
  mouseInfluence = 0.05,
  followMouse = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      // Normalize mouse position -1 to 1 relative to center
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
      mouseRef.current = { x, y }
    }

    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    const resize = () => {
      if (containerRef.current && canvas) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
      }
    }

    window.addEventListener('resize', resize)
    resize()

    const render = () => {
      if (!canvas || !ctx || !containerRef.current) return
      const { width, height } = containerRef.current.getBoundingClientRect()

      ctx.clearRect(0, 0, width, height)

      // Apply saturation filter
      ctx.filter = `saturate(${saturation})`
      ctx.globalCompositeOperation = 'screen'

      // Determine Origin
      let originX = width / 2
      let originY = height / 2

      if (raysOrigin === 'top-center') {
        originX = width / 2
        originY = -100 // Slightly above for better effect
      } else if (raysOrigin === 'top-left') {
        originX = 0
        originY = 0
      } else if (raysOrigin === 'top-right') {
        originX = width
        originY = 0
      } else if (raysOrigin === 'bottom-center') {
        originX = width / 2
        originY = height + 100
      }

      // Apply Mouse Influence
      if (followMouse) {
        originX += mouseRef.current.x * width * mouseInfluence
        originY += mouseRef.current.y * height * mouseInfluence
      }

      const numRays = 30
      // Time-based animation
      timeRef.current += 0.01 * raysSpeed
      const time = timeRef.current

      for (let i = 0; i < numRays; i++) {
        // Calculate base angle for spread
        // We want rays to cover a certain area based on lightSpread
        // For top-center, we typically want rays going downwards (-PI to 0 or 0 to PI depending on coord system)
        // Canvas Y is down. So top-center needs angles around PI/2 (90deg)

        const spreadRad = Math.PI * lightSpread
        const angleStep = spreadRad / numRays
        const baseAngle = Math.PI / 2 - spreadRad / 2 + i * angleStep

        // Add noise and distortion
        const noise = Math.sin(time + i * 132.1) * noiseAmount
        const dist = Math.cos(time * 0.5 + i * 42.5) * distortion

        const finalAngle = baseAngle + noise + dist

        // Ray length variation
        const lengthNoise = (Math.sin(time * 2 + i * 10) + 1) / 2 // 0 to 1
        const currentRayLength =
          Math.max(width, height) * rayLength * (0.8 + lengthNoise * 0.4)

        const endX = originX + Math.cos(finalAngle) * currentRayLength
        const endY = originY + Math.sin(finalAngle) * currentRayLength

        // Ray Width
        const rayWidth =
          (width / numRays) * (0.5 + Math.sin(time + i) * 0.5) * lightSpread

        // Gradient
        const gradient = ctx.createLinearGradient(originX, originY, endX, endY)
        gradient.addColorStop(0, raysColor)
        gradient.addColorStop(
          Math.min(1, Math.max(0, fadeDistance)),
          'transparent',
        )

        ctx.fillStyle = gradient

        // Draw Triangle
        ctx.beginPath()
        ctx.moveTo(originX, originY)

        // Calculate perpendicular offset for width at the end
        const perpAngle = finalAngle + Math.PI / 2
        const offsetX = Math.cos(perpAngle) * rayWidth
        const offsetY = Math.sin(perpAngle) * rayWidth

        ctx.lineTo(endX - offsetX, endY - offsetY)
        ctx.lineTo(endX + offsetX, endY + offsetY)
        ctx.closePath()

        // Pulsating Opacity
        let alpha = 0.15 // Base alpha
        if (pulsating) {
          alpha += Math.sin(time * 3 + i) * 0.05
        }
        // Normalize alpha
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha))

        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
      if (followMouse) window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [
    raysOrigin,
    raysColor,
    raysSpeed,
    lightSpread,
    rayLength,
    pulsating,
    fadeDistance,
    saturation,
    noiseAmount,
    distortion,
    mouseInfluence,
    followMouse,
  ])

  return (
    <div
      ref={containerRef}
      className={cn(
        'pointer-events-none overflow-hidden absolute inset-0',
        className,
      )}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full opacity-60" />
    </div>
  )
}
