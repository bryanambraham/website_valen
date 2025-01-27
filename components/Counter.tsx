"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  title: string
}

const easeOutQuad = (t: number): number => t * (2 - t)

const Counter = ({ end, duration = 2000, suffix = "", title }: CounterProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!inView) return

    const startTime = Date.now()
    const startValue = countRef.current

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeProgress = easeOutQuad(progress)
      const currentCount = Math.floor(startValue + (end - startValue) * easeProgress)

      setCount(currentCount)
      countRef.current = currentCount

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [end, duration, inView])

  return (
    <div ref={ref} className="text-center space-y-2">
      <div className="text-4xl md:text-5xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-white uppercase tracking-wider">{title}</div>
    </div>
  )
}

export { Counter }

