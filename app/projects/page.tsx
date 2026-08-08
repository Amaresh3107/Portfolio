import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import Projects from "@/components/sections/projects"

export const metadata: Metadata = { title: "Projects" }

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <PageHeader
        stage="stage: projects"
        title="Featured Projects"
        description="Real, deployed systems — each one shipped end-to-end, including the infrastructure and CI/CD around it."
      />
      <Projects />
    </main>
  )
}
