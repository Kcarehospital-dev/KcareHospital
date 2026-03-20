// Make the page client-side to use useEffect
"use client"

import { useEffect } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"
import { Icons } from "../../components/icons"

const allDepartments = [
  {
    name: "General",
    hindiName: "सामान्य चिकित्सा",
    iconClass: "fa-solid fa-stethoscope",
    color: "from-blue-500 to-blue-600",
    id: "general",
    description: "Comprehensive primary healthcare services for common medical conditions and routine check-ups.",
    services: ["General Consultation", "Health Check-ups", "Preventive Care", "Chronic Disease Management"],
  },
  {
    name: "Orthopedics",
    hindiName: "हड्डी रोग",
    iconClass: "fa-solid fa-bone",
    color: "from-green-500 to-green-600",
    id: "orthopedics",
    description: "Specialized care for bone, joint, and musculoskeletal disorders with advanced surgical techniques.",
    services: ["Joint Replacement", "Fracture Treatment", "Sports Medicine", "Spine Surgery"],
  },
  {
    name: "Anesthesiology",
    hindiName: "एनेस्थिसियोलॉजी",
    iconClass: "fa-solid fa-hand-holding-medical",
    color: "from-purple-500 to-purple-600",
    id: "anesthesiology",
    description: "Expert anesthesia services ensuring patient comfort and safety during surgical procedures.",
    services: ["General Anesthesia", "Regional Anesthesia", "Pain Management", "Critical Care"],
  },
  {
    name: "Pulmonary",
    hindiName: "पल्मोनरी",
    iconClass: "fa-solid fa-lungs",
    color: "from-teal-500 to-teal-600",
    id: "pulmonary",
    description: "Comprehensive respiratory care for lung diseases and breathing disorders.",
    services: ["Asthma Treatment", "COPD Management", "Sleep Studies", "Pulmonary Function Tests"],
  },
  {
    name: "Gastroenterology",
    hindiName: "गैस्ट्रोएंटरोलॉजी",
    iconClass: "fa-solid fa-viruses",
    color: "from-orange-500 to-orange-600",
    id: "gastroenterology",
    description: "Advanced digestive system care including endoscopic procedures and liver treatments.",
    services: ["Endoscopy", "Colonoscopy", "Liver Disease Treatment", "IBD Management"],
  },
  {
    name: "Neurology",
    hindiName: "न्यूरोलॉजी",
    iconClass: "fa-solid fa-user-doctor",
    color: "from-pink-500 to-pink-600",
    id: "neurology",
    description: "Specialized care for neurological disorders affecting the brain, spine, and nervous system.",
    services: ["Stroke Treatment", "Epilepsy Management", "Headache Treatment", "Neurological Surgery"],
  },
  {
    name: "Gynaecology",
    hindiName: "स्त्री रोग",
    iconClass: "fa-solid fa-venus",
    color: "from-rose-500 to-rose-600",
    id: "gynaecology",
    description: "Comprehensive women's health services including obstetrics and gynecological care.",
    services: ["Prenatal Care", "Gynecological Surgery", "Family Planning", "Menopause Management"],
  },
  {
    name: "Ear, Nose, Throat",
    hindiName: "कान, नाक, गला",
    iconClass: "fa-solid fa-ear-listen",
    color: "from-indigo-500 to-indigo-600",
    id: "ear-nose-throat",
    description: "Specialized ENT care for hearing, sinus, throat, and related disorders.",
    services: ["Hearing Tests", "Sinus Surgery", "Throat Procedures", "Voice Disorders"],
  },
  {
    name: "Cardiology",
    hindiName: "हृदय रोग",
    iconClass: "fa-solid fa-heart",
    color: "from-red-500 to-red-600",
    id: "cardiology",
    description: "Advanced cardiac care including interventional procedures and heart disease management.",
    services: ["Cardiac Catheterization", "Angioplasty", "Heart Surgery", "Cardiac Rehabilitation"],
  },
  {
    name: "Psychiatrics",
    hindiName: "मानसिक रोग",
    iconClass: "fa-solid fa-brain",
    color: "from-violet-500 to-violet-600",
    id: "psychiatrics",
    description: "Mental health services providing comprehensive psychiatric care and counseling.",
    services: ["Depression Treatment", "Anxiety Management", "Addiction Treatment", "Counseling Services"],
  },
  {
    name: "Prosthetics",
    hindiName: "प्रोथेटिक्स",
    iconClass: "fa-solid fa-wheelchair",
    color: "from-cyan-500 to-cyan-600",
    id: "prosthetics",
    description: "Prosthetic and orthotic services to improve mobility and quality of life.",
    services: ["Prosthetic Fitting", "Orthotic Devices", "Rehabilitation", "Mobility Training"],
  },
  {
    name: "Physiotherapy",
    hindiName: "भौतिक चिकित्सा",
    iconClass: "fa-solid fa-running",
    color: "from-emerald-500 to-emerald-600",
    id: "physiotherapy",
    description: "Physical therapy and rehabilitation services for injury recovery and mobility improvement.",
    services: ["Physical Rehabilitation", "Sports Therapy", "Pain Management", "Exercise Therapy"],
  },
  {
    name: "Dermatology",
    hindiName: "त्वचा विज्ञान",
    iconClass: "fa-solid fa-face-smile",
    color: "from-amber-500 to-amber-600",
    id: "dermatology",
    description: "Comprehensive skin care services including medical and cosmetic dermatology.",
    services: ["Skin Disease Treatment", "Cosmetic Procedures", "Acne Treatment", "Skin Cancer Screening"],
  },
  {
    name: "Plastic Surgery",
    hindiName: "प्लास्टिक सर्जरी",
    iconClass: "fa-solid fa-syringe",
    color: "from-fuchsia-500 to-fuchsia-600",
    id: "plastic-surgery",
    description: "Reconstructive and cosmetic surgery services with advanced surgical techniques.",
    services: ["Reconstructive Surgery", "Cosmetic Surgery", "Burn Treatment", "Hand Surgery"],
  },
  {
    name: "Keyhole Surgery",
    hindiName: "लैपरोस्कोपिक सर्जरी",
    iconClass: "fa-solid fa-microscope",
    color: "from-lime-500 to-lime-600",
    id: "keyhole-surgery",
    description: "Minimally invasive surgical procedures using advanced laparoscopic techniques.",
    services: ["Laparoscopic Surgery", "Endoscopic Procedures", "Minimally Invasive Surgery", "Robotic Surgery"],
  },
  {
    name: "Uro -Surgery",
    hindiName: "मूत्र रोग",
    iconClass: "fa-solid fa-toilet",
    color: "from-sky-500 to-sky-600",
    id: "uro-surgery",
    description: "Urological care including kidney, bladder, and urinary tract treatments.",
    services: ["Kidney Stone Treatment", "Prostate Surgery", "Bladder Procedures", "Urinary Tract Surgery"],
  },
]

export default function DepartmentsPage() {
  // Add useEffect to scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <nav className="mb-6">
              <Link href="/" className="text-gray-200 hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-gray-300">/</span>
              <span className="text-white">Departments</span>
            </nav>
            <h1 className="text-5xl font-bold mb-6">Our Medical Departments</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive healthcare across all medical specialties with expert doctors and state-of-the-art
              facilities
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDepartments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-br ${dept.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <i className={`${dept.iconClass} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0D5094] transition-colors">
                        {dept.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{dept.hindiName}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{dept.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {dept.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Icons.Shield className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/departments/${dept.id}`}>
                    <button className="w-full bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white py-3 rounded-lg font-medium hover:from-[#1a6bb8] hover:to-[#0D5094] transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
