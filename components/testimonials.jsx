"use client"
import { useState } from "react"
import Image from "next/image"
import { Icons } from "./icons"

export default function Testimonials({ testimonials = [] }) {
  const [current, setCurrent] = useState(0)
  if (!testimonials.length) return null
  const t = testimonials[current]

  return (
    <section className="py-20 bg-gradient-to-br from-[#0D5094] via-[#1a6bb8] to-[#0D5094] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Patient Stories</span>
          <h2 className="text-5xl font-bold mb-6 mt-4">Patient Testimonials</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Hear what our patients have to say about their experience at KCare Hospital</p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white text-gray-900 rounded-3xl p-10 shadow-2xl">
            <div className="flex justify-center mb-6">
              <Image src={t.image || "/placeholder.svg"} alt={t.name} width={80} height={80} className="rounded-full object-cover border-4 border-[#0D5094]/20" />
            </div>
            <div className="flex justify-center mb-6">
              {[...Array(t.rating || 5)].map((_, i) => <Icons.Star key={i} className="w-6 h-6 text-yellow-400" />)}
            </div>
            <blockquote className="text-xl mb-6 text-center italic leading-relaxed">"{t.text}"</blockquote>
            {t.textHindi && <div className="text-center text-gray-600 mb-6 text-lg">"{t.textHindi}"</div>}
            <div className="text-center">
              <div className="font-bold text-2xl text-[#0D5094] mb-1">{t.name}</div>
              {t.nameHindi && <div className="text-gray-600 mb-1">{t.nameHindi}</div>}
              <div className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">{t.location}</div>
            </div>
          </div>
          <button onClick={() => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white text-[#0D5094] p-4 rounded-full shadow-xl hover:bg-gray-50 transition-all hover:scale-110 cursor-pointer">
            <Icons.ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => setCurrent(p => (p + 1) % testimonials.length)} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white text-[#0D5094] p-4 rounded-full shadow-xl hover:bg-gray-50 transition-all hover:scale-110 cursor-pointer">
            <Icons.ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
