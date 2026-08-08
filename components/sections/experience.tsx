import { experienceData } from "@/data/experience"

export default function Experience() {
  return (
    <div className="space-y-16">
      <div>
        <p className="stage-label mb-6">work experience</p>
        <div className="space-y-6">
          {experienceData.work.map((job) => (
            <div key={job.role} className="dev-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-light-grey font-semibold">
                  {job.role} <span className="text-dim font-normal">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-dim">{job.period}</span>
              </div>
              <p className="text-xs text-amber font-mono mt-1">{job.title}</p>
              <ul className="mt-4 space-y-2">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="diff-add text-sm text-dim leading-relaxed">
                    {r}
                  </li>
                ))}
              </ul>
              {job.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map((t) => (
                    <span key={t} className="font-mono text-xs text-dim border border-wire rounded px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="stage-label mb-6">self-directed devops track</p>
        <div className="space-y-6">
          {experienceData.selfStudy.map((item) => (
            <div key={item.title} className="dev-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-light-grey font-semibold">{item.title}</h3>
                <span className="font-mono text-xs text-signal">{item.period}</span>
              </div>
              <p className="mt-3 text-sm text-dim leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="stage-label mb-6">education</p>
        <div className="space-y-6">
          {experienceData.education.map((edu) => (
            <div key={edu.degree} className="dev-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-light-grey font-semibold">{edu.degree}</h3>
                <span className="font-mono text-xs text-dim">{edu.period}</span>
              </div>
              <p className="text-sm text-amber mt-1">{edu.institution}</p>
              <p className="mt-2 text-sm text-dim">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
