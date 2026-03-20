"use client"

import { useState } from "react"
import Image from "next/image"
import { Icons } from "./icons"

const testimonials = [
  {
    name: "Ramesh Gupta",
    nameHindi: "रमेश गुप्ता",
    location: "Delhi",
    rating: 5,
    image: "/images/doctor-placeholder.avif",
    text: "Excellent medical care and very professional staff. The doctors are highly skilled and the facilities are world-class. I am very satisfied with the treatment I received.",
    textHindi: "उत्कृष्ट चिकित्सा देखभाल और बहुत पेशेवर स्टाफ। डॉक्टर अत्यधिक कुशल हैं और सुविधाएं विश्व स्तरीय हैं।",
  },
  {
    name: "Sunita Devi",
    nameHindi: "सुनीता देवी",
    location: "Mumbai",
    rating: 5,
    image: "/images/doctor-female.avif",
    text: "KCare Hospital provided exceptional care during my surgery. The nursing staff was compassionate and the doctors explained everything clearly. Highly recommended!",
    textHindi:
      "केकेयर अस्पताल ने मेरी सर्जरी के दौरान असाधारण देखभाल प्रदान की। नर्सिंग स्टाफ दयालु था और डॉक्टरों ने सब कुछ स्पष्ट रूप से समझाया।",
  },
  {
    name: "Vikash Kumar",
    nameHindi: "विकास कुमार",
    location: "Bangalore",
    rating: 5,
    image: "/images/doctor-placeholder.avif",
    text: "The emergency services at KCare are outstanding. They saved my life during a critical situation. The medical team is highly professional and caring.",
    textHindi:
      "केकेयर की आपातकालीन सेवाएं उत्कृष्ट हैं। उन्होंने एक गंभीर स्थिति में मेरी जान बचाई। चिकित्सा टीम अत्यधिक पेशेवर और देखभाल करने वाली है।",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#0D5094] via-[#1a6bb8] to-[#0D5094] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Patient Stories
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6">Patient Testimonials</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Hear what our patients have to say about their experience at KCare Hospital
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white text-gray-900 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#0D5094]/10 to-transparent rounded-full -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-500/10 to-transparent rounded-full translate-x-16 translate-y-16"></div>

            <div className="relative">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-4 border-[#0D5094]/20"
                  />
                </div>
              </div>

              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Icons.Star key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl mb-8 text-center italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="text-center text-gray-600 mb-6 text-lg">
                "{testimonials[currentTestimonial].textHindi}"
              </div>

              <div className="text-center">
                <div className="font-bold text-2xl text-[#0D5094] mb-1">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600 mb-1">{testimonials[currentTestimonial].nameHindi}</div>
                <div className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white text-[#0D5094] p-4 rounded-full shadow-xl hover:bg-gray-50 transition-all duration-300 hover:scale-110 cursor-pointer group"
          >
            <Icons.ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white text-[#0D5094] p-4 rounded-full shadow-xl hover:bg-gray-50 transition-all duration-300 hover:scale-110 cursor-pointer group"
          >
            <Icons.ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentTestimonial ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75 hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
