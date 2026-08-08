// Add certifications here as you complete them, e.g.:
// {
//   name: "AWS Certified Solutions Architect – Associate",
//   issuer: "Amazon Web Services",
//   date: "Issued Mar 2026",
//   imageUrl: "/certs/aws-saa.png",
//   credentialUrl: "",
// },
export type Certification = {
  name: string
  issuer: string
  date: string
  imageUrl?: string
  credentialUrl?: string
}

export const certificationsData: Certification[] = []

// Shown when certificationsData is empty.
export const certificationsEmptyState =
  "Currently working on my first certification — this section will fill in as I complete it."
