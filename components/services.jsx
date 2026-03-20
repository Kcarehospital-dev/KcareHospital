import { Icons } from "./icons"
import Link from "next/link"

export default function Services({ services = [] }) {
  const preview = services.slice(0, 8)
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">Healthcare Services</span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 mt-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Comprehensive healthcare services with state-of-the-art facilities and advanced medical technology</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {preview.map((service, index) => {
            const colors = ["from-blue-500 to-blue-600","from-pink-500 to-pink-600","from-purple-500 to-purple-600","from-red-500 to-red-600","from-teal-500 to-teal-600","from-green-500 to-green-600","from-indigo-500 to-indigo-600","from-orange-500 to-orange-600"]
            const color = service.color || colors[index % colors.length]
            return (
              <Link key={index} href={`/services/${service.id}`}>
                <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:from-[#0D5094] hover:to-[#1a6bb8] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer border border-gray-100 relative overflow-hidden">
                  <div className="text-center relative">
                    <div className={`bg-gradient-to-br ${color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <i className={`${service.iconClass} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">{service.name}</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300">{service.hindiName}</p>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#0D5094] to-teal-500 group-hover:from-white group-hover:to-gray-200 mx-auto mt-4 group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="text-center">
          <Link href="/services">
            <button className="group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer inline-flex items-center">
              View All Services <Icons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
