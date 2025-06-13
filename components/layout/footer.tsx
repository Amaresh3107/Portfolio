import { personalData } from "@/data/personal"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass mt-16 sm:mt-20 py-6 sm:py-8 border-t border-light-grey/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-center items-center">
          <p className="text-xs sm:text-sm text-light-grey/70 text-center">
            &copy; {currentYear} {personalData.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
