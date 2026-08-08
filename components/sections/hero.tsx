"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { personalData } from "@/data/personal"
import { contactData } from "@/data/contact"

export default function Hero() {
  const github = contactData.socialLinks.find((l) => l.platform === "github")?.url
  const linkedin = contactData.socialLinks.find((l) => l.platform === "linkedin")?.url

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-20">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <p className="stage-label mb-4">pipeline: portfolio / stage: intro</p>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold leading-tight text-light-grey">
            {personalData.fullName}
          </h1>
          <p className="mt-3 text-lg text-amber font-mono">{personalData.role}</p>
          <p className="mt-5 max-w-lg text-dim leading-relaxed">{personalData.heroSummary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 text-sm font-semibold text-ink hover:opacity-90 transition-opacity"
            >
              View my work <ArrowRight size={16} />
            </Link>
            {personalData.resumeUrl ? (
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-wire px-5 py-2.5 text-sm font-semibold text-light-grey hover:border-amber/50 transition-colors"
              >
                Download Resume
              </a>
            ) : null}
            <div className="flex items-center gap-3 ml-1">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-dim hover:text-amber">
                  <Github size={20} />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-dim hover:text-amber">
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Terminal panel */}
        <div className="terminal overflow-hidden">
          <div className="terminal-bar">
            <span className="terminal-dot bg-fail" />
            <span className="terminal-dot bg-amber" />
            <span className="terminal-dot bg-signal" />
            <span className="ml-3 font-mono text-xs text-dim">amaresh@devops:~</span>
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed">
            <p className="text-dim">
              <span className="text-signal">amaresh@devops</span>
              <span className="text-light-grey">:~$</span>{" "}
              <span className="text-light-grey">{personalData.heroCommand}</span>
            </p>
            <p className="mt-2 text-light-grey">{personalData.role}</p>
            <p className="mt-3 text-dim"># currently building</p>
            <p className="text-light-grey">→ Antigravity/Duskft — Dockerized full-stack platform on AWS EC2</p>
            <p className="mt-3 text-dim"># currently learning</p>
            <p className="text-light-grey">→ Terraform</p>
            <p className="mt-4">
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
