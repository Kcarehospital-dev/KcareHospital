import Image from "next/image"
import Link from "next/link"
import { Icons } from "./icons"

export default function Footer({ hospital = {}, departments = [], services = [] }) {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Image src="/images/logo.png" alt={hospital.name || "KCare Hospital"} width={200} height={80} className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-gray-300 mb-6 leading-relaxed">{hospital.name || "KCare Hospital"} is committed to providing exceptional healthcare services with compassion, integrity, and excellence.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[{label:"About Us", href:"/#about"},{label:"Departments", href:"/departments"},{label:"Services", href:"/services"},{label:"Our Doctors", href:"/doctors"},{label:"Contact Us", href:"/#contact"}].map(l => (
                <li key={l.label}><Link href={l.href} className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Departments</h3>
            <ul className="space-y-3">
              {departments.slice(0, 6).map(d => (
                <li key={d.id}><Link href={`/departments/${d.id}`} className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer">{d.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {hospital.address && (
                <div className="flex items-start space-x-3 group cursor-pointer">
                  <Icons.Location className="w-5 h-5 text-[#0D5094] mt-1 flex-shrink-0" />
                  <p className="text-gray-300 group-hover:text-white transition-colors">{hospital.address}</p>
                </div>
              )}
              {(hospital.phone1 || hospital.phone2) && (
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Icons.Phone className="w-5 h-5 text-[#0D5094] flex-shrink-0" />
                  <div>
                    {hospital.phone1 && <p className="text-gray-300">{hospital.phone1}</p>}
                    {hospital.phone2 && <p className="text-gray-300">{hospital.phone2}</p>}
                  </div>
                </div>
              )}
              {hospital.email && (
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Icons.Email className="w-5 h-5 text-[#0D5094] flex-shrink-0" />
                  <p className="text-gray-300">{hospital.email}</p>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <Icons.Clock className="w-5 h-5 text-[#0D5094] flex-shrink-0" />
                <p className="text-gray-300">{hospital.workingHours || "24/7 Emergency Services"}</p>
              </div>
              {hospital.googleMapsUrl && hospital.googleMapsUrl !== "https://maps.google.com" && (
                <a href={hospital.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 text-sm mt-2">
                  <span>📍 View on Google Maps</span>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} {hospital.name || "KCare Hospital"}. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
