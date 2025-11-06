import Image from "next/image"
import { Clock } from "lucide-react"

const courses = [
  {
    title: "Childminding",
    duration: "6 weeks",
    price: "R750",
    description:
      "Professional childcare training covering child development, safety, and effective caregiving techniques.",
    image: "/children-doing-educational-activities-with-caregiv.jpg",
    details: [
      "Child safety protocols",
      "Fun activities and games",
      "Healthy meals preparation",
      "Development stages understanding",
    ],
  },
  {
    title: "Cooking",
    duration: "6 weeks",
    price: "R750",
    description:
      "Culinary skills training covering meal planning, food safety, and cooking techniques for various cuisines.",
    image: "/fresh-vegetables-and-cooking-ingredients-on-cuttin.jpg",
    details: [
      "Basic cooking techniques",
      "Knife skills and safety",
      "Meal planning strategies",
      "Food hygiene standards",
    ],
  },
  {
    title: "Garden Maintenance",
    duration: "6 weeks",
    price: "R750",
    description:
      "Practical garden maintenance course covering plant care, pest control, and seasonal garden management.",
    image: "/beautiful-landscaped-garden-with-manicured-hedges-.jpg",
    details: ["Pruning plants and trees", "Lawn care techniques", "Pest control methods", "Seasonal maintenance"],
  },
]

export default function SixWeekCoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-800 text-center mb-4">6-Week Short Courses</h1>
        <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Quick courses to learn new skills fast. Perfect if you want to add to your abilities or try something new.
          Each course is R750 and runs for 6 weeks.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div key={course.title} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="relative h-48">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{course.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <p className="text-lg font-bold text-slate-800">{course.price}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{course.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.details.map((detail, index) => (
                      <li key={index} className="text-slate-600 text-sm">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-slate-800 text-white py-2.5 rounded-lg hover:bg-slate-700 transition-colors text-sm">
                  View Course Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
