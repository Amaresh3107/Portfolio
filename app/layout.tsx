import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { seoData } from "@/data/seo"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(seoData.siteUrl),
  title: {
    default: seoData.title,
    template: `%s | ${seoData.title}`,
  },
  description: seoData.description,
  keywords: seoData.keywords,
  authors: [{ name: "AMARESH KUMAR" }],
  creator: "AMARESH KUMAR",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoData.siteUrl,
    title: seoData.title,
    description: seoData.description,
    siteName: seoData.title,
    images: [
      {
        url: seoData.ogImage,
        width: 1200,
        height: 630,
        alt: seoData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.ogImage],
    creator: seoData.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-light-grey antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
