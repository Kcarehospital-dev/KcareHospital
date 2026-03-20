import { getSiteData } from "../../../lib/data"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Image from "next/image"
import Link from "next/link"
import { Icons } from "../../../components/icons"

export async function generateStaticParams() {
  // This will be handled dynamically on Vercel
  return []
}

export const dynamic = "force-dynamic"

export default async function DoctorPage({ params }) {
  const data = await getSiteData()
  const doctor = data.doctors.find(d => d.id === params.id)

  if (!doctor) {
    return (
      <>
        <Header hospital={data.hospital} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Doctor not found</h1>
            <Link href="/doctors" className="text-[#0D5094] hover:underline">← Back to Doctors</Link>
          </div>
        </div>
        <Footer hospital={data.hospital} departments={data.departments} services={data.services} />
      </>
    )
  }

  return (
    <>
      <Header hospital={data.hospital} />
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/doctors" className="inline-flex items-center text-[#0D5094] hover:text-[#1a6bb8] mb-8 font-medium">
            <Icons.ChevronLeft className="w-5 h-5 mr-1" /> Back to Doctors
          </Link>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-white/30 flex-shrink-0">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                </div>
                <div className="text-white text-center md:text-left">
                  <h1 className="text-4xl font-bold mb-2">{doctor.name}</h1>
                  <p className="text-xl text-blue-200 mb-1">{doctor.specialty}</p>
                  <p className="text-blue-300 mb-4">{doctor.specialtyHindi}</p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">{doctor.qualification}</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">{doctor.experience}</span>
                    {doctor.rating && <span className="bg-yellow-400/80 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">⭐ {doctor.rating}</span>}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                {doctor.bio && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                    <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
                  </div>
                )}
                <div className="space-y-3">
                  {doctor.department && <InfoRow icon="🏥" label="Department" value={doctor.department} />}
                  {doctor.availability && <InfoRow icon="🕐" label="Availability" value={doctor.availability} />}
                  {doctor.gender && <InfoRow icon="👤" label="Gender" value={doctor.gender} />}
                  {doctor.consultationFee > 0 && <InfoRow icon="💰" label="Consultation Fee" value={`₹${doctor.consultationFee}`} />}
                </div>
              </div>
              <div>
                {doctor.languages?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map(lang => <span key={lang} className="bg-blue-50 text-[#0D5094] px-3 py-1 rounded-full text-sm">{lang}</span>)}
                    </div>
                  </div>
                )}
                {doctor.consultationMode?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Consultation Mode</h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.consultationMode.map(m => <span key={m} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">{m}</span>)}
                    </div>
                  </div>
                )}
                <div className="bg-[#0D5094] text-white p-6 rounded-2xl">
                  <h3 className="text-lg font-bold mb-4">Book Appointment</h3>
                  <p className="text-blue-200 text-sm mb-4">Call us to book an appointment with {doctor.name}</p>
                  <a href={`tel:${data.hospital?.phone1}`} className="block w-full bg-white text-[#0D5094] text-center py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                    📞 {data.hospital?.phone1 || "Call Now"}
                  </a>
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

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
      <span className="text-lg">{icon}</span>
      <span className="text-sm text-gray-500 min-w-24">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  )
}
