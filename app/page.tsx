import Image from "next/image"
import Link from "next/link"
import { Users, BookOpen, Trophy } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative h-32 w-32 rounded-full bg-white shadow-lg p-4">
              <Image src="/logo.png" alt="Empowering the Nation Logo" fill className="object-contain" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-800 mb-4">Welcome to Empowering the Nation</h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We are a leading SME dedicated to providing high-quality upskill training for domestic workers and
            gardeners. Our comprehensive courses are designed to enhance skills, boost confidence, and create better
            employment opportunities.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/6-month-courses"
              className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              View 6-Month Courses
            </Link>
            <Link
              href="/6-week-courses"
              className="bg-white text-slate-800 px-8 py-3 rounded-lg border-2 border-slate-300 hover:border-slate-400 transition-colors"
            >
              View 6-Week Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Expert Training */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-16 w-16 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Expert Training</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn from experienced professionals who understand the industry and provide practical, hands-on
                training.
              </p>
            </div>

            {/* Comprehensive Courses */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-16 w-16 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Comprehensive Courses</h3>
              <p className="text-slate-600 leading-relaxed">
                Choose from our range of 6-month intensive courses or 6-week short courses tailored to your needs.
              </p>
            </div>

            {/* Career Growth */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Career Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                Our training programs are designed to enhance your skills and open doors to better employment
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
