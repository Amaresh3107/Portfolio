"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { personalData } from "@/data/personal"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-wire/80 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-light-grey">
            <span className="text-amber">$</span> {personalData.displayName}
          </Link>

          {/* Desktop pipeline nav */}
          <nav className="pipeline-rail hidden lg:flex items-center">
            {navLinks.map((link, i) => {
              const active = pathname === link.href
              return (
                <div key={link.name} className="pipeline-node flex items-center bg-ink px-3">
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 font-mono text-xs uppercase tracking-wider"
                  >
                    <span
                      className={`pipeline-dot ${
                        active ? "bg-amber animate-pulse" : "bg-signal"
                      }`}
                    />
                    <span
                      className={
                        active
                          ? "text-amber"
                          : "text-dim group-hover:text-light-grey transition-colors"
                      }
                    >
                      {link.name}
                    </span>
                  </Link>
                </div>
              )
            })}
          </nav>

          <button
            className="lg:hidden text-light-grey p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-wire bg-panel px-4 py-3">
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 py-2.5 font-mono text-xs uppercase tracking-wider"
                >
                  <span className={`pipeline-dot ${active ? "bg-amber" : "bg-signal"}`} />
                  <span className={active ? "text-amber" : "text-dim"}>{link.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
