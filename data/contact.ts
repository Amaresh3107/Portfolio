// Single source of truth for your GitHub profile URL.
// Used for social links AND as the default per-project link in data/projects.ts,
// so changing your username only ever means editing this one line.
export const githubProfileUrl = "https://github.com/amaresh3107"

// Set phone to undefined (or comment out the line) to hide it everywhere —
// data/personal.ts and components/sections/contact.tsx both check for it
// before rendering, so an empty/missing phone just disappears cleanly.
export const contactData: {
  phone?: string
  email?: string
  location?: string
  socialLinks: { platform: string; url: string }[]
} = {
  // phone: "+91 9334216699",
  email: "amareshkr07@gmail.com",
  location: "Bengaluru, India",
  socialLinks: [
    { platform: "github", url: githubProfileUrl },
    { platform: "linkedin", url: "https://www.linkedin.com/in/amaresh3107" },
    { platform: "twitter", url: "https://x.com/amaresh3107" },
  ],
}
