import Image from "next/image"

export default function Collaborators({ partners = [] }) {
  if (!partners.length) return null
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">Trusted Partners</span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 mt-4">Our Healthcare Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We collaborate with leading healthcare organizations to provide the best medical care</p>
        </div>
        <div className={`grid grid-cols-1 ${partners.length > 1 ? "md:grid-cols-2" : ""} gap-12 max-w-4xl mx-auto`}>
          {partners.map((p, index) => (
            <div key={index} className="group flex flex-col items-center p-12 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100">
              {p.logo && (
                <div className="mb-6 p-6 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors">
                  <Image src={p.logo || "/placeholder.svg"} alt={p.name} width={200} height={100} className="max-h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-[#0D5094] transition-colors">{p.name}</h3>
              <p className="text-gray-600 text-center">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
