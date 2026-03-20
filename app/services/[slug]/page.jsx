import { getSiteData } from "../../../lib/data"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Link from "next/link"
import { Icons } from "../../../components/icons"

export const dynamic = "force-dynamic"

const SERVICE_DETAILS = {
  "modular-ots": {
    description: "Our state-of-the-art modular operation theaters are designed to the highest international standards, equipped with the latest surgical technology and monitoring systems.",
    features: ["Laminar airflow systems for infection control","Advanced surgical lighting","Integrated imaging systems","Digital anesthesia workstations","Real-time patient monitoring","Sterile instrument management"],
  },
  "labour-room": {
    description: "Our fully-equipped labour rooms provide a comfortable, safe environment for mothers during childbirth, staffed by experienced obstetricians and midwives.",
    features: ["Private birthing suites","Fetal monitoring equipment","Emergency C-section readiness","Neonatal resuscitation setup","Pain management support","24/7 specialist availability"],
  },
  "women-child-ward": {
    description: "A dedicated ward designed specifically for the comfort and care of women and children, with age-appropriate facilities and specialist nursing staff.",
    features: ["Separate women's and children's zones","Pediatric ICU access","Child-friendly environment","Lactation support","Neonatal care unit","Family accommodation"],
  },
  "ccu": {
    description: "Our Cardiac Care Unit provides intensive monitoring and treatment for patients with serious heart conditions, staffed by experienced cardiologists round the clock.",
    features: ["Continuous cardiac monitoring","Advanced defibrillation equipment","Hemodynamic monitoring","Intra-aortic balloon pump","Experienced CCU nursing staff","Cardiologist on call 24/7"],
  },
  "icu": {
    description: "Our Intensive Care Units — both Surgical and Medical — provide the highest level of care for critically ill patients with advanced life support systems.",
    features: ["Ventilator support","Continuous vital monitoring","Vasopressor management","Dialysis capability","Infection control protocols","Round-the-clock intensivist coverage"],
  },
  "computerized-lab": {
    description: "Our fully computerized pathology laboratory delivers fast, accurate diagnostic results using the latest automated analyzers and quality control protocols.",
    features: ["Automated hematology & biochemistry","Microbiology & culture testing","Histopathology","Hormone & tumor markers","Digital report delivery","NABL-standard quality control"],
  },
  "radiology": {
    description: "Our radiology department offers a full range of diagnostic imaging services using modern equipment operated by experienced radiologists.",
    features: ["Digital X-ray","Ultrasound & Doppler","Fluoroscopy","Bone densitometry","Interventional radiology","Same-day reporting"],
  },
  "ct-scan": {
    description: "Our advanced CT scanner provides high-resolution cross-sectional imaging for accurate diagnosis of a wide range of conditions.",
    features: ["Multi-slice CT scanner","Contrast & non-contrast studies","CT angiography","Emergency CT availability","3D reconstruction imaging","Rapid report turnaround"],
  },
}

export default async function ServicePage({ params }) {
  const data = await getSiteData()
  const service = data.services.find(s => s.id === params.slug)

  if (!service) {
    return (
      <>
        <Header hospital={data.hospital} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Service not found</h1>
            <Link href="/services" className="text-[#0D5094] hover:underline">← Back to Services</Link>
          </div>
        </div>
        <Footer hospital={data.hospital} departments={data.departments} services={data.services} />
      </>
    )
  }

  const details = SERVICE_DETAILS[service.id] || {
    description: `${service.name} at KCare Hospital is equipped with advanced technology and staffed by experienced medical professionals.`,
    features: [],
  }
  const colors = ["from-blue-500 to-blue-600","from-pink-500 to-pink-600","from-purple-500 to-purple-600","from-red-500 to-red-600","from-teal-500 to-teal-600","from-green-500 to-green-600","from-indigo-500 to-indigo-600","from-orange-500 to-orange-600"]
  const svcIndex = data.services.findIndex(s => s.id === params.slug)
  const color = service.color || colors[svcIndex % colors.length]

  return (
    <>
      <Header hospital={data.hospital} />

      {/* Hero */}
      <section className={`bg-gradient-to-r ${color} text-white py-20`}>
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 font-medium">
            <Icons.ChevronLeft className="w-5 h-5 mr-1" /> All Services
          </Link>
          <div className="flex items-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl">
              <i className={`${service.iconClass} text-4xl text-white`}></i>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.name}</h1>
              <p className="text-xl text-white/80">{service.hindiName}</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{details.description}</p>
              </div>
              {details.features.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {details.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-br ${color} flex-shrink-0`}></div>
                        <span className="text-gray-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#0D5094] to-[#1a6bb8] text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Book / Enquire</h3>
                <p className="text-blue-200 text-sm mb-5">Contact us for this service</p>
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">Other Services</h3>
                <div className="space-y-2">
                  {data.services.filter(s => s.id !== service.id).slice(0, 6).map((s, i) => (
                    <Link key={i} href={`/services/${s.id}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                      <i className={`${s.iconClass} text-[#0D5094] text-sm w-5`}></i>
                      <span className="text-gray-700 group-hover:text-[#0D5094] text-sm">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer hospital={data.hospital} departments={data.departments} services={data.services} />
    </>
  )
}
