"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Icons } from "./icons"

export default function HeroSlider({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    if (!slides.length) return
    const timer = setInterval(() => setCurrentSlide(prev => (prev + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  if (!slides.length) return null

  return (
    <section id="home" className="relative h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" priority={index === 0} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <div className="mb-6 inline-block">
                  <span className="bg-[#0D5094]/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">KCare Hospital Excellence</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{slide.title}</h1>
                <h2 className="text-xl md:text-2xl mb-6 text-gray-200 font-light">{slide.subtitle}</h2>
                <p className="text-lg mb-8 max-w-2xl leading-relaxed opacity-90">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] hover:from-[#1a6bb8] hover:to-[#0D5094] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer flex items-center justify-center">
                    Book Appointment <Icons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-[#0D5094] px-8 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm cursor-pointer">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => setCurrentSlide(p => (p - 1 + slides.length) % slides.length)} className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110 cursor-pointer">
        <Icons.ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={() => setCurrentSlide(p => (p + 1) % slides.length)} className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110 cursor-pointer">
        <Icons.ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"}`} />
        ))}
      </div>
    </section>
  )
}
