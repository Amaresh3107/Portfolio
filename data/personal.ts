import { contactData } from "@/data/contact"

export const personalData = {
  // ============================================================
  // COMMON - used site-wide (navbar, footer, browser tab, layout
  // metadata, and the hero's "Download Resume" button). Edit here
  // and it updates everywhere it appears.
  // ============================================================
  fullName: "Amaresh Kumar", // navbar, footer, layout metadata, About page image alt text
  displayName: "Amaresh Kumar", // navbar, footer, initial page loader

  // Drop your resume PDF in /public (e.g. public/resume.pdf) then set this to "/resume.pdf".
  // Or paste a hosted PDF link (Google Drive "anyone with the link" share URL, Supabase, etc).
  resumeUrl: "https://uafprjucxpleamuqqpkv.supabase.co/storage/v1/object/public/portfolio/resume/Amaresh_Kumar_Resume.pdf",
  // Drop a square image in /public (e.g. public/favicon.png) then set this to "/favicon.png".
  faviconUrl: "/favicon.png",

  // ============================================================
  // HOMEPAGE ("/") - only rendered in components/sections/hero.tsx
  // ============================================================
  role: "Quality Analyst @ Amazon", // amber line under your name
  heroSummary: "Aspiring AWS Cloud & DevOps Engineer skilled in containerizing and deploying full-stack apps on AWS EC2 with Docker, GitHub Actions, and Shell scripting — brings troubleshooting and root-cause analysis skills from professional experience at Amazon.",
  heroCommand: "whoami", // typed into the terminal panel on load
  tagline: "Building my way into DevOps & Cloud Engineering", // terminal, under the whoami output
  currentProject: "Production-ready E-commerce Platform (Docker, AWS EC2, Nginx, GitHub Actions)", // terminal "# currently building" line

  // ============================================================
  // ABOUT PAGE ("/about") - only rendered in components/sections/about.tsx
  // ============================================================

  // Drop your photo in /public (e.g. public/profile.jpg) then set this to "/profile.jpg".
  // Or paste a hosted image URL (Supabase, Cloudinary, etc).
  profileImageUrl: "/profile.jpg",

  bio: [
    "I'm an aspiring AWS Cloud & DevOps Engineer with hands-on experience containerizing and deploying full-stack applications on AWS EC2 using Docker, Docker Compose, GitHub Actions, Linux, and Shell scripting.",
    "I'm skilled in building CI/CD pipelines, automating deployments, and managing cloud-hosted applications — and I bring troubleshooting, analytical, and root-cause analysis skills developed through professional experience at Amazon.",
    "My flagship project, Antigravity Wholesale, is a full-stack platform (React, FastAPI, MongoDB) that I containerized with Docker and Docker Compose and deployed to AWS EC2 with a live production domain, wired up with a GitHub Actions CI/CD pipeline. I also built Brew & Chill, an automated CI/CD pipeline project with GitHub Actions, Nginx, and Let's Encrypt SSL on a custom subdomain.",
    "I'm targeting Junior/Associate DevOps Engineer, Cloud Support Associate, and SRE roles, and I'm currently working toward the AWS Certified AI Practitioner certification.",
  ],

  currentLearning: "AWS Certified AI Practitioner (in progress)", // feeds the "Currently learning" row below



  // Location, Email, and Phone are pulled from data/contact.ts - edit them there,
  // not here, so they only ever need to change in one place.
  // Phone is filtered out below if it's not set in contact.ts, so hiding it
  // there (comment it out or leave undefined) removes this row automatically.
  get details() {
    const languages = "English, Hindi, Marathi"
    return [
      contactData.location ? { label: "Location", value: contactData.location } : null,
      contactData.email ? { label: "Email", value: contactData.email } : null,
      contactData.phone ? { label: "Phone", value: contactData.phone } : null,
      this.currentLearning ? { label: "Currently learning", value: this.currentLearning } : null,
      languages ? { label: "Languages", value: languages } : null,
    ].filter((d): d is { label: string; value: string } => d !== null)
  },
}
