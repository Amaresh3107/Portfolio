import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import About from "@/components/sections/about"

export const metadata: Metadata = { title: "About" }

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <PageHeader stage="stage: about" title="About Me" />
      <About />
    </main>
  )
}
