"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { personalData } from "@/data/personal"
import { contactData } from "@/data/contact"
import InteractiveTerminal from "@/components/sections/interactive-terminal"

export default function Hero() {
  const github = contactData.socialLinks.find((l) => l.platform === "github")?.url
  const linkedin = contactData.socialLinks.find((l) => l.platform === "linkedin")?.url

  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-20 overflow-hidden">
      <div className="glow-orb h-72 w-72 bg-amber -top-10 -left-16" />
      <div className="glow-orb h-72 w-72 bg-signal top-40 right-0" />
      <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div className="animate-fade-in">
          <p className="stage-label mb-4">pipeline: portfolio / stage: intro</p>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold leading-tight text-light-grey">
            {personalData.fullName}
          </h1>
          <p className="mt-3 text-lg text-amber font-mono">{personalData.role}</p>
          <p className="mt-5 max-w-lg text-dim leading-relaxed">{personalData.heroSummary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber/20"
            >
              View my work <ArrowRight size={16} />
            </Link>
            {personalData.resumeUrl ? (
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-wire px-5 py-2.5 text-sm font-semibold text-light-grey transition-all hover:border-amber/50 hover:-translate-y-0.5"
              >
                Download Resume
              </a>
            ) : null}
            <div className="flex items-center gap-3 ml-1">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-dim hover:text-amber transition-colors">
                  <Github size={20} />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-dim hover:text-amber transition-colors">
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Interactive terminal panel */}
        <InteractiveTerminal />
      </div>
    </section>
  )
}
