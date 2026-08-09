"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { personalData } from "@/data/personal"
import { contactData } from "@/data/contact"

export default function Hero() {
  const github = contactData.socialLinks.find((l) => l.platform === "github")?.url
  const linkedin = contactData.socialLinks.find((l) => l.platform === "linkedin")?.url
  const githubHandle = github?.replace(/\/+$/, "").split("/").pop()

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

        {/* Terminal panel */}
        <div className="terminal overflow-hidden animate-fade-in animate-delay-200">
          <div className="terminal-bar">
            <span className="terminal-dot bg-fail" />
            <span className="terminal-dot bg-amber" />
            <span className="terminal-dot bg-signal" />
            <span className="ml-3 font-mono text-xs text-dim">amaresh@devops:~</span>
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed">
            <p className="text-dim">
              <span className="text-signal">amaresh@devops</span>
              <span className="text-light-grey">:~$</span>
              <span
                className="typed-line text-light-grey align-bottom"
                style={{ "--char-count": personalData.heroCommand.length } as React.CSSProperties}
              >
                {personalData.heroCommand}
              </span>
            </p>
            <p className="mt-2 text-light-grey animate-fade-in animate-delay-300 opacity-0">
              {personalData.fullName} <span className="text-dim">(@{githubHandle})</span>
            </p>
            <p className="text-dim animate-fade-in animate-delay-300 opacity-0">{personalData.tagline}</p>
            <p className="mt-3 text-dim animate-fade-in animate-delay-400 opacity-0"># currently building</p>
            <p className="text-light-grey animate-fade-in animate-delay-400 opacity-0"> → {personalData.currentProject}</p>
            <p className="mt-4 animate-fade-in animate-delay-500 opacity-0">
              <span className="text-signal">amaresh@devops</span>
              <span className="text-light-grey">:~$</span>
              <span className="ml-1 inline-block h-4 w-2 bg-amber animate-blink align-middle" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
