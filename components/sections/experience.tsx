"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { experienceData } from "@/data/experience"
import { Briefcase, ExternalLink } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Work Experience</h2>
          <p className="text-light-grey/70 max-w-2xl mx-auto text-sm sm:text-base">
            My professional journey and career highlights
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4 sm:space-y-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center">
            <Briefcase className="mr-2" size={18} />
            Professional Experience
          </h3>

          <div className="space-y-6 sm:space-y-8 pl-4 sm:pl-6">
            {experienceData.work.map((job, index) => (
              <motion.div key={index} variants={itemVariants} className="timeline-item pl-4 sm:pl-6 pb-6 sm:pb-8">
                <div className="timeline-dot" />
                <div className="glass-card p-4 sm:p-6 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold">{job.role}</h4>
                      <p className="text-light-grey/70 mb-1 sm:mb-2 text-sm sm:text-base">{job.title}</p>
                      <p className="text-xs sm:text-sm text-light-grey/60 mb-1">{job.company}</p>
                      <p className="text-xs sm:text-sm text-light-grey/60 mb-3 sm:mb-4">{job.period}</p>
                    </div>
                    {job.liveUrl && (
                      <a
                        href={job.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass p-2 sm:p-3 rounded-full hover:bg-light-grey/20 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-light-grey/80 text-sm sm:text-base">
                    {job.responsibilities.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {job.technologies && (
                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded-full glass">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
