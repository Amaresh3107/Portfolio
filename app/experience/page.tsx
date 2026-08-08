import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import Experience from "@/components/sections/experience"

export const metadata: Metadata = { title: "Experience" }

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <PageHeader stage="stage: experience" title="Experience & Education" />
      <Experience />
    </main>
  )
}
