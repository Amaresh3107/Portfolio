"use client"

import { useState } from "react"
import { Mail, MapPin, Github, Linkedin, Twitter, Loader2 } from "lucide-react"
import { contactData } from "@/data/contact"
import { sendContactForm } from "@/lib/actions"

const iconMap: Record<string, any> = { github: Github, linkedin: Linkedin, twitter: Twitter }

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setError("")
    const form = new FormData(e.currentTarget)
    try {
      await sendContactForm({
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        subject: String(form.get("subject") || ""),
        message: String(form.get("message") || ""),
      })
      setStatus("sent")
      ;(e.target as HTMLFormElement).reset()
    } catch (err: any) {
      setStatus("error")
      setError(err?.message || "Something went wrong")
    }
  }

  return (
    <div className="grid md:grid-cols-[1fr_1.3fr] gap-10">
      <div className="space-y-4">
        <div className="dev-card p-5 flex items-center gap-3">
          <Mail size={18} className="text-amber" />
          <a href={`mailto:${contactData.email}`} className="text-sm text-light-grey hover:text-amber">
            {contactData.email}
          </a>
        </div>
        <div className="dev-card p-5 flex items-center gap-3">
          <MapPin size={18} className="text-amber" />
          <span className="text-sm text-light-grey">{contactData.location}</span>
        </div>
        <div className="dev-card p-5 flex items-center gap-4">
          {contactData.socialLinks.map((link) => {
            const Icon = iconMap[link.platform]
            if (!Icon) return null
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dim hover:text-amber"
                aria-label={link.platform}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="dev-card p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="name"
            required
            placeholder="Name"
            className="bg-ink border border-wire rounded-md px-4 py-2.5 text-sm text-light-grey placeholder:text-dim focus:outline-none focus:border-amber/60"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="bg-ink border border-wire rounded-md px-4 py-2.5 text-sm text-light-grey placeholder:text-dim focus:outline-none focus:border-amber/60"
          />
        </div>
        <input
          name="subject"
          required
          placeholder="Subject"
          className="w-full bg-ink border border-wire rounded-md px-4 py-2.5 text-sm text-light-grey placeholder:text-dim focus:outline-none focus:border-amber/60"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Message"
          className="w-full bg-ink border border-wire rounded-md px-4 py-2.5 text-sm text-light-grey placeholder:text-dim focus:outline-none focus:border-amber/60"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 text-sm font-semibold text-ink hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {status === "sending" && <Loader2 size={16} className="animate-spin" />}
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {status === "sent" && <p className="text-signal text-sm font-mono">✓ Message sent — I'll get back to you.</p>}
        {status === "error" && <p className="text-fail text-sm font-mono">✗ {error}</p>}
      </form>
    </div>
  )
}
