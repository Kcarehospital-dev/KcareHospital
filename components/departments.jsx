import { Icons } from "./icons"
import Link from "next/link"

export default function Departments({ departments = [] }) {
  const preview = departments.slice(0, 8)
  return (
    <section id="departments" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="bg-[#0D5094]/10 text-[#0D5094] px-4 py-2 rounded-full text-sm font-medium">Medical Specialties</span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 mt-4">Our Departments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Comprehensive medical care across multiple specialties with expert doctors and modern facilities</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {preview.map((dept, index) => {
            const colors = ["from-blue-500 to-blue-600","from-green-500 to-green-600","from-purple-500 to-purple-600","from-teal-500 to-teal-600","from-orange-500 to-orange-600","from-pink-500 to-pink-600","from-rose-500 to-rose-600","from-indigo-500 to-indigo-600"]
            const color = dept.color || colors[index % colors.length]
            return (
              <Link key={index} href={`/departments/${dept.id}`} className="group cursor-pointer">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="text-center relative">
                    <div className={`bg-gradient-to-br ${color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <i className={`${dept.iconClass} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0D5094] transition-colors">{dept.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{dept.hindiName}</p>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#0D5094] to-teal-500 mx-auto group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="text-center">
          <Link href="/departments">
            <button className="group bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] hover:from-[#1a6bb8] hover:to-[#0D5094] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer inline-flex items-center">
              View All Departments <Icons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
