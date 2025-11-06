"use client"

import { MapPin, Phone, Mail } from "lucide-react"

const locations = [
  {
    name: "Johannesburg Training Center",
    address: "123 Training Street, Johannesburg CBD, Gauteng 2000",
    phone: "+27 11 123 4567",
    email: "johannesburg@empoweringthenation.co.za",
  },
  {
    name: "Cape Town Training Center",
    address: "456 Skills Avenue, Cape Town City Centre, Western Cape 8001",
    phone: "+27 21 456 7890",
    email: "capetown@empoweringthenation.co.za",
  },
  {
    name: "Durban Training Center",
    address: "789 Development Road, Durban Central, KwaZulu-Natal 4001",
    phone: "+27 31 789 0123",
    email: "durban@empoweringthenation.co.za",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-slate-800 text-center mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600 text-center mb-12 leading-relaxed">
          Ready to start your journey with Empowering the Nation? Get in touch with us today to learn more about our
          courses or to enroll.
        </p>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg border border-slate-200 mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Get in Touch</h2>
          <p className="text-slate-600 mb-6">Send us a message and we'll respond as soon as possible</p>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Courses of Interest</label>
              <input
                type="text"
                placeholder="Which courses are you interested in?"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your training goals or any questions you have..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Training Locations */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">Our Training Locations</h2>
          <p className="text-slate-600 text-center mb-8">
            Visit us at any of our three convenient training centers across South Africa
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.name} className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-4 flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  {location.name}
                </h3>

                <div className="space-y-3 text-sm text-slate-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    {location.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    {location.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    {location.email}
                  </p>
                </div>

                <div className="mt-4 bg-slate-100 rounded-lg h-48 flex items-center justify-center text-slate-500">
                  Map View
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
