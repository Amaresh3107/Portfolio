"use server"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactForm(data: ContactFormData) {
  // This is a placeholder for actual email sending functionality
  // In a real implementation, you would use a service like SendGrid, Nodemailer, etc.

  // Validate the data
  if (!data.name || !data.email || !data.subject || !data.message) {
    throw new Error("All fields are required")
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    throw new Error("Invalid email address")
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return success (in a real app, you'd send the email here)
  return { success: true }
}
