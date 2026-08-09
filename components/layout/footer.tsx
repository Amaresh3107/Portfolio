import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { contactData } from "@/data/contact"
import { personalData } from "@/data/personal"

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-wire mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-dim">
          <span className="text-signal">✓</span> build passing · {year} © {personalData.displayName}
        </p>
        <div className="flex items-center gap-4">
          {contactData.email && (
            <a
              href={`mailto:${contactData.email}`}
              aria-label="Email"
              className="text-dim hover:text-amber transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
          {contactData.socialLinks.map((link) => {
            const Icon = iconMap[link.platform]
            if (!Icon) return null
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="text-dim hover:text-amber transition-colors"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
