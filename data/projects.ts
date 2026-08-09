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
    title: "Containerized Deployment & Infrastructure Debugging (Antigravity Wholesale)",
    period: "July 2026",
    description:
      "Containerized a full-stack wholesale application (React, FastAPI, MongoDB) using Docker and Docker Compose for multi-container deployment. Deployed to AWS EC2 with a live production domain using Docker networking, persistent volumes, and Linux administration. Built a GitHub Actions CI/CD pipeline to auto-deploy every push to main with deployment health checks, and automated EC2 provisioning with Bash scripts to install Docker, configure swap memory, and prepare the environment. Resolved production issues involving Docker builds, memory, disk space, and environment configuration.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    categories: ["Full Stack", "DevOps"],
    technologies: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "AWS EC2",
      "Linux",
      "Nginx",
      "Shell Scripting",
      "SSH",
      "MongoDB",
      "Bash",
    ],
    githubUrl: "https://github.com/Amaresh3107/duskft-ecommerce",
    liveUrl: "https://duskft.shop",
  },
  {
    id: 2,
    title: "Automated CI/CD Pipeline for Website Deployment (Brew & Chill)",
    period: "June 2026",
    description:
      "Built an automated CI/CD pipeline using GitHub Actions to deploy a website to an AWS EC2 instance on every push to main. Configured secure SSH key-based authentication and GitHub Secrets for automated deployments, and wrote shell scripts (deploy.sh, healthcheck.sh) to automate deployment, restart Nginx, and verify application health. Configured Nginx with a custom subdomain and secured it with Let's Encrypt SSL, eliminating manual deployments entirely.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    categories: ["DevOps", "CI/CD"],
    technologies: [
      "GitHub Actions",
      "AWS EC2",
      "Linux",
      "Nginx",
      "Shell Scripting",
      "SSH",
      "Git",
      "Let's Encrypt SSL",
      "DNS",
    ],
    githubUrl: "https://github.com/Amaresh3107/Brew-Chill",
    liveUrl: "https://brew.amaresh.info",
  },
  {
    id: 3,
    title: "Dockerized Multi-Tier Application Deployment (DevBoard)",
    period: "June 2026",
    description:
      "Containerized a full-stack application by creating Dockerfiles and orchestrating frontend, backend, and database services using Docker Compose. Configured Docker networking, persistent volumes, and environment variables for reliable multi-container communication. Automated Docker image build and deployment to an AWS EC2 instance using GitHub Actions and Linux shell scripts, with Nginx configured as a reverse proxy to route external traffic to the containerized frontend and backend. Documented the deployment architecture, environment setup, and troubleshooting steps in a structured README for reproducibility.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    categories: ["Full Stack", "Docker"],
    technologies: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "AWS EC2",
      "Linux",
      "Nginx",
      "Shell Scripting",
      "Git",
      "PostgreSQL",
      "Docker Networking",
      "Volumes",
    ],
    githubUrl: "https://github.com/Amaresh3107/devboard",
  },
]
