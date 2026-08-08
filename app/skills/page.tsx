import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import Skills from "@/components/sections/skills"

export const metadata: Metadata = { title: "Skills" }

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <PageHeader
        stage="stage: skills"
        title="Technical Skills"
        description="Specialized in DevOps practices, cloud infrastructure, and full-stack application development."
      />
      <Skills />
    </main>
  )
}
