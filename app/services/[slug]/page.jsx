import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"
import { Icons } from "../../../components/icons"

// Generate static params for all service slugs
export async function generateStaticParams() {
  return [
    { slug: "modular-ots" },
    { slug: "labour-room" },
    { slug: "women-child-ward" },
    { slug: "ccu" },
    { slug: "icu" },
    { slug: "computerized-lab" },
    { slug: "radiology" },
    { slug: "ct-scan" },
    { slug: "trauma-care" },
    { slug: "vaccination-centre" },
    { slug: "cath-lab" },
    { slug: "in-house-pharmacy" },
    { slug: "wards-suite-rooms" },
  ]
}

// Update the getServiceData function to use a more reliable approach
const getServiceData = (slug) => {
  // Convert all slugs to lowercase for case-insensitive matching
  const normalizedSlug = slug.toLowerCase()

  // Create a map of all services with their data
  const services = {
    "modular-ots": {
      name: "State of the Art Modular OTs",
      hindiName: "अत्याधुनिक मॉड्यूलर ओ.टी.",
      iconClass: "fa-solid fa-bed-pulse",
      color: "from-blue-500 to-blue-600",
      description:
        "Advanced modular operation theaters equipped with cutting-edge technology for complex surgical procedures with the highest standards of safety and precision.",
      detailedDescription:
        "Our state-of-the-art modular operation theaters represent the pinnacle of surgical technology and design. These advanced facilities are equipped with the latest medical equipment, HEPA filtration systems, and digital integration capabilities to ensure the highest standards of surgical care. Each OT is designed with modular components that can be customized for different types of surgeries, providing flexibility and efficiency for our surgical teams.",
      features: [
        "HEPA Filtration System for sterile environment",
        "Digital Integration with real-time monitoring",
        "Advanced Anesthesia Workstations",
        "High-definition surgical displays",
        "Integrated communication systems",
        "Temperature and humidity control",
        "Emergency backup power systems",
        "Modular design for surgical flexibility",
      ],
      procedures: [
        "Cardiac Surgery",
        "Neurosurgery",
        "Orthopedic Surgery",
        "General Surgery",
        "Minimally Invasive Surgery",
        "Emergency Surgery",
        "Transplant Surgery",
        "Pediatric Surgery",
      ],
      equipment: [
        "Advanced Surgical Microscopes",
        "Robotic Surgical Systems",
        "Electrosurgical Units",
        "Anesthesia Machines",
        "Patient Monitoring Systems",
        "Surgical Lights (LED)",
        "Operating Tables (Multi-position)",
        "Endoscopic Equipment",
      ],
      safety: [
        "Infection control protocols",
        "Quality assurance programs",
        "Regular equipment maintenance",
        "Staff training and certification",
        "Emergency response procedures",
        "Patient safety monitoring",
      ],
      image: "/images/slide1.jpeg",
    },
    "labour-room": {
      name: "Labour Room",
      hindiName: "प्रसूति गृह",
      iconClass: "fa-solid fa-baby",
      color: "from-pink-500 to-pink-600",
      description:
        "Modern labor and delivery rooms designed for safe and comfortable childbirth experience with comprehensive maternal care.",
      detailedDescription:
        "Our labor and delivery rooms are designed to provide a comfortable, supportive, and safe environment for childbirth. Equipped with the latest medical technology and staffed by experienced obstetricians, midwives, and nurses, our labor rooms ensure that both mother and baby receive the highest standard of care during this important life event.",
      features: [
        "Private, spacious delivery suites",
        "Advanced fetal monitoring systems",
        "Birthing beds with multiple positioning options",
        "Neonatal resuscitation equipment",
        "Epidural anesthesia availability",
        "Birthing balls and support tools",
        "Family-friendly environment",
        "Immediate access to NICU if needed",
      ],
      procedures: [
        "Normal Vaginal Delivery",
        "Assisted Delivery",
        "Cesarean Section",
        "Induction of Labor",
        "Pain Management During Labor",
        "Immediate Newborn Care",
        "Postpartum Care",
        "Breastfeeding Support",
      ],
      equipment: [
        "Electronic Fetal Monitors",
        "Ultrasound Machines",
        "Infant Warmers",
        "Cardiotocography (CTG) Machines",
        "Birthing Beds",
        "Neonatal Resuscitation Equipment",
        "Epidural Anesthesia Equipment",
        "Emergency Obstetric Kits",
      ],
      safety: [
        "24/7 obstetric and pediatric coverage",
        "Emergency response protocols",
        "Infection prevention measures",
        "Regular staff training",
        "Quality assurance monitoring",
        "Maternal and fetal risk assessment",
      ],
      image: "/images/slide2.jpeg",
    },
    icu: {
      name: "State of the Art ICU",
      hindiName: "अत्याधुनिक आई.सी.यू.",
      iconClass: "fa-solid fa-procedures",
      color: "from-teal-500 to-teal-600",
      description:
        "Advanced intensive care units equipped with cutting-edge technology for critical patient monitoring and life support.",
      detailedDescription:
        "Our state-of-the-art Intensive Care Units (ICUs) provide the highest level of care for critically ill patients. Equipped with advanced monitoring systems and life support equipment, our ICUs are designed to provide continuous observation and immediate intervention for patients with life-threatening conditions. Our multidisciplinary team of intensivists, critical care nurses, respiratory therapists, and other specialists work together to provide comprehensive care tailored to each patient's needs.",
      features: [
        "Advanced patient monitoring systems",
        "Mechanical ventilation capabilities",
        "Hemodynamic monitoring",
        "Continuous renal replacement therapy",
        "Isolation rooms for infection control",
        "Point-of-care testing",
        "Digital patient information systems",
        "Telemedicine capabilities",
      ],
      procedures: [
        "Mechanical Ventilation",
        "Hemodynamic Monitoring",
        "Central Venous Access",
        "Arterial Line Placement",
        "Intubation and Airway Management",
        "Continuous Renal Replacement Therapy",
        "Bronchoscopy",
        "Tracheostomy Care",
      ],
      equipment: [
        "Mechanical Ventilators",
        "Multiparameter Monitors",
        "Defibrillators",
        "Infusion Pumps",
        "Dialysis Machines",
        "Portable X-ray Machines",
        "Ultrasound Devices",
        "ECMO Machines",
      ],
      safety: [
        "24/7 intensivist coverage",
        "Nurse-to-patient ratio protocols",
        "Infection prevention measures",
        "Daily multidisciplinary rounds",
        "Medication safety protocols",
        "Ventilator-associated pneumonia prevention",
        "Central line infection prevention",
        "Early warning scoring systems",
      ],
      image: "/images/slide3.jpeg",
    },
    // Add default data for other services
    "women-child-ward": {
      name: "Women / Child Ward",
      hindiName: "महिला / बाल वार्ड",
      iconClass: "fa-solid fa-venus",
      color: "from-purple-500 to-purple-600",
      description:
        "Specialized wards providing comprehensive care for women and children with dedicated nursing staff.",
      detailedDescription:
        "Our Women and Child Ward provides specialized care in a comfortable and safe environment designed specifically for the needs of women and children.",
      features: ["Pediatric Care", "Maternal Health", "Specialized Nursing", "Family Accommodation"],
      procedures: ["Pediatric Treatment", "Maternal Care", "Newborn Care", "Family Support"],
      equipment: ["Pediatric Monitors", "Infant Care Equipment", "Maternal Care Tools", "Emergency Equipment"],
      safety: ["24/7 nursing care", "Pediatric specialists", "Emergency protocols", "Family support services"],
      image: "/images/slide4.jpeg",
    },
    ccu: {
      name: "C.C.U",
      hindiName: "सी.सी.यू.",
      iconClass: "fa-solid fa-heartbeat",
      color: "from-red-500 to-red-600",
      description: "Cardiac Care Unit with advanced monitoring and life support systems for heart patients.",
      detailedDescription:
        "Our Cardiac Care Unit provides specialized care for patients with heart conditions using advanced monitoring and treatment equipment.",
      features: ["Cardiac Monitoring", "Emergency Response", "Specialized Staff", "Advanced Equipment"],
      procedures: [
        "Cardiac Monitoring",
        "Emergency Cardiac Care",
        "Cardiac Rehabilitation",
        "Heart Disease Management",
      ],
      equipment: ["Cardiac Monitors", "Defibrillators", "ECG Machines", "Cardiac Emergency Equipment"],
      safety: [
        "24/7 cardiac monitoring",
        "Emergency response team",
        "Specialized cardiac nurses",
        "Advanced life support",
      ],
      image: "/images/slide1.jpeg",
    },
    "computerized-lab": {
      name: "Computerized Lab",
      hindiName: "कम्प्यूटरीकृत पैथोलॉजी",
      iconClass: "fa-solid fa-microscope",
      color: "from-green-500 to-green-600",
      description: "Fully automated laboratory with computerized systems for accurate and quick diagnostic results.",
      detailedDescription:
        "Our computerized laboratory uses the latest technology to provide accurate and timely diagnostic results with full automation and quality control.",
      features: ["Automated Testing", "Quick Results", "Quality Control", "Digital Reports"],
      procedures: ["Blood Tests", "Urine Analysis", "Biochemical Tests", "Microbiological Tests"],
      equipment: ["Automated Analyzers", "Microscopes", "Centrifuges", "Digital Systems"],
      safety: [
        "Quality control measures",
        "Accurate testing protocols",
        "Digital record keeping",
        "Expert technicians",
      ],
      image: "/images/slide2.jpeg",
    },
    radiology: {
      name: "Radiology",
      hindiName: "रेडियोलॉजी",
      iconClass: "fa-solid fa-x-ray",
      color: "from-indigo-500 to-indigo-600",
      description: "Comprehensive imaging services including X-ray, ultrasound, and other diagnostic imaging.",
      detailedDescription:
        "Our Radiology department provides comprehensive diagnostic imaging services using the latest technology and experienced radiologists.",
      features: ["Digital X-Ray", "Ultrasound", "Mammography", "Fluoroscopy"],
      procedures: ["X-Ray Imaging", "Ultrasound Scans", "Mammography", "Fluoroscopy Procedures"],
      equipment: ["Digital X-Ray Machines", "Ultrasound Systems", "Mammography Units", "Fluoroscopy Equipment"],
      safety: [
        "Radiation safety protocols",
        "Quality imaging standards",
        "Expert radiologists",
        "Patient safety measures",
      ],
      image: "/images/slide3.jpeg",
    },
    "ct-scan": {
      name: "CT Scan",
      hindiName: "सीटी स्कैन",
      iconClass: "fa-solid fa-x-ray",
      color: "from-orange-500 to-orange-600",
      description: "Advanced CT scanning technology for detailed cross-sectional imaging and diagnosis.",
      detailedDescription:
        "Our CT Scan facility provides high-resolution cross-sectional imaging for accurate diagnosis of various medical conditions.",
      features: ["High Resolution", "3D Imaging", "Contrast Studies", "Emergency Scans"],
      procedures: ["CT Brain", "CT Chest", "CT Abdomen", "CT Angiography"],
      equipment: [
        "Multi-slice CT Scanner",
        "Contrast Injection Systems",
        "3D Reconstruction Software",
        "Emergency CT Protocols",
      ],
      safety: [
        "Radiation dose optimization",
        "Contrast safety protocols",
        "Emergency procedures",
        "Expert radiologists",
      ],
      image: "/images/slide4.jpeg",
    },
    "trauma-care": {
      name: "Trauma Care",
      hindiName: "ट्रॉमा केयर",
      iconClass: "fa-solid fa-hand-holding-medical",
      color: "from-emerald-500 to-emerald-600",
      description: "24/7 trauma care services with rapid response team for emergency medical situations.",
      detailedDescription:
        "Our Trauma Care unit provides immediate and comprehensive care for trauma patients with a dedicated team and advanced equipment.",
      features: ["Emergency Response", "Trauma Surgery", "Critical Care", "Rehabilitation"],
      procedures: ["Emergency Surgery", "Trauma Assessment", "Critical Care Management", "Rehabilitation Services"],
      equipment: ["Emergency Equipment", "Surgical Instruments", "Monitoring Systems", "Life Support Equipment"],
      safety: ["24/7 availability", "Rapid response protocols", "Expert trauma team", "Advanced life support"],
      image: "/images/slide1.jpeg",
    },
    "vaccination-centre": {
      name: "Vaccination Centre",
      hindiName: "टीकाकरण सेंटर",
      iconClass: "fa-solid fa-syringe",
      color: "from-cyan-500 to-cyan-600",
      description: "Comprehensive vaccination services for all age groups including routine and travel vaccines.",
      detailedDescription:
        "Our Vaccination Centre provides comprehensive immunization services for all age groups with proper storage and administration protocols.",
      features: ["Child Immunization", "Adult Vaccines", "Travel Vaccines", "Corporate Programs"],
      procedures: ["Routine Immunization", "Travel Vaccination", "Corporate Vaccination", "Vaccine Counseling"],
      equipment: ["Vaccine Storage Systems", "Cold Chain Equipment", "Injection Equipment", "Record Keeping Systems"],
      safety: ["Cold chain maintenance", "Sterile procedures", "Adverse event monitoring", "Expert immunization staff"],
      image: "/images/slide2.jpeg",
    },
    "cath-lab": {
      name: "State of the Art Cath Lab",
      hindiName: "अत्याधुनिक कैथ लैब",
      iconClass: "fa-solid fa-heartbeat",
      color: "from-rose-500 to-rose-600",
      description: "Advanced cardiac catheterization laboratory for diagnostic and interventional cardiac procedures.",
      detailedDescription:
        "Our Cath Lab provides advanced cardiac catheterization services with state-of-the-art equipment and experienced cardiologists.",
      features: ["Angiography", "Angioplasty", "Stent Placement", "Cardiac Interventions"],
      procedures: [
        "Coronary Angiography",
        "Percutaneous Coronary Intervention",
        "Balloon Angioplasty",
        "Stent Implantation",
      ],
      equipment: [
        "Cardiac Catheterization Equipment",
        "Digital Imaging Systems",
        "Interventional Tools",
        "Monitoring Systems",
      ],
      safety: ["Sterile procedures", "Radiation safety", "Emergency protocols", "Expert cardiologists"],
      image: "/images/slide3.jpeg",
    },
    "in-house-pharmacy": {
      name: "In – House Pharmacy",
      hindiName: "इन-हाउस फार्मेसी",
      iconClass: "fa-solid fa-prescription",
      color: "from-violet-500 to-violet-600",
      description: "Fully stocked pharmacy with wide range of medications and pharmaceutical care services.",
      detailedDescription:
        "Our in-house pharmacy provides comprehensive pharmaceutical services with a wide range of medications and expert pharmaceutical care.",
      features: ["Prescription Filling", "Drug Counseling", "Generic Options", "Insurance Billing"],
      procedures: ["Medication Dispensing", "Drug Interaction Checking", "Patient Counseling", "Insurance Processing"],
      equipment: ["Automated Dispensing Systems", "Drug Storage Systems", "Computer Systems", "Safety Equipment"],
      safety: ["Drug safety protocols", "Quality assurance", "Expert pharmacists", "Proper storage conditions"],
      image: "/images/slide4.jpeg",
    },
    "wards-suite-rooms": {
      name: "Wards & Suite Rooms with Oxygen Support",
      hindiName: "वार्ड, प्राइवेट और सुइट रूम (ऑक्सीजन सुविधा के साथ)",
      iconClass: "fa-solid fa-mask-ventilator",
      color: "from-amber-500 to-amber-600",
      description: "Comfortable patient rooms with oxygen support and modern amenities for recovery.",
      detailedDescription:
        "Our patient rooms provide comfortable accommodation with modern amenities and medical support for optimal recovery.",
      features: ["Oxygen Support", "Private Rooms", "Suite Facilities", "Patient Comfort"],
      procedures: ["Patient Care", "Medical Monitoring", "Comfort Services", "Family Support"],
      equipment: ["Oxygen Supply Systems", "Patient Monitors", "Comfort Amenities", "Emergency Equipment"],
      safety: ["24/7 nursing care", "Medical monitoring", "Emergency response", "Infection control"],
      image: "/images/slide1.jpeg",
    },
  }

  // Return the service data if found, or null if not found
  return services[normalizedSlug] || null
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceData(params.slug)

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-teal-600 hover:underline">
            Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-gray-200 hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
              Services
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-white">{service.name}</span>
          </nav>
          <div className="flex items-center mb-6">
            <div
              className={`bg-gradient-to-br ${service.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mr-6`}
            >
              <i className={`${service.iconClass} text-2xl text-white`}></i>
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">{service.name}</h1>
              <p className="text-xl text-gray-200">{service.hindiName}</p>
            </div>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{service.detailedDescription}</p>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Icons.Shield className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedures Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Procedures Performed</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.procedures.map((procedure, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border-l-4 border-teal-500 bg-gray-50">
                      <Icons.Heart className="w-5 h-5 text-teal-500" />
                      <span className="text-gray-700">{procedure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Equipment Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Equipment</h3>
                <div className="space-y-3">
                  {service.equipment.map((equipment, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Icons.Shield className="w-4 h-4 text-teal-500" />
                      <span className="text-gray-700 text-sm">{equipment}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Measures</h3>
                <div className="space-y-3">
                  {service.safety.map((safety, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icons.Shield className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{safety}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Need This Service?</h3>
                <p className="mb-6">Contact us to learn more about this service or to schedule a consultation.</p>
                <button className="w-full bg-white text-teal-600 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icons.Phone className="w-5 h-5" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icons.Email className="w-5 h-5" />
                    <span>info@kcarehospital.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
