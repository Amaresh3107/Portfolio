"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { projectsData } from "@/data/projects"
import { ExternalLink, Github, Calendar } from "lucide-react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const uniqueCategories = ["All", ...new Set(projectsData.flatMap((project) => project.categories))]

  const filteredProjects =
    activeFilter === "All" ? projectsData : projectsData.filter((project) => project.categories.includes(activeFilter))

  // Function to generate initials from project title
  const getInitials = (title: string) => {
    // For single-word titles with multiple capital letters
    if (!title.includes(" ")) {
      const capitals = title.split("").filter((char) => char === char.toUpperCase() && char !== char.toLowerCase())
      if (capitals.length >= 2) {
        return capitals.join("")
      }
    }

    // Default behavior for multi-word titles or single-word titles without multiple capitals
    return title
      .split(" ")
      .map((word) => word[0])
      .join("")
  }

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Featured Projects</h2>
          <p className="text-light-grey/70 max-w-2xl mx-auto text-sm sm:text-base">
            A collection of my most significant work and contributions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10 px-2">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all ${
                activeFilter === category ? "glass text-light-grey" : "text-light-grey/60 hover:text-light-grey"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-card rounded-lg overflow-hidden group"
            >
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-dark-grey to-black flex items-center justify-center">
                <div className="glass-card w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold gradient-text">
                  {getInitials(project.title)}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass p-2 sm:p-3 rounded-full hover:bg-light-grey/20 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass p-2 sm:p-3 rounded-full hover:bg-light-grey/20 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                  {project.period && (
                    <div className="flex items-center text-xs text-light-grey/70">
                      <Calendar size={12} className="mr-1" />
                      <span>{project.period}</span>
                    </div>
                  )}
                </div>
                <p className="text-light-grey/70 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full glass">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
