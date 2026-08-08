import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import Contact from "@/components/sections/contact"

export const metadata: Metadata = { title: "Contact" }

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <PageHeader stage="stage: contact" title="Let's Work Together" description="Open to DevOps, Cloud Support, and SRE roles." />
      <Contact />
    </main>
  )
}
