import Image from "next/image"
import Link from "next/link"
import { Icons } from "./icons"

export default function OurTeam({ doctors = [] }) {
  const preview = doctors.slice(0, 4)
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="bg-[#0D5094]/10 text-[#0D5094] px-4 py-2 rounded-full text-sm font-medium">Expert Medical Team</span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 mt-4">Our Medical Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Meet our experienced and dedicated medical professionals committed to providing exceptional healthcare</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {preview.map((doctor, index) => (
            <Link key={index} href={`/doctors/${doctor.id}`} className="group cursor-pointer">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                <div className="relative h-80 overflow-hidden">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-[#0D5094] text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">View Profile</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0D5094] transition-colors">{doctor.name}</h3>
                  <p className="text-[#0D5094] font-semibold mb-1">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-3">{doctor.specialtyHindi}</p>
                  <p className="text-gray-500 text-sm bg-gray-50 px-3 py-1 rounded-full inline-block">{doctor.experience}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/doctors">
            <button className="group bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] hover:from-[#1a6bb8] hover:to-[#0D5094] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer inline-flex items-center">
              View All Doctors <Icons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
