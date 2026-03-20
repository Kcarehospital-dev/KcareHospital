import Image from "next/image"
import Link from "next/link"
import { Icons } from "./icons"

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Hospital Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="KCare Hospital"
              width={200}
              height={80}
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              KCare Hospital is committed to providing exceptional healthcare services with compassion, integrity, and
              excellence. Your health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/departments"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/modular-ots"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Modular Operation Theaters
                </Link>
              </li>
              <li>
                <Link
                  href="/services/icu"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  ICU Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ccu"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Cardiac Care Unit
                </Link>
              </li>
              <li>
                <Link
                  href="/services/computerized-lab"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Computerized Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/services/radiology"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Radiology
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ct-scan"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  CT Scan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <Icons.Location className="w-5 h-5 text-[#0D5094] mt-1 flex-shrink-0 group-hover:text-teal-400 transition-colors" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    123 Healthcare Street,
                    <br />
                    Medical District,
                    <br />
                    New Delhi - 110001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Icons.Phone className="w-5 h-5 text-[#0D5094] flex-shrink-0 group-hover:text-teal-400 transition-colors" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">+91 98765 43210</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors">+91 11 2345 6789</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Icons.Email className="w-5 h-5 text-[#0D5094] flex-shrink-0 group-hover:text-teal-400 transition-colors" />
                <p className="text-gray-300 group-hover:text-white transition-colors">info@kcarehospital.com</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Icons.Clock className="w-5 h-5 text-[#0D5094] flex-shrink-0 group-hover:text-teal-400 transition-colors" />
                <p className="text-gray-300 group-hover:text-white transition-colors">24/7 Emergency Services</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 KCare Hospital. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
