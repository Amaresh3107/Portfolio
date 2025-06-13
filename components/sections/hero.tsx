"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { personalData } from "@/data/personal"
import { motion } from "framer-motion"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      containerRef.current.style.setProperty("--mouse-x", `${x * 20}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y * 20}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6"
      ref={containerRef}
    >
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245, 245, 245, 0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto max-w-4xl text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mb-4 sm:mb-6 gradient-text leading-tight">
            {personalData.displayName}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-light-grey/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            {personalData.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center glass px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base text-light-grey hover:bg-light-grey/10 transition-all duration-300"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>

      {/* Bouncing Arrow */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-light-grey/50" />
      </div>
    </section>
  )
}
