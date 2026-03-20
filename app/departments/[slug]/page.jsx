import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"
import { Icons } from "../../../components/icons"

// Generate static params for all department slugs
export async function generateStaticParams() {
  return [
    { slug: "general" },
    { slug: "orthopedics" },
    { slug: "anesthesiology" },
    { slug: "pulmonary" },
    { slug: "gastroenterology" },
    { slug: "neurology" },
    { slug: "gynaecology" },
    { slug: "ear-nose-throat" },
    { slug: "cardiology" },
    { slug: "psychiatrics" },
    { slug: "prosthetics" },
    { slug: "physiotherapy" },
    { slug: "dermatology" },
    { slug: "plastic-surgery" },
    { slug: "keyhole-surgery" },
    { slug: "uro-surgery" },
  ]
}

// Update the getDepartmentData function to use a more reliable approach
const getDepartmentData = (slug) => {
  // Convert all slugs to lowercase for case-insensitive matching
  const normalizedSlug = slug.toLowerCase()

  // Create a map of all departments with their data
  const departments = {
    general: {
      name: "General Medicine",
      hindiName: "सामान्य चिकित्सा",
      iconClass: "fa-solid fa-stethoscope",
      color: "from-blue-500 to-blue-600",
      description:
        "Our General Medicine department provides comprehensive primary healthcare services for patients of all ages. We focus on preventive care, diagnosis, and treatment of common medical conditions.",
      detailedDescription:
        "The General Medicine department at KCare Hospital serves as the foundation of our healthcare services. Our experienced physicians provide comprehensive care for a wide range of medical conditions, from routine check-ups to complex medical problems. We emphasize preventive medicine and work closely with patients to maintain their overall health and well-being.",
      services: [
        "General Consultation and Health Check-ups",
        "Preventive Care and Screening",
        "Chronic Disease Management (Diabetes, Hypertension)",
        "Infectious Disease Treatment",
        "Geriatric Care",
        "Health Education and Counseling",
      ],
      procedures: [
        "Comprehensive Physical Examinations",
        "Diagnostic Testing Coordination",
        "Vaccination and Immunization",
        "Health Risk Assessment",
        "Medication Management",
        "Referral to Specialists",
      ],
      doctors: [
        {
          name: "Dr. Sunita Gupta",
          qualification: "MBBS, MD (Internal Medicine)",
          experience: "12+ Years",
          image: "/images/doctor-female.avif",
        },
        {
          name: "Dr. Rajesh Kumar",
          qualification: "MBBS, MD (General Medicine)",
          experience: "20+ Years",
          image: "/images/doctor-placeholder.avif",
        },
      ],
      facilities: [
        "Modern consultation rooms",
        "Digital health records",
        "Telemedicine services",
        "24/7 emergency consultation",
      ],
      image: "/images/slide3.jpeg",
    },
    orthopedics: {
      name: "Orthopedics",
      hindiName: "हड्डी रोग",
      iconClass: "fa-solid fa-bone",
      color: "from-green-500 to-green-600",
      description:
        "Our Orthopedics department specializes in the diagnosis and treatment of conditions affecting the musculoskeletal system.",
      detailedDescription:
        "The Orthopedics department at KCare Hospital offers comprehensive care for all bone, joint, and muscle-related conditions. Our team of experienced orthopedic surgeons and specialists use the latest techniques and technologies to provide effective treatments for a wide range of orthopedic issues, from sports injuries to complex joint replacements.",
      services: [
        "Joint Replacement Surgery",
        "Sports Medicine",
        "Spine Surgery",
        "Trauma Care",
        "Pediatric Orthopedics",
        "Arthroscopic Surgery",
      ],
      procedures: [
        "Total Hip Replacement",
        "Total Knee Replacement",
        "Arthroscopy",
        "Fracture Fixation",
        "Spinal Fusion",
        "Carpal Tunnel Release",
      ],
      doctors: [
        {
          name: "Dr. Amit Patel",
          qualification: "MBBS, MS (Orthopedics)",
          experience: "18+ Years",
          image: "/images/doctor-placeholder.avif",
        },
        {
          name: "Dr. Priya Sharma",
          qualification: "MBBS, DNB (Orthopedics)",
          experience: "15+ Years",
          image: "/images/doctor-female.avif",
        },
      ],
      facilities: [
        "Advanced orthopedic surgical suites",
        "Rehabilitation center",
        "3D motion analysis lab",
        "Digital X-ray and imaging",
      ],
      image: "/images/slide1.jpeg",
    },
    neurology: {
      name: "Neurology",
      hindiName: "न्यूरोलॉजी",
      iconClass: "fa-solid fa-brain",
      color: "from-pink-500 to-pink-600",
      description:
        "Our Neurology department provides specialized care for disorders of the nervous system, including the brain, spinal cord, and nerves.",
      detailedDescription:
        "The Neurology department at KCare Hospital is equipped with state-of-the-art technology and staffed by experienced neurologists who diagnose and treat a wide range of neurological conditions. We offer comprehensive care for patients with acute and chronic neurological disorders, using the latest diagnostic tools and treatment approaches.",
      services: [
        "Stroke Management",
        "Epilepsy Treatment",
        "Headache and Migraine Care",
        "Movement Disorders Treatment",
        "Neuromuscular Disease Management",
        "Sleep Disorders Evaluation",
      ],
      procedures: [
        "Electroencephalography (EEG)",
        "Electromyography (EMG)",
        "Nerve Conduction Studies",
        "Lumbar Puncture",
        "Neuropsychological Testing",
        "Botox Therapy for Neurological Conditions",
      ],
      doctors: [
        {
          name: "Dr. Vikram Singh",
          qualification: "MBBS, MD, DM (Neurology)",
          experience: "22+ Years",
          image: "/images/doctor-placeholder.avif",
        },
        {
          name: "Dr. Meera Joshi",
          qualification: "MBBS, MD (Neurology)",
          experience: "16+ Years",
          image: "/images/doctor-female.avif",
        },
      ],
      facilities: [
        "Advanced neurodiagnostic lab",
        "Dedicated stroke unit",
        "Epilepsy monitoring unit",
        "Neurorehabilitation center",
      ],
      image: "/images/slide2.jpeg",
    },
    anesthesiology: {
      name: "Anesthesiology",
      hindiName: "एनेस्थिसियोलॉजी",
      iconClass: "fa-solid fa-hand-holding-medical",
      color: "from-purple-500 to-purple-600",
      description: "Expert anesthesia services ensuring patient comfort and safety during surgical procedures.",
      detailedDescription:
        "Our Anesthesiology department provides comprehensive perioperative care with experienced anesthesiologists and state-of-the-art monitoring equipment.",
      services: ["General Anesthesia", "Regional Anesthesia", "Pain Management", "Critical Care"],
      procedures: ["Anesthesia Administration", "Pain Block Procedures", "Epidural Anesthesia", "Spinal Anesthesia"],
      doctors: [
        {
          name: "Dr. Meera Joshi",
          qualification: "MBBS, MD (Anesthesiology)",
          experience: "13+ Years",
          image: "/images/doctor-female.avif",
        },
      ],
      facilities: ["Advanced monitoring systems", "Pain management clinic", "Recovery units", "Emergency anesthesia"],
      image: "/images/slide1.jpeg",
    },
    pulmonary: {
      name: "Pulmonary Medicine",
      hindiName: "पल्मोनरी",
      iconClass: "fa-solid fa-lungs",
      color: "from-teal-500 to-teal-600",
      description: "Comprehensive respiratory care for lung diseases and breathing disorders.",
      detailedDescription:
        "Our Pulmonary Medicine department specializes in the diagnosis and treatment of respiratory conditions with advanced diagnostic and therapeutic capabilities.",
      services: ["Asthma Treatment", "COPD Management", "Sleep Studies", "Pulmonary Function Tests"],
      procedures: ["Bronchoscopy", "Pulmonary Function Testing", "Sleep Study", "Chest Tube Insertion"],
      doctors: [
        {
          name: "Dr. Arjun Reddy",
          qualification: "MBBS, MD (Pulmonary Medicine)",
          experience: "16+ Years",
          image: "/images/doctor-placeholder.avif",
        },
      ],
      facilities: ["Pulmonary function lab", "Sleep study center", "Bronchoscopy suite", "Respiratory therapy"],
      image: "/images/slide2.jpeg",
    },
    gastroenterology: {
      name: "Gastroenterology",
      hindiName: "गैस्ट्रोएंटरोलॉजी",
      iconClass: "fa-solid fa-viruses",
      color: "from-orange-500 to-orange-600",
      description: "Advanced digestive system care including endoscopic procedures and liver treatments.",
      detailedDescription:
        "Our Gastroenterology department offers comprehensive care for digestive disorders with advanced endoscopic and therapeutic procedures.",
      services: ["Endoscopy", "Colonoscopy", "Liver Disease Treatment", "IBD Management"],
      procedures: ["Upper Endoscopy", "Colonoscopy", "ERCP", "Liver Biopsy"],
      doctors: [
        {
          name: "Dr. Arjun Reddy",
          qualification: "MBBS, MD, DM (Gastroenterology)",
          experience: "16+ Years",
          image: "/images/doctor-placeholder.avif",
        },
      ],
      facilities: ["Endoscopy suite", "Advanced imaging", "Liver clinic", "IBD center"],
      image: "/images/slide3.jpeg",
    },
    gynaecology: {
      name: "Gynaecology",
      hindiName: "स्त्री रोग",
      iconClass: "fa-solid fa-venus",
      color: "from-rose-500 to-rose-600",
      description: "Comprehensive women's health services including obstetrics and gynecological care.",
      detailedDescription:
        "Our Gynaecology department provides complete women's healthcare services from adolescence through menopause with experienced specialists.",
      services: ["Prenatal Care", "Gynecological Surgery", "Family Planning", "Menopause Management"],
      procedures: ["Laparoscopic Surgery", "Hysteroscopy", "Normal Delivery", "Cesarean Section"],
      doctors: [
        {
          name: "Dr. Priya Sharma",
          qualification: "MBBS, MS (Gynecology)",
          experience: "15+ Years",
          image: "/images/doctor-female.avif",
        },
      ],
      facilities: ["Labor rooms", "Operation theaters", "Ultrasound facility", "Family planning clinic"],
      image: "/images/slide4.jpeg",
    },
    "ear-nose-throat": {
      name: "Ear, Nose, Throat",
      hindiName: "कान, नाक, गला",
      iconClass: "fa-solid fa-ear-listen",
      color: "from-indigo-500 to-indigo-600",
      description: "Specialized ENT care for hearing, sinus, throat, and related disorders.",
      detailedDescription:
        "Our ENT department provides comprehensive care for ear, nose, and throat conditions with advanced diagnostic and surgical capabilities.",
      services: ["Hearing Tests", "Sinus Surgery", "Throat Procedures", "Voice Disorders"],
      procedures: ["Tympanoplasty", "Septoplasty", "Tonsillectomy", "Adenoidectomy"],
      doctors: [
        {
          name: "Dr. Vikram Singh",
          qualification: "MBBS, MS (ENT)",
          experience: "22+ Years",
          image: "/images/doctor-placeholder.avif",
        },
      ],
      facilities: ["Audiometry lab", "Endoscopy suite", "Voice clinic", "Hearing aid center"],
      image: "/images/slide1.jpeg",
    },
    cardiology: {
      name: "Cardiology",
      hindiName: "हृदय रोग",
      iconClass: "fa-solid fa-heart",
      color: "from-red-500 to-red-600",
      description: "Advanced cardiac care including interventional procedures and heart disease management.",
      detailedDescription:
        "Our Cardiology department offers comprehensive cardiac care with state-of-the-art facilities and experienced cardiologists.",
      services: ["Cardiac Catheterization", "Angioplasty", "Heart Surgery", "Cardiac Rehabilitation"],
      procedures: ["Coronary Angiography", "PCI", "Pacemaker Implantation", "Echocardiography"],
      doctors: [
        {
          name: "Dr. Rajesh Kumar",
          qualification: "MBBS, MD, DM (Cardiology)",
          experience: "20+ Years",
          image: "/images/doctor-placeholder.avif",
        },
      ],
      facilities: ["Cath lab", "CCU", "Echo lab", "Cardiac rehabilitation center"],
      image: "/images/slide2.jpeg",
    },
    psychiatrics: {
      name: "Psychiatrics",
      hindiName: "मानसिक रोग",
      iconClass: "fa-solid fa-brain",
      color: "from-violet-500 to-violet-600",
      description: "Mental health services providing comprehensive psychiatric care and counseling.",
      detailedDescription:
        "Our Psychiatrics department offers comprehensive mental health services with experienced psychiatrists and counselors.",
      services: ["Depression Treatment", "Anxiety Management", "Addiction Treatment", "Counseling Services"],
      procedures: ["Psychiatric Evaluation", "Psychotherapy", "Medication Management", "Group Therapy"],
      doctors: [
        {
          name: "Dr. Meera Joshi",
          qualification: "MBBS, MD (Psychiatry)",
          experience: "16+ Years",
          image: "/images/doctor-female.avif",
        },
      ],
      facilities: ["Counseling rooms", "Group therapy hall", "Psychiatric ward", "Rehabilitation center"],
      image: "/images/slide3.jpeg",
    },
    prosthetics: {
      name: "Prosthetics",
      hindiName: "प्रोथेटिक्स",
      iconClass: "fa-solid fa-wheelchair",
      color: "from-cyan-500 to-cyan-600",
      description: "Prosthetic and orthotic services to improve mobility and quality of life.",
      detailedDescription:
        "Our Prosthetics department provides comprehensive prosthetic and orthotic services to help patients regain mobility and independence.",
      services: ["Prosthetic Fitting", "Orthotic Devices", "Rehabilitation", "Mobility Training"],
      procedures: ["Prosthetic Assessment", "Custom Fitting", "Gait Training", "Device Maintenance"],
      doctors: [
        {
          name: "Dr. Amit Patel",
          qualification: "MBBS, MS (Orthopedics)",
          experience: "18+ Years",
          image: "/images/doctor-placeholder.avif",
        },
      ],
      facilities: ["Fitting room", "Workshop", "Rehabilitation gym", "Gait analysis lab"],
      image: "/images/slide4.jpeg",
    },
    physiotherapy: {
      name: "Physiotherapy",
      hindiName: "भौतिक चिकित्सा",
      iconClass: "fa-solid fa-running",
      color: "from-emerald-500 to-emerald-600",
      description: "Physical therapy and rehabilitation services for injury recovery and mobility improvement.",
      detailedDescription:
        "Our Physiotherapy department offers comprehensive rehabilitation services to help patients recover from injuries and improve their physical function.",
      services: ["Physical Rehabilitation", "Sports Therapy", "Pain Management", "Exercise Therapy"],
      procedures: ["Manual Therapy", "Exercise Prescription", "Electrotherapy", "Hydrotherapy"],
      doctors: [
        {
          name: "Dr. Sunita Gupta",
          qualification: "BPT, MPT",
          experience: "12+ Years",
          image: "/images/doctor-female.avif",
        },
      ],
      facilities: ["Exercise gym", "Hydrotherapy pool", "Electrotherapy unit", "Sports medicine clinic"],
      image: "/images/slide1.jpeg",
    },
    dermatology: {
      name: "Dermatology",
      hindiName: "त्वचा विज्ञान",
      iconClass: "fa-solid fa-face-smile",
      color: "from-amber-500 to-amber-600",
      description: "Comprehensive skin care services including medical and cosmetic dermatology.",
      detailedDescription:
        "Our Dermatology department provides comprehensive skin care services with experienced dermatologists and advanced treatment options.",
      services: ["Skin Disease Treatment", "Cosmetic Procedures", "Acne Treatment", "Skin Cancer Screening"],
      procedures: ["Skin Biopsy", "Laser Therapy", "Chemical Peels", "Cryotherapy"],
      doctors: [
        {
          name: "Dr. Kavita Mehta",
          qualification: "MBBS, MD (Dermatology)",
          experience: "14+ Years",
          image: "/images/doctor-female.avif",
        },
      ],
      facilities: ["Dermatology clinic", "Laser center", "Cosmetic surgery suite", "Skin cancer screening unit"],
      image: "/images/slide2.jpeg",
    },
    "plastic-surgery": {
      name: "Plastic Surgery",
      hindiName: "प्लास्टिक सर्जरी",
      iconClass: "fa-solid fa-syringe",
      color: "from-fuchsia-500 to-fuchsia-600",
      description: "Reconstructive and cosmetic surgery services with advanced surgical techniques.",
      detailedDescription:
        "Our Plastic Surgery department offers both reconstructive and cosmetic surgery services with experienced plastic surgeons.",
      services: ["Reconstructive Surgery", "Cosmetic Surgery", "Burn Treatment", "Hand Surgery"],
      procedures: ["Breast Reconstruction", "Rhinoplasty", "Liposuction", "Burn Reconstruction"],
      doctors: [
        {
          name: "Dr. Amit Patel",
          qualification: "MBBS, MS, MCh (Plastic Surgery)",
          experience: "18+ Years",
          image: "/images/doctor-placeholder.avif",
        },
      ],
      facilities: ["Plastic surgery OT", "Recovery rooms", "Burn unit", "Cosmetic consultation rooms"],
      image: "/images/slide3.jpeg",
    },
    "keyhole-surgery": {
      name: "Keyhole Surgery",
      hindiName: "लैपरोस्कोपिक सर्जरी",
      iconClass: "fa-solid fa-microscope",
      color: "from-lime-500 to-lime-600",
      description: "Minimally invasive surgical procedures using advanced laparoscopic techniques.",
      detailedDescription:
        "Our Keyhole Surgery department specializes in minimally invasive surgical procedures that offer faster recovery and reduced complications.",
      services: ["Laparoscopic Surgery", "Endoscopic Procedures", "Minimally Invasive Surgery", "Robotic Surgery"],
      procedures: ["Laparoscopic Cholecystectomy", "Laparoscopic Hernia Repair", "Endoscopic Surgery", "Arthroscopy"],
      doctors: [
        {
          name: "Dr. Rajesh Kumar",
          qualification: "MBBS, MS (General Surgery)",
          experience: "20+ Years",
          image: "/images/doctor-placeholder.avif",
        },
      ],
      facilities: ["Laparoscopy suite", "Endoscopy unit", "Recovery rooms", "Advanced imaging"],
      image: "/images/slide4.jpeg",
    },
    "uro-surgery": {
      name: "Uro-Surgery",
      hindiName: "मूत्र रोग",
      iconClass: "fa-solid fa-toilet",
      color: "from-sky-500 to-sky-600",
      description: "Urological care including kidney, bladder, and urinary tract treatments.",
      detailedDescription:
        "Our Uro-Surgery department provides comprehensive urological care with experienced urologists and advanced surgical techniques.",
      services: ["Kidney Stone Treatment", "Prostate Surgery", "Bladder Procedures", "Urinary Tract Surgery"],
      procedures: ["TURP", "Nephrolithotomy", "Cystoscopy", "Ureteroscopy"],
      doctors: [
        {
          name: "Dr. Vikram Singh",
          qualification: "MBBS, MS (Urology)",
          experience: "22+ Years",
          image: "/images/doctor-placeholder.avif",
        },
      ],
      facilities: ["Urology OT", "Lithotripsy unit", "Cystoscopy suite", "Dialysis center"],
      image: "/images/slide1.jpeg",
    },
  }

  // Return the department data if found, or null if not found
  return departments[normalizedSlug] || null
}

export default function DepartmentDetailPage({ params }) {
  const department = getDepartmentData(params.slug)

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Department Not Found</h1>
          <Link href="/departments" className="text-[#0D5094] hover:underline">
            Back to Departments
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
      <section className="bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white py-20">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-gray-200 hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link href="/departments" className="text-gray-200 hover:text-white transition-colors">
              Departments
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-white">{department.name}</span>
          </nav>
          <div className="flex items-center mb-6">
            <div
              className={`bg-gradient-to-br ${department.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mr-6`}
            >
              <i className={`${department.iconClass} text-2xl text-white`}></i>
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">{department.name}</h1>
              <p className="text-xl text-gray-200">{department.hindiName}</p>
            </div>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl">{department.description}</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Department</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{department.detailedDescription}</p>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={department.image || "/placeholder.svg"}
                    alt={department.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {department.services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Icons.Shield className="w-5 h-5 text-[#0D5094] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedures Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Procedures & Treatments</h2>
                <div className="space-y-3">
                  {department.procedures.map((procedure, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border-l-4 border-[#0D5094] bg-gray-50">
                      <Icons.Heart className="w-5 h-5 text-[#0D5094]" />
                      <span className="text-gray-700">{procedure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Doctors Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Doctors</h3>
                <div className="space-y-6">
                  {department.doctors.map((doctor, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Image
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{doctor.name}</h4>
                        <p className="text-sm text-gray-600">{doctor.qualification}</p>
                        <p className="text-sm text-[#0D5094]">{doctor.experience}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Facilities</h3>
                <div className="space-y-3">
                  {department.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icons.Shield className="w-4 h-4 text-teal-500" />
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-br from-[#0D5094] to-[#1a6bb8] text-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Book Appointment</h3>
                <p className="mb-6">Ready to schedule your consultation? Contact us today.</p>
                <button className="w-full bg-white text-[#0D5094] py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Book Now
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
