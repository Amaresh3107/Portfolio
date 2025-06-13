import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import { seoData } from "@/data/seo"
import InitialLoader from "@/components/ui/initial-loader"

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    images: [{ url: seoData.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.ogImage],
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-light-grey">
      <InitialLoader />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-dark-grey to-black opacity-50" />
    </main>
  )
}
