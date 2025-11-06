import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 bg-white rounded-full p-1">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <div>
              <p className="text-sm">© 2025 Empowering the Nation. All rights reserved.</p>
              <p className="text-sm text-slate-400">
                Empowering domestic workers and gardeners through quality training and education.
              </p>
            </div>
          </div>
          <div className="text-sm text-slate-300">Building skills. Creating opportunities.</div>
        </div>
      </div>
    </footer>
  )
}
