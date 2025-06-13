"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { personalData } from "@/data/personal"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[95%] sm:w-auto ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="glass rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick("#home")}
            className="text-base sm:text-lg md:text-xl font-bold tracking-tighter gradient-text cursor-pointer whitespace-nowrap"
          >
            {personalData.displayName}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 ml-4 xl:ml-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-xs xl:text-sm font-medium gradient-text cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 xl:px-4 py-1.5 xl:py-2 rounded-full glass text-xs xl:text-sm font-medium gradient-text hover:bg-light-grey/10 transition-colors ml-2"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-light-grey ml-2 sm:ml-4 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden glass rounded-2xl mt-2 p-3 sm:p-4 animate-fade-in w-full">
          <nav className="flex flex-col space-y-2 sm:space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium gradient-text text-left py-2"
              >
                {link.name}
              </button>
            ))}
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full glass text-sm font-medium gradient-text hover:bg-light-grey/10 transition-colors text-center mt-2"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
