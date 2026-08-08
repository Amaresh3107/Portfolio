type Project = {
  id: number
  title: string
  period: string
  description: string
  imageUrl: string
  categories: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Antigravity (Duskft)",
    period: "Recent months — actively maintained",
    description:
      "A full-stack B2B wholesale clothing platform built for Duskft: FastAPI + MongoDB backend, React 19 frontend, with a storefront, customer portal, and a 14-module admin panel. Containerized with Docker (multi-stage builds for FastAPI + React + MongoDB), orchestrated with Docker Compose, deployed to an Ubuntu EC2 instance, and shipped through a GitHub Actions CI/CD pipeline. Debugged real infrastructure issues in production: OOM failures during frontend builds (fixed with swap + NODE_OPTIONS), Docker build-cache disk exhaustion, and stale baked-in backend URLs after an EC2 migration.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    categories: ["Full Stack", "DevOps"],
    technologies: [
      "FastAPI",
      "MongoDB",
      "React 19",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "AWS EC2",
      "Nginx",
    ],
    githubUrl: "https://github.com/Amaresh3107",
  },
  {
    id: 2,
    title: "Brew & Chill",
    period: "Earlier project",
    description:
      "A CI/CD reference project built to learn deployment automation end-to-end: GitHub Actions pipeline, EC2 hosting, Nginx as a reverse proxy, and rollback logic on failed deploys. This pipeline design was later reused and extended as the template for the Antigravity/Duskft deployment.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    categories: ["DevOps", "CI/CD"],
    technologies: ["GitHub Actions", "AWS EC2", "Nginx", "Bash"],
    githubUrl: "https://github.com/Amaresh3107",
  },
  {
    id: 3,
    title: "devboard",
    period: "Earlier project",
    description:
      "A dockerized three-tier application — React frontend, Go backend, PostgreSQL database — built to practice containerizing a full stack with a compiled backend language and a relational database, outside the Node/Mongo stack used elsewhere.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    categories: ["Full Stack", "Docker"],
    technologies: ["React", "Go", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Amaresh3107",
  },
]
