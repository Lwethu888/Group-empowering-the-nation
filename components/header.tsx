import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative h-12 w-12 bg-white rounded-full p-1">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Empowering the Nation</h1>
              <p className="text-sm text-slate-300">Training & Development</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
              Home
            </Link>
            <Link href="/6-month-courses" className="px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
              6-Month Courses
            </Link>
            <Link href="/6-week-courses" className="px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
              6-Week Courses
            </Link>
            <Link
              href="/calculate-fees"
              className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              Calculate Fees
            </Link>
            <Link href="/contact" className="px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
