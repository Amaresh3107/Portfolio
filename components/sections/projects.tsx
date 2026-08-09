import { Github, ExternalLink } from "lucide-react"
import { projectsData } from "@/data/projects"
import Reveal from "@/components/ui/reveal"

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projectsData.map((project, i) => (
        <Reveal key={project.id} delay={i * 100}>
          <div className="dev-card p-6 flex flex-col h-full">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-light-grey font-semibold text-lg">{project.title}</h3>
              <span className="font-mono text-[11px] text-dim whitespace-nowrap">{project.period}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.categories.map((c) => (
                <span key={c} className="font-mono text-[10px] uppercase tracking-wide text-amber">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-dim leading-relaxed flex-1">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="font-mono text-xs text-dim border border-wire rounded px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-light-grey hover:text-amber transition-colors"
                >
                  <Github size={14} /> Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-light-grey hover:text-amber transition-colors"
                >
                  <ExternalLink size={14} /> Live
                </a>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
