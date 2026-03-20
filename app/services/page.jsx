import { getSiteData } from "../../lib/data"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"

export default async function ServicesPage() {
  const data = await getSiteData()
  const { services, hospital, departments } = data

  return (
    <>
      <Header hospital={hospital} />
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">Healthcare Services</span>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 mt-4">All Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">State-of-the-art facilities and advanced medical technology for comprehensive patient care</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const colors = ["from-blue-500 to-blue-600","from-pink-500 to-pink-600","from-purple-500 to-purple-600","from-red-500 to-red-600","from-teal-500 to-teal-600","from-green-500 to-green-600","from-indigo-500 to-indigo-600","from-orange-500 to-orange-600"]
              const color = service.color || colors[index % colors.length]
              return (
                <Link key={index} href={`/services/${service.id}`}>
                  <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:from-[#0D5094] hover:to-[#1a6bb8] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer border border-gray-100">
                    <div className="text-center">
                      <div className={`bg-gradient-to-br ${color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}>
                        <i className={`${service.iconClass} text-2xl text-white`}></i>
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">{service.name}</h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300">{service.hindiName}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <Footer hospital={hospital} departments={departments} services={services} />
    </>
  )
}
