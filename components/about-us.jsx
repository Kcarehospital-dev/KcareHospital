import Image from "next/image"
import { Icons } from "./icons"

export default function AboutUs({ about = {} }) {
  const features = about.features || []
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-6"><span className="bg-[#0D5094]/10 text-[#0D5094] px-4 py-2 rounded-full text-sm font-medium">About KCare Hospital</span></div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Leading Healthcare Excellence</h2>
            <div className="space-y-8">
              {about.mission && (
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-semibold text-[#0D5094] mb-4 flex items-center"><Icons.Heart className="w-6 h-6 mr-3" />Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">{about.mission}</p>
                </div>
              )}
              {about.vision && (
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-semibold text-[#0D5094] mb-4 flex items-center"><Icons.Trophy className="w-6 h-6 mr-3" />Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">{about.vision}</p>
                </div>
              )}
            </div>
            {features.length > 0 && (
              <div className="mt-10">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Why Choose KCare Hospital?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                      <Icons.Shield className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/slide2.jpeg" alt="KCare Hospital Interior" width={600} height={500} className="object-cover w-full h-[500px]" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white p-8 rounded-2xl shadow-2xl">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full"><Icons.Heart className="w-6 h-6 text-green-600" /></div>
                <div><div className="text-2xl font-bold text-gray-900">98%</div><div className="text-sm text-gray-600">Patient Satisfaction</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
