import Image from "next/image"
import { Icons } from "./icons"

export default function AboutUs() {
  const features = [
    "State-of-the-art medical equipment",
    "Experienced and qualified medical staff",
    "Comprehensive healthcare services",
    "24/7 emergency medical care",
    "Patient-centered approach to treatment",
    "Modern infrastructure and facilities",
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0D5094]/5 to-teal-500/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-500/5 to-[#0D5094]/5 rounded-full translate-y-48 -translate-x-48"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-6">
              <span className="bg-[#0D5094]/10 text-[#0D5094] px-4 py-2 rounded-full text-sm font-medium">
                About KCare Hospital
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Leading Healthcare Excellence</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-[#0D5094] mb-4 flex items-center">
                  <Icons.Heart className="w-6 h-6 mr-3" />
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide exceptional healthcare services with compassion, integrity, and excellence. We are
                  committed to delivering comprehensive medical care that meets the highest standards of quality and
                  safety while treating every patient with dignity and respect.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-[#0D5094] mb-4 flex items-center">
                  <Icons.Trophy className="w-6 h-6 mr-3" />
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading multi-specialty hospital in the region, recognized for our clinical excellence,
                  innovative treatments, and patient-centered care. We strive to create a healthier community through
                  accessible, affordable, and world-class healthcare services.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Why Choose KCare Hospital?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <Icons.Shield className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/slide2.jpeg"
                alt="KCare Hospital Interior"
                width={600}
                height={500}
                className="object-cover w-full h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white p-8 rounded-2xl shadow-2xl">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
              <div className="text-xs opacity-75 mt-1">Serving the Community</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icons.Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
