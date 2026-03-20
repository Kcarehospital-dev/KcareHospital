"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icons } from "./icons"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Departments", href: "#departments" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:text-teal-200 transition-colors cursor-pointer">
                <Icons.Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-teal-200 transition-colors cursor-pointer">
                <Icons.Email className="w-4 h-4" />
                <span>info@kcarehospital.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
              <Icons.Clock className="w-4 h-4 text-teal-300" />
              <span className="font-medium">24/7 Emergency Services Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center hover:scale-105 transition-transform">
            <Image src="/images/logo.png" alt="KCare Hospital" width={200} height={80} className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#0D5094] font-medium transition-all duration-300 relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0D5094] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button className="bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] hover:from-[#1a6bb8] hover:to-[#0D5094] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
              Book Appointment
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0D5094] font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 w-fit cursor-pointer">
                Book Appointment
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
