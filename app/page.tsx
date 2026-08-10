import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Hero from "@/components/sections/hero"
import { seoData } from "@/data/seo"
import { skillsData } from "@/data/skills"
import { projectsData } from "@/data/projects"

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
}

export default function Home() {
  const topSkills = skillsData.categories.flatMap((c) => c.skills).slice(0, 8)
  const featured = projectsData.slice(0, 2)

  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        <p className="stage-label mb-4">core toolset</p>
        <div className="flex flex-wrap gap-2">
          {topSkills.map((s) => (
            <span
              key={s.name}
              className="rounded-md border border-wire bg-panel px-3 py-1.5 font-mono text-xs text-light-grey"
            >
              {s.name}
            </span>
          ))}
        </div>
        <Link
          href="/skills"
          className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono text-amber hover:opacity-80"
        >
          View all skills <ArrowRight size={14} />
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-24">
        <p className="stage-label mb-4">featured projects</p>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p) => (
            <div key={p.id} className="dev-card p-6">
              <h3 className="text-light-grey font-semibold text-lg">{p.title}</h3>
              <p className="mt-3 text-sm text-dim leading-relaxed line-clamp-4">{p.description}</p>
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 mt-6 text-xs font-mono text-amber hover:opacity-80"
        >
          View all projects <ArrowRight size={14} />
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-24">
        <div className="dev-card p-8 text-center">
          <p className="stage-label justify-center mb-3">let's work together</p>
          <h2 className="font-mono text-2xl font-bold text-light-grey">
            Open to DevOps & Cloud opportunities.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 rounded-md bg-amber px-6 py-2.5 text-sm font-semibold text-ink hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
