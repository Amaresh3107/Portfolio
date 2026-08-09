"use client"

import { useState, useEffect } from "react"
import { personalData } from "@/data/personal"
import { motion, AnimatePresence } from "framer-motion"

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            >
              {personalData.displayName}
            </motion.h1>

            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-light-grey loading-dot" />
              <div className="w-3 h-3 rounded-full bg-light-grey loading-dot" />
              <div className="w-3 h-3 rounded-full bg-light-grey loading-dot" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
