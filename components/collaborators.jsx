import Image from "next/image"

const collaborators = [
  {
    name: "Medanta - The Medicity",
    logo: "/images/medanta-logo.png",
    description: "Leading multi-specialty medical institute",
  },
  {
    name: "Fortis Healthcare",
    logo: "/images/fortis-logo.png",
    description: "Trusted healthcare partner",
  },
]

export default function Collaborators() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#0D5094]/5 to-transparent rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-teal-500/5 to-transparent rounded-full"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              Trusted Partners
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Healthcare Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading healthcare organizations to provide the best medical care and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {collaborators.map((collaborator, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-12 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className="mb-6 p-6 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors">
                <Image
                  src={collaborator.logo || "/placeholder.svg"}
                  alt={collaborator.name}
                  width={200}
                  height={100}
                  className="max-h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-[#0D5094] transition-colors">
                {collaborator.name}
              </h3>
              <p className="text-gray-600 text-center">{collaborator.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Certified and accredited by leading healthcare authorities for quality assurance
          </p>
        </div>
      </div>
    </section>
  )
}
