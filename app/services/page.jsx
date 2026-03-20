// Make the page client-side to use useEffect
"use client"

import { useEffect } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"
import { Icons } from "../../components/icons"

const allServices = [
  {
    name: "State of the Art Modular OTs",
    hindiName: "अत्याधुनिक मॉड्यूलर ओ.टी.",
    iconClass: "fa-solid fa-bed-pulse",
    color: "from-blue-500 to-blue-600",
    id: "modular-ots",
    description:
      "Advanced modular operation theaters equipped with cutting-edge technology for complex surgical procedures.",
    features: ["HEPA Filtration", "Digital Integration", "Advanced Monitoring", "Sterile Environment"],
  },
  {
    name: "Labour Room",
    hindiName: "प्रसूति गृह",
    iconClass: "fa-solid fa-baby",
    color: "from-pink-500 to-pink-600",
    id: "labour-room",
    description: "Modern labor and delivery rooms designed for safe and comfortable childbirth experience.",
    features: ["24/7 Monitoring", "Pain Management", "Emergency Care", "Family Support"],
  },
  {
    id: "women-child-ward",
    name: "Women / Child Ward",
    hindiName: "महिला / बाल वार्ड",
    iconClass: "fa-solid fa-venus",
    color: "from-purple-500 to-purple-600",
    description: "Specialized wards providing comprehensive care for women and children with dedicated nursing staff.",
    features: ["Pediatric Care", "Maternal Health", "Specialized Nursing", "Family Accommodation"],
  },
  {
    id: "ccu",
    name: "C.C.U",
    hindiName: "सी.सी.यू.",
    iconClass: "fa-solid fa-heartbeat",
    color: "from-red-500 to-red-600",
    description: "Cardiac Care Unit with advanced monitoring and life support systems for heart patients.",
    features: ["Cardiac Monitoring", "Emergency Response", "Specialized Staff", "Advanced Equipment"],
  },
  {
    id: "icu",
    name: "State of the Art ICU (Surgical / Medical)",
    hindiName: "अत्याधुनिक आई.सी.यू. (सर्जिकल / मेडिकल)",
    iconClass: "fa-solid fa-procedures",
    color: "from-teal-500 to-teal-600",
    description: "Intensive Care Units equipped with latest technology for critical patient care and monitoring.",
    features: ["Ventilator Support", "24/7 Monitoring", "Critical Care", "Advanced Life Support"],
  },
  {
    id: "computerized-lab",
    name: "Computerized Lab",
    hindiName: "कम्प्यूटरीकृत पैथोलॉजी",
    iconClass: "fa-solid fa-microscope",
    color: "from-green-500 to-green-600",
    description: "Fully automated laboratory with computerized systems for accurate and quick diagnostic results.",
    features: ["Automated Testing", "Quick Results", "Quality Control", "Digital Reports"],
  },
  {
    id: "radiology",
    name: "Radiology",
    hindiName: "रेडियोलोजी",
    iconClass: "fa-solid fa-x-ray",
    color: "from-indigo-500 to-indigo-600",
    description: "Comprehensive imaging services including X-ray, ultrasound, and other diagnostic imaging.",
    features: ["Digital X-Ray", "Ultrasound", "Mammography", "Fluoroscopy"],
  },
  {
    id: "ct-scan",
    name: "CT Scan",
    hindiName: "सीटी स्कैन",
    iconClass: "fa-solid fa-x-ray",
    color: "from-orange-500 to-orange-600",
    description: "Advanced CT scanning technology for detailed cross-sectional imaging and diagnosis.",
    features: ["High Resolution", "3D Imaging", "Contrast Studies", "Emergency Scans"],
  },
  {
    id: "trauma-care",
    name: "Trauma Care",
    hindiName: "ट्रॉमा केयर",
    iconClass: "fa-solid fa-hand-holding-medical",
    color: "from-emerald-500 to-emerald-600",
    description: "24/7 trauma care services with rapid response team for emergency medical situations.",
    features: ["Emergency Response", "Trauma Surgery", "Critical Care", "Rehabilitation"],
  },
  {
    id: "vaccination-centre",
    name: "Vaccination Centre",
    hindiName: "टीकाकरण सेंटर",
    iconClass: "fa-solid fa-syringe",
    color: "from-cyan-500 to-cyan-600",
    description: "Comprehensive vaccination services for all age groups including routine and travel vaccines.",
    features: ["Child Immunization", "Adult Vaccines", "Travel Vaccines", "Corporate Programs"],
  },
  {
    id: "cath-lab",
    name: "State of the Art Cath Lab",
    hindiName: "अत्याधुनिक कैथ लैब",
    iconClass: "fa-solid fa-heartbeat",
    color: "from-rose-500 to-rose-600",
    description: "Advanced cardiac catheterization laboratory for diagnostic and interventional cardiac procedures.",
    features: ["Angiography", "Angioplasty", "Stent Placement", "Cardiac Interventions"],
  },
  {
    id: "in-house-pharmacy",
    name: "In – House Pharmacy",
    hindiName: "इन-हाउस फार्मेसी",
    iconClass: "fa-solid fa-prescription",
    color: "from-violet-500 to-violet-600",
    description: "Fully stocked pharmacy with wide range of medications and pharmaceutical care services.",
    features: ["Prescription Filling", "Drug Counseling", "Generic Options", "Insurance Billing"],
  },
  {
    id: "wards-suite-rooms",
    name: "Wards & Suite Rooms with Oxygen Support",
    hindiName: "वार्ड, प्राइवेट और सुइट रूम (ऑक्सीजन सुविधा के साथ)",
    iconClass: "fa-solid fa-mask-ventilator",
    color: "from-amber-500 to-amber-600",
    description: "Comfortable patient rooms with oxygen support and modern amenities for recovery.",
    features: ["Oxygen Support", "Private Rooms", "Suite Facilities", "Patient Comfort"],
  },
]

export default function ServicesPage() {
  // Add useEffect to scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <nav className="mb-6">
              <Link href="/" className="text-gray-200 hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-gray-300">/</span>
              <span className="text-white">Services</span>
            </nav>
            <h1 className="text-5xl font-bold mb-6">Our Healthcare Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive healthcare services with state-of-the-art facilities and advanced medical technology
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-br ${service.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <i className={`${service.iconClass} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{service.hindiName}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Icons.Shield className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/services/${service.id}`}>
                    <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
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
