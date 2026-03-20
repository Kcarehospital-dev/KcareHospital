import { getSiteData } from "../../../lib/data"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Link from "next/link"
import { Icons } from "../../../components/icons"

export const dynamic = "force-dynamic"

// Static descriptions per department id — used as fallback rich content
const DEPT_DETAILS = {
  general: {
    description: "Our General Medicine department provides comprehensive primary healthcare services for patients of all ages. We focus on preventive care, diagnosis, and treatment of common medical conditions.",
    services: ["General Consultation & Health Check-ups","Preventive Care & Screening","Chronic Disease Management","Infectious Disease Treatment","Geriatric Care","Health Education & Counseling"],
  },
  orthopedics: {
    description: "Specialized care for bone, joint, and musculoskeletal disorders with advanced surgical techniques and rehabilitation support.",
    services: ["Joint Replacement Surgery","Fracture Treatment","Sports Medicine","Spine Surgery","Arthroscopy","Physiotherapy & Rehab"],
  },
  anesthesiology: {
    description: "Expert anesthesia services ensuring patient comfort and safety during all surgical and procedural interventions.",
    services: ["General Anesthesia","Regional / Spinal Anesthesia","Pain Management","Critical Care Support","Post-op Pain Control","Sedation Services"],
  },
  pulmonary: {
    description: "Comprehensive respiratory care for lung diseases, breathing disorders, and critical pulmonary conditions.",
    services: ["Asthma Treatment","COPD Management","Sleep Studies","Pulmonary Function Tests","Bronchoscopy","Respiratory Physiotherapy"],
  },
  gastroenterology: {
    description: "Advanced digestive system care including endoscopic procedures, liver treatments, and IBD management.",
    services: ["Endoscopy","Colonoscopy","Liver Disease Treatment","IBD Management","ERCP","Gastrointestinal Surgery"],
  },
  neurology: {
    description: "Specialized diagnosis and treatment of neurological disorders affecting the brain, spinal cord, and nervous system.",
    services: ["Stroke Management","Epilepsy Treatment","Migraine Care","Parkinson's Disease","Dementia Evaluation","Nerve Conduction Studies"],
  },
  gynaecology: {
    description: "Comprehensive women's healthcare including obstetrics, gynecological surgery, and reproductive health.",
    services: ["Antenatal & Postnatal Care","Normal & Cesarean Delivery","Laparoscopic Surgery","Infertility Evaluation","Menstrual Disorders","PCOS Management"],
  },
  ent: {
    description: "Expert care for conditions affecting the ear, nose, throat, head, and neck.",
    services: ["Hearing Assessment","Sinusitis Treatment","Tonsillectomy","Adenoidectomy","Vertigo Management","Voice Disorders"],
  },
}

export default async function DepartmentPage({ params }) {
  const data = await getSiteData()
  const dept = data.departments.find(d => d.id === params.slug)

  if (!dept) {
    return (
      <>
        <Header hospital={data.hospital} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Department not found</h1>
            <Link href="/departments" className="text-[#0D5094] hover:underline">← Back to Departments</Link>
          </div>
        </div>
        <Footer hospital={data.hospital} departments={data.departments} services={data.services} />
      </>
    )
  }

  const details = DEPT_DETAILS[dept.id] || { description: `${dept.name} department at KCare Hospital offers comprehensive care with expert doctors and modern facilities.`, services: [] }
  const colors = ["from-blue-500 to-blue-600","from-green-500 to-green-600","from-purple-500 to-purple-600","from-teal-500 to-teal-600","from-orange-500 to-orange-600","from-pink-500 to-pink-600","from-rose-500 to-rose-600","from-indigo-500 to-indigo-600"]
  const deptIndex = data.departments.findIndex(d => d.id === params.slug)
  const color = dept.color || colors[deptIndex % colors.length]

  // Doctors associated with this department
  const deptDoctors = data.doctors.filter(doc => doc.department?.toLowerCase() === dept.name?.toLowerCase() || doc.department?.toLowerCase().includes(dept.id))

  return (
    <>
      <Header hospital={data.hospital} />

      {/* Hero */}
      <section className={`bg-gradient-to-r ${color} text-white py-20`}>
        <div className="container mx-auto px-4">
          <Link href="/departments" className="inline-flex items-center text-white/80 hover:text-white mb-6 font-medium">
            <Icons.ChevronLeft className="w-5 h-5 mr-1" /> All Departments
          </Link>
          <div className="flex items-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl">
              <i className={`${dept.iconClass} text-4xl text-white`}></i>
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">{dept.name}</h1>
              <p className="text-xl text-white/80">{dept.hindiName}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Department</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{details.description}</p>
              </div>
              {details.services.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Offered</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {details.services.map((svc, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${color} flex-shrink-0`}></div>
                        <span className="text-gray-700">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {deptDoctors.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Our {dept.name} Specialists</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {deptDoctors.map((doc, i) => (
                      <Link key={i} href={`/doctors/${doc.id}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                          {doc.name.charAt(3).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-[#0D5094]">{doc.name}</p>
                          <p className="text-sm text-gray-500">{doc.qualification}</p>
                          <p className="text-xs text-gray-400">{doc.experience}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#0D5094] to-[#1a6bb8] text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Book an Appointment</h3>
                <p className="text-blue-200 text-sm mb-5">Get expert care from our {dept.name} specialists</p>
                <a href={`tel:${data.hospital?.phone1}`} className="block w-full bg-white text-[#0D5094] text-center py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors mb-3">
                  📞 {data.hospital?.phone1 || "Call Now"}
                </a>
                {data.hospital?.whatsapp && (
                  <a href={`https://wa.me/${data.hospital.whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
                    💬 WhatsApp
                  </a>
                )}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Other Departments</h3>
                <div className="space-y-2">
                  {data.departments.filter(d => d.id !== dept.id).slice(0, 6).map((d, i) => (
                    <Link key={i} href={`/departments/${d.id}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                      <i className={`${d.iconClass} text-[#0D5094] text-sm w-5`}></i>
                      <span className="text-gray-700 group-hover:text-[#0D5094] text-sm">{d.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Emergency</h3>
                <p className="text-gray-600 text-sm mb-3">{data.hospital?.workingHours || "24/7 Emergency Services"}</p>
                <a href={`tel:${data.hospital?.emergencyNumber || data.hospital?.phone1}`} className="text-[#0D5094] font-bold text-lg hover:underline">
                  {data.hospital?.emergencyNumber || data.hospital?.phone1}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer hospital={data.hospital} departments={data.departments} services={data.services} />
    </>
  )
}
