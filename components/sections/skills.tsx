"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { skillsData } from "@/data/skills"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiFirebase,
  SiAndroid,
  SiKotlin,
  SiFlutter,
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiVercel,
  SiOpenjdk,
} from "react-icons/si"
import { FaCode } from "react-icons/fa"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const categories = ["All", ...skillsData.categories.map((cat) => cat.name)]

  const filteredSkills =
    activeCategory === "All"
      ? skillsData.categories.flatMap((cat) => cat.skills)
      : skillsData.categories.find((cat) => cat.name === activeCategory)?.skills || []

  // Map skill names to their respective icons
  const getSkillIcon = (skillName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      React: <SiReact className="w-full h-full" />,
      "Next.js": <SiNextdotjs className="w-full h-full" />,
      TypeScript: <SiTypescript className="w-full h-full" />,
      "Tailwind CSS": <SiTailwindcss className="w-full h-full" />,
      JavaScript: <SiJavascript className="w-full h-full" />,
      HTML5: <SiHtml5 className="w-full h-full" />,
      CSS3: <SiCss3 className="w-full h-full" />,
      "Spring Boot": <SiSpringboot className="w-full h-full" />,
      MongoDB: <SiMongodb className="w-full h-full" />,
      MySQL: <SiMysql className="w-full h-full" />,
      GraphQL: <SiGraphql className="w-full h-full" />,
      Firebase: <SiFirebase className="w-full h-full" />,
      Android: <SiAndroid className="w-full h-full" />,
      Kotlin: <SiKotlin className="w-full h-full" />,
      Java: <SiOpenjdk className="w-full h-full" />,
      Flutter: <SiFlutter className="w-full h-full" />,
      Figma: <SiFigma className="w-full h-full" />,
      "Adobe XD": <SiAdobexd className="w-full h-full" />,
      Sketch: <SiSketch className="w-full h-full" />,
      Git: <SiGit className="w-full h-full" />,
      Docker: <SiDocker className="w-full h-full" />,
      AWS: <SiAmazonwebservices className="w-full h-full" />,
      Vercel: <SiVercel className="w-full h-full" />,
    }

    return iconMap[skillName] || <FaCode className="w-full h-full" />
  }

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Technical Skills</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all ${
                activeCategory === category ? "glass text-light-grey" : "text-light-grey/60 hover:text-light-grey"
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass-card p-3 sm:p-4 rounded-lg flex flex-col items-center text-center"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3 flex items-center justify-center text-light-grey/80">
                {getSkillIcon(skill.name)}
              </div>
              <h4 className="font-medium mb-1 text-xs sm:text-sm md:text-base">{skill.name}</h4>
              <div className="w-full bg-gray-700/50 h-2 sm:h-2.5 rounded-full mt-1 sm:mt-2 overflow-hidden">
                <div className="h-full rounded-full bg-light-grey/60" style={{ width: `${skill.level}%` }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
