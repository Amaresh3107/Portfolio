import { personalData } from "@/data/personal"
import { certificationsData, certificationsEmptyState } from "@/data/certifications"

export default function About() {
  return (
    <div className="space-y-16">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
        <div className="dev-card p-1 aspect-square overflow-hidden rounded-lg">
          <img
            src={personalData.profileImageUrl || "/placeholder-user.jpg"}
            alt={personalData.fullName}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="space-y-4">
          {personalData.bio.map((para, i) => (
            <p key={i} className="text-dim leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>

      <div>
        <p className="stage-label mb-4">details</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {personalData.details.map((d) => (
            <div key={d.label} className="dev-card px-5 py-4">
              <p className="font-mono text-xs text-dim uppercase tracking-wide">{d.label}</p>
              <p className="mt-1 text-light-grey">{d.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="stage-label mb-4">licenses &amp; certifications</p>
        {certificationsData.length === 0 ? (
          <div className="dev-card px-5 py-6">
            <p className="text-dim text-sm">{certificationsEmptyState}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificationsData.map((cert) => (
              <div key={cert.name} className="dev-card p-5">
                {cert.imageUrl && (
                  <img
                    src={cert.imageUrl || "/placeholder.svg"}
                    alt={cert.name}
                    className="h-12 w-auto mb-3 object-contain"
                  />
                )}
                <p className="text-light-grey font-medium text-sm">{cert.name}</p>
                <p className="text-dim text-xs mt-1">{cert.issuer}</p>
                <p className="text-dim text-xs">{cert.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
