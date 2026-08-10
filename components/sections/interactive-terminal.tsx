"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { personalData } from "@/data/personal"
import { contactData, githubProfileUrl } from "@/data/contact"
import { skillsData } from "@/data/skills"
import { projectsData } from "@/data/projects"
import { experienceData } from "@/data/experience"
import { certificationsData } from "@/data/certifications"

type Line =
  | { type: "input"; text: string }
  | { type: "output"; node: React.ReactNode }

const PROMPT = "amaresh@devops"

export default function InteractiveTerminal() {
  const router = useRouter()
  const [lines, setLines] = useState<Line[]>([])
  const [value, setValue] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)
  const [booted, setBooted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 1300)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [lines])

  function push(node: React.ReactNode) {
    setLines((prev) => [...prev, { type: "output", node }])
  }

  function Line({ children }: { children: React.ReactNode }) {
    return <p className="text-light-grey leading-relaxed">{children}</p>
  }
  function Dim({ children }: { children: React.ReactNode }) {
    return <p className="text-dim leading-relaxed">{children}</p>
  }
  function Amber({ children }: { children: React.ReactNode }) {
    return <p className="text-amber leading-relaxed">{children}</p>
  }
  function Signal({ children }: { children: React.ReactNode }) {
    return <p className="text-signal leading-relaxed">{children}</p>
  }

  const commandList: { cmd: string; desc: string }[] = [
    { cmd: "whoami", desc: "who I am" },
    { cmd: "about", desc: "short bio" },
    { cmd: "skills", desc: "technical skills" },
    { cmd: "projects", desc: "list projects" },
    { cmd: "experience", desc: "work history" },
    { cmd: "education", desc: "education history" },
    { cmd: "certifications", desc: "certifications" },
    { cmd: "contact", desc: "how to reach me" },
    { cmd: "resume", desc: "open my resume" },
    { cmd: "social", desc: "social / profile links" },
    { cmd: "open <page>", desc: "go to a page (about, skills, experience, projects, contact)" },
    { cmd: "clear", desc: "clear the terminal" },
    { cmd: "help", desc: "list commands" },
  ]

  function renderHelp() {
    return (
      <div className="space-y-1">
        <Dim># available commands</Dim>
        {commandList.map((c) => (
          <p key={c.cmd} className="text-light-grey">
            <span className="text-amber">{c.cmd.padEnd(14, " ")}</span>
            <span className="text-dim"> {c.desc}</span>
          </p>
        ))}
      </div>
    )
  }

  function run(raw: string) {
    const trimmed = raw.trim()
    setLines((prev) => [...prev, { type: "input", text: raw }])
    if (trimmed.length === 0) return

    setHistory((prev) => [...prev, raw])
    setHistoryIndex(null)

    const [cmdRaw, ...rest] = trimmed.split(/\s+/)
    const cmd = cmdRaw.toLowerCase()
    const arg = rest.join(" ").toLowerCase()

    switch (cmd) {
      case "help": {
        push(renderHelp())
        break
      }

      case "whoami": {
        const githubHandle = githubProfileUrl.replace(/\/+$/, "").split("/").pop()
        push(
          <div>
            <Line>
              {personalData.fullName} <span className="text-dim">(@{githubHandle})</span>
            </Line>
            <Amber>{personalData.role}</Amber>
            <Dim>{personalData.tagline}</Dim>
          </div>,
        )
        break
      }

      case "about": {
        push(
          <div className="space-y-2 max-w-xl">
            {personalData.bio.map((p, i) => (
              <Dim key={i}>{p}</Dim>
            ))}
          </div>,
        )
        break
      }

      case "skills": {
        push(
          <div className="space-y-1">
            {skillsData.categories.map((c) => (
              <p key={c.name}>
                <span className="text-amber">{c.name}:</span>{" "}
                <span className="text-dim">{c.skills.map((s) => s.name).join(", ")}</span>
              </p>
            ))}
          </div>,
        )
        break
      }

      case "projects": {
        push(
          <div className="space-y-2">
            {projectsData.map((p, i) => (
              <div key={p.id}>
                <Line>
                  <span className="text-signal">{i + 1}.</span> {p.title}{" "}
                  <span className="text-dim">({p.period})</span>
                </Line>
                <Dim>
                  {p.technologies.slice(0, 5).join(", ")}
                  {p.liveUrl ? ` — live: ${p.liveUrl}` : ""}
                </Dim>
              </div>
            ))}
            <Dim># type "open projects" to see full details</Dim>
          </div>,
        )
        break
      }

      case "experience": {
        push(
          <div className="space-y-2">
            {experienceData.work.map((w) => (
              <div key={w.role}>
                <Line>
                  {w.role} <span className="text-dim">· {w.company}</span>
                </Line>
                <Amber>{w.period}</Amber>
              </div>
            ))}
            {experienceData.selfStudy.map((s) => (
              <div key={s.title}>
                <Line>{s.title}</Line>
                <Dim>{s.period}</Dim>
              </div>
            ))}
          </div>,
        )
        break
      }

      case "education": {
        push(
          <div className="space-y-1">
            {experienceData.education.map((e) => (
              <div key={e.degree}>
                <Line>{e.degree}</Line>
                <Dim>
                  {e.institution} · {e.period}
                </Dim>
              </div>
            ))}
          </div>,
        )
        break
      }

      case "certifications":
      case "certs": {
        if (certificationsData.length === 0) {
          push(<Dim>No certifications listed yet.</Dim>)
        } else {
          push(
            <div className="space-y-1">
              {certificationsData.map((c) => (
                <p key={c.name}>
                  <span className="text-light-grey">{c.name}</span>{" "}
                  <span className="text-dim">
                    — {c.issuer} ({c.date})
                  </span>
                </p>
              ))}
            </div>,
          )
        }
        break
      }

      case "contact": {
        push(
          <div className="space-y-1">
            {contactData.email && (
              <p>
                <span className="text-amber">email:</span>{" "}
                <a href={`mailto:${contactData.email}`} className="text-light-grey hover:text-signal underline">
                  {contactData.email}
                </a>
              </p>
            )}
            {contactData.phone && (
              <p>
                <span className="text-amber">phone:</span> <span className="text-light-grey">{contactData.phone}</span>
              </p>
            )}
            {contactData.location && (
              <p>
                <span className="text-amber">location:</span>{" "}
                <span className="text-light-grey">{contactData.location}</span>
              </p>
            )}
          </div>,
        )
        break
      }

      case "resume": {
        if (personalData.resumeUrl) {
          window.open(personalData.resumeUrl, "_blank", "noopener,noreferrer")
          push(<Signal>✓ opening resume in a new tab...</Signal>)
        } else {
          push(<Dim>Resume link not set yet.</Dim>)
        }
        break
      }

      case "social": {
        push(
          <div className="space-y-1">
            {contactData.socialLinks.map((s) => (
              <p key={s.platform}>
                <span className="text-amber">{s.platform}:</span>{" "}
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-light-grey hover:text-signal underline">
                  {s.url}
                </a>
              </p>
            ))}
          </div>,
        )
        break
      }

      case "open": {
        const routes: Record<string, string> = {
          about: "/about",
          skills: "/skills",
          experience: "/experience",
          projects: "/projects",
          contact: "/contact",
          home: "/",
        }
        const target = routes[arg]
        if (target) {
          push(<Signal>✓ navigating to {target === "/" ? "/" : target}...</Signal>)
          setTimeout(() => router.push(target), 300)
        } else {
          push(
            <Dim>
              Usage: open &lt;about|skills|experience|projects|contact&gt;
            </Dim>,
          )
        }
        break
      }

      case "clear": {
        setLines([])
        break
      }

      case "sudo": {
        push(<Dim>Nice try. Permission denied — this terminal only has user privileges. 😄</Dim>)
        break
      }

      case "ls": {
        push(<Line>about.md  skills.json  projects/  experience.md  contact.sh</Line>)
        break
      }

      case "date": {
        push(<Line>{new Date().toString()}</Line>)
        break
      }

      case "echo": {
        push(<Line>{rest.join(" ")}</Line>)
        break
      }

      default: {
        push(
          <Dim>
            command not found: {cmd} — type <span className="text-amber">help</span> to see available commands
          </Dim>,
        )
      }
    }
  }

  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [expanded])

  useEffect(() => {
    if (expanded) {
      // focus after the modal is in the DOM
      const t = setTimeout(() => inputRef.current?.focus(), 0)
      return () => clearTimeout(t)
    }
  }, [expanded])

  useEffect(() => {
    if (!expanded) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setExpanded(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [expanded])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    run(value)
    setValue("")
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length === 0) return
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(nextIndex)
      setValue(history[nextIndex])
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex === null) return
      const nextIndex = historyIndex + 1
      if (nextIndex >= history.length) {
        setHistoryIndex(null)
        setValue("")
      } else {
        setHistoryIndex(nextIndex)
        setValue(history[nextIndex])
      }
    }
  }

  function renderTerminalBody(interactive: boolean) {
    const showFull = interactive && expanded
    return (
      <>
        <div className="terminal-bar">
          <span className="terminal-dot bg-fail" />
          <span className="terminal-dot bg-amber" />
          <span className="terminal-dot bg-signal" />
          <span className="ml-3 font-mono text-xs text-dim">{PROMPT}:~</span>
          {showFull && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setExpanded(false)
              }}
              aria-label="Close terminal"
              className="ml-auto text-dim hover:text-light-grey px-2"
            >
              ✕
            </button>
          )}
        </div>

        <div
          ref={interactive ? scrollRef : undefined}
          className={`p-5 font-mono text-sm overflow-y-auto ${showFull ? "max-h-[60vh]" : "max-h-[260px]"}`}
        >
          <p className="text-dim">
            <span className="text-signal">{PROMPT}</span>
            <span className="text-light-grey">:~$</span>{" "}
            <span
              className="typed-line text-light-grey align-bottom"
              style={{ "--char-count": personalData.heroCommand.length } as React.CSSProperties}
            >
              {personalData.heroCommand}
            </span>
          </p>

          {booted && (
            <>
              <div className="animate-fade-in">
                <p className="mt-2 text-light-grey">{personalData.fullName}</p>
                <p className="text-amber">{personalData.role}</p>
                <p className="text-dim">{personalData.tagline}</p>
                <p className="mt-3 text-dim">
                  # Run <span className="text-amber">help</span> to see all available commands
                </p>
              </div>

              {lines.map((line, i) =>
                line.type === "input" ? (
                  <p key={i} className="mt-3">
                    <span className="text-signal">{PROMPT}</span>
                    <span className="text-light-grey">:~$ </span>
                    <span className="text-light-grey">{line.text}</span>
                  </p>
                ) : (
                  <div key={i} className="mt-1">
                    {line.node}
                  </div>
                ),
              )}

              {showFull ? (
                <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-1.5">
                  <span className="text-signal">{PROMPT}</span>
                  <span className="text-light-grey">:~$</span>
                  <input
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    aria-label="Portfolio terminal command input"
                    className="flex-1 bg-transparent text-light-grey outline-none border-none font-mono text-sm min-w-0"
                    style={{ fontSize: "16px" }}
                  />
                </form>
              ) : (
                <p className="mt-3">
                  <span className="text-signal">{PROMPT}</span>
                  <span className="text-light-grey">:~$</span>
                  <span className="ml-1.5 inline-block h-4 w-2 bg-amber animate-blink align-middle" />
                </p>
              )}
            </>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      {/* Compact inline terminal */}
      <div
        className="terminal overflow-hidden animate-fade-in animate-delay-200 cursor-pointer"
        onClick={() => setExpanded(true)}
        role="button"
        tabIndex={0}
        aria-label="Open interactive terminal"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setExpanded(true)
        }}
      >
        {renderTerminalBody(false)}
      </div>

      {/* Expanded modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 backdrop-blur-sm px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setExpanded(false)
          }}
        >
          <div
            className="terminal overflow-hidden w-full max-w-2xl cursor-text"
            onClick={(e) => e.stopPropagation()}
          >
            {renderTerminalBody(true)}
          </div>
        </div>
      )}
    </>
  )
}
