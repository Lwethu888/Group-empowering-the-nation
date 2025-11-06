import Image from "next/image"
import { Clock } from "lucide-react"

const courses = [
  {
    title: "First Aid",
    duration: "6 months",
    price: "R1500",
    description:
      "Comprehensive first aid training covering emergency response, CPR, wound care, and medical emergencies.",
    image: "/first-aid-training-cpr-practice-with-training-dumm.jpg",
    details: [
      "Emergency response procedures",
      "CPR and rescue breathing",
      "Wound care and bandaging",
      "Medical emergency recognition",
      "Safety protocols",
    ],
  },
  {
    title: "Sewing",
    duration: "6 months",
    price: "R1500",
    description: "Master the art of sewing from basic stitches to advanced garment construction and alterations.",
    image: "/sewing-machine-close-up-with-fabric-being-sewn.jpg",
    details: [
      "Basic to advanced stitching",
      "Pattern reading and cutting",
      "Garment construction",
      "Alterations and repairs",
      "Machine maintenance",
    ],
  },
  {
    title: "Landscaping",
    duration: "6 months",
    price: "R1500",
    description: "Comprehensive landscaping course covering garden design, plant care, and outdoor space management.",
    image: "/landscaping-workers-maintaining-beautiful-garden-w.jpg",
    details: [
      "Garden design principles",
      "Plant care and selection",
      "Irrigation systems",
      "Tool usage and maintenance",
      "Outdoor space planning",
    ],
  },
  {
    title: "Life Skills",
    duration: "6 months",
    price: "R1500",
    description: "Essential life skills training covering communication, financial literacy, and personal development.",
    image: "/diverse-group-learning-life-skills-in-classroom-se.jpg",
    details: ["Communication skills", "Time management", "Problem solving", "Goal setting", "Financial literacy"],
  },
]

export default function SixMonthCoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-800 text-center mb-4">6-Month Training Courses</h1>
        <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Complete training programs that give you deep knowledge and practical skills. Each course is R1,500 and runs
          for 6 months.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <Image src={courses[0].image || "/placeholder.svg"} alt={courses[0].title} fill className="object-cover" />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <Image src={courses[1].image || "/placeholder.svg"} alt={courses[1].title} fill className="object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course) => (
            <div key={course.title} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="relative h-48">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-800">{course.title}</h3>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-slate-600 mb-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <p className="text-xl font-bold text-slate-800">{course.price}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{course.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.details.map((detail, index) => (
                      <li key={index} className="text-slate-600 text-sm">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
