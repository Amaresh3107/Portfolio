import { skillsData } from "@/data/skills"

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {skillsData.categories.map((cat) => (
        <div key={cat.name} className="dev-card p-6">
          <p className="stage-label mb-4">{cat.name}</p>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span
                key={s.name}
                className="rounded-md border border-wire bg-ink px-3 py-1.5 font-mono text-xs text-light-grey"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
