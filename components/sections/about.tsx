"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { personalData } from "@/data/personal"
import { MapPin, Mail, Languages } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Map icons and actions to detail types
  const getIconAndAction = (detail: { label: string; value: string }) => {
    switch (detail.label) {
      case "Location":
        return {
          icon: <MapPin size={18} className="mr-2" />,
          action: `https://www.google.com/maps/place/${encodeURIComponent(detail.value)}`,
          isLink: true,
        }
      case "Email":
        return {
          icon: <Mail size={18} className="mr-2" />,
          action: `mailto:${detail.value}`,
          isLink: true,
        }
      case "Languages":
        return {
          icon: <Languages size={18} className="mr-2" />,
          action: null,
          isLink: false,
        }
      default:
        return {
          icon: null,
          action: null,
          isLink: false,
        }
    }
  }

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 gradient-text">About Me</h2>
            <div className="space-y-3 sm:space-y-4 text-light-grey/80 text-base sm:text-lg max-w-3xl mx-auto">
              {personalData.bio.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
              {personalData.details.map((detail, index) => {
                const { icon, action, isLink } = getIconAndAction(detail)

                const content = (
                  <div className="flex items-center">
                    {icon}
                    <span className="font-medium text-sm sm:text-base">{detail.value}</span>
                  </div>
                )

                return (
                  <div key={index} className="glass-card px-4 py-3 rounded-lg">
                    {isLink ? (
                      <a
                        href={action || "#"}
                        target={detail.label === "Location" ? "_blank" : undefined}
                        rel={detail.label === "Location" ? "noopener noreferrer" : undefined}
                        className="flex items-center hover:text-light-grey/80 transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
