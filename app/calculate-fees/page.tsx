"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"

const sixMonthCourses = [
  { id: "first-aid", name: "First Aid", price: 1500 },
  { id: "sewing", name: "Sewing", price: 1500 },
  { id: "landscaping", name: "Landscaping", price: 1500 },
  { id: "life-skills", name: "Life Skills", price: 1500 },
]

const sixWeekCourses = [
  { id: "childminding", name: "Childminding", price: 750 },
  { id: "cooking", name: "Cooking", price: 750 },
  { id: "garden-maintenance", name: "Garden Maintenance", price: 750 },
]

export default function CalculateFeesPage() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])

  const toggleCourse = (courseId: string) => {
    setSelectedCourses((prev) => (prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]))
  }

  const calculateTotal = () => {
    const allCourses = [...sixMonthCourses, ...sixWeekCourses]
    return selectedCourses.reduce((total, courseId) => {
      const course = allCourses.find((c) => c.id === courseId)
      return total + (course?.price || 0)
    }, 0)
  }

  const total = calculateTotal()

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calculator className="h-16 w-16 text-slate-700" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Course Fee Calculator</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Select the courses you're interested in and see your total fees with automatic discounts applied.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Course Selection */}
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Select Courses</h2>
            <p className="text-slate-600 mb-6">Choose the courses you want to enroll in</p>

            {/* 6-Month Courses */}
            <div className="mb-6">
              <h3 className="font-bold text-slate-800 mb-3">6-Month Courses (R1,500 each)</h3>
              <div className="space-y-3">
                {sixMonthCourses.map((course) => (
                  <label key={course.id} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedCourses.includes(course.id)}
                        onChange={() => toggleCourse(course.id)}
                        className="h-5 w-5 rounded border-slate-300"
                      />
                      <span className="text-slate-700">{course.name}</span>
                    </div>
                    <span className="text-slate-600">R{course.price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 6-Week Courses */}
            <div>
              <h3 className="font-bold text-slate-800 mb-3">6-Week Courses (R750 each)</h3>
              <div className="space-y-3">
                {sixWeekCourses.map((course) => (
                  <label key={course.id} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedCourses.includes(course.id)}
                        onChange={() => toggleCourse(course.id)}
                        className="h-5 w-5 rounded border-slate-300"
                      />
                      <span className="text-slate-700">{course.name}</span>
                    </div>
                    <span className="text-slate-600">R{course.price}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Fee Summary */}
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Fee Summary</h2>

            {selectedCourses.length === 0 ? (
              <p className="text-slate-600 text-center py-12">Select courses to see your fee calculation</p>
            ) : (
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-4">
                  <p className="text-slate-600 mb-2">Selected Courses: {selectedCourses.length}</p>
                  <p className="text-3xl font-bold text-slate-800">R{total}</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 mb-2">Discounts Applied:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 5% off for 2-3 courses</li>
                    <li>• 10% off for 4-5 courses</li>
                    <li>• 15% off for 6+ courses</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
