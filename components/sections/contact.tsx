"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { contactData } from "@/data/contact"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

// Custom X (Twitter) Icon Component
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = new FormData()
      form.append("access_key", "d937a747-9009-40c8-8b75-e6baae78b784")
      form.append("name", formData.name)
      form.append("email", formData.email)
      form.append("subject", formData.subject)
      form.append("message", formData.message)

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      })

      const data = await response.json()

      if (data.success) {
        setFormStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const socialIcons = {
    github: <Github size={18} className="sm:w-5 sm:h-5" />,
    linkedin: <Linkedin size={18} className="sm:w-5 sm:h-5" />,
    twitter: <XIcon size={18} />,
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Get In Touch</h2>
          <p className="text-light-grey/70 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10"
        >
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold">Contact Information</h3>

            <div className="space-y-3 sm:space-y-4">
              {contactData.email && (
                <div className="flex items-start">
                  <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-xs sm:text-sm text-light-grey/60">Email</h4>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="hover:text-light-grey/80 transition-colors text-sm sm:text-base break-all"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>
              )}

              {contactData.phone && (
                <div className="flex items-start">
                  <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-xs sm:text-sm text-light-grey/60">Phone</h4>
                    <a
                      href={`tel:${contactData.phone}`}
                      className="hover:text-light-grey/80 transition-colors text-sm sm:text-base"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>
              )}

              {contactData.location && (
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-xs sm:text-sm text-light-grey/60">Location</h4>
                    <p className="text-sm sm:text-base">{contactData.location}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 sm:pt-4">
              <h4 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">Connect with me</h4>
              <div className="flex space-x-3 sm:space-x-4">
                {contactData.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-2.5 sm:p-3 rounded-full hover:bg-light-grey/10 transition-colors"
                    aria-label={social.platform}
                  >
                    {socialIcons[social.platform as keyof typeof socialIcons]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
              <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full glass rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-light-grey/30 bg-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full glass rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-light-grey/30 bg-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full glass rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-light-grey/30 bg-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full glass rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-light-grey/30 bg-transparent text-sm sm:text-base resize-none"
                />
              </div>

              {formStatus.type && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    formStatus.type === "success" ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass py-2.5 sm:py-3 rounded-lg font-medium hover:bg-light-grey/10 transition-colors disabled:opacity-70 text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
