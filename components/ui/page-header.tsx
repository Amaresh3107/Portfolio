export default function PageHeader({
  stage,
  title,
  description,
}: {
  stage: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-14">
      <p className="stage-label mb-3">{stage}</p>
      <h1 className="font-mono text-3xl sm:text-4xl font-bold text-light-grey tracking-tight">{title}</h1>
      {description && <p className="mt-4 max-w-2xl text-dim leading-relaxed">{description}</p>}
    </div>
  )
}
