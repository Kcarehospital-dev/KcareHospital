import { getSiteData } from "../../lib/data"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default async function DoctorsPage() {
  const data = await getSiteData()
  const { doctors, hospital, departments, services } = data

  return (
    <>
      <Header hospital={hospital} />
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-[#0D5094]/10 text-[#0D5094] px-4 py-2 rounded-full text-sm font-medium">Expert Medical Team</span>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 mt-4">Our Doctors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet our team of experienced, qualified, and dedicated medical professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <Link key={index} href={`/doctors/${doctor.id}`} className="group cursor-pointer">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                  <div className="relative h-72 overflow-hidden">
                    <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${doctor.availabilityStatus === "Available" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {doctor.availabilityStatus}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#0D5094] transition-colors">{doctor.name}</h3>
                    <p className="text-[#0D5094] font-semibold text-sm mb-1">{doctor.specialty}</p>
                    <p className="text-gray-600 text-xs mb-2">{doctor.specialtyHindi}</p>
                    <p className="text-gray-500 text-xs bg-gray-50 px-2 py-1 rounded-full inline-block mb-3">{doctor.experience}</p>
                    {doctor.consultationFee > 0 && (
                      <p className="text-sm text-gray-700 font-medium">₹{doctor.consultationFee} consultation</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer hospital={hospital} departments={departments} services={services} />
    </>
  )
}
