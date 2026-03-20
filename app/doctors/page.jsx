"use client"

import { useState, useEffect } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"
import Image from "next/image"
import { Icons } from "../../components/icons"

const allDoctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiology",
    specialtyHindi: "हृदय रोग विशेषज्ञ",
    experience: "20+ Years",
    experienceValue: 20,
    qualification: "MBBS, MD, DM (Cardiology)",
    educationLevel: "Post Graduate",
    image: "/images/doctor-placeholder.avif",
    department: "Cardiology",
    availability: "Mon-Fri: 9AM-5PM",
    availabilityStatus: "Available",
    languages: ["English", "Hindi"],
    rating: 4.9,
    gender: "Male",
    consultationFee: 1500,
    consultationMode: ["In-Person", "Online"],
    timeSlots: ["Morning", "Evening"],
    slug: "rajesh-kumar",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Gynecology",
    specialtyHindi: "स्त्री रोग विशेषज्ञ",
    experience: "15+ Years",
    experienceValue: 15,
    qualification: "MBBS, MS (Gynecology)",
    educationLevel: "Post Graduate",
    image: "/images/doctor-female.avif",
    department: "Gynaecology",
    availability: "Mon-Sat: 10AM-6PM",
    availabilityStatus: "Available",
    languages: ["English", "Hindi"],
    rating: 4.8,
    gender: "Female",
    consultationFee: 1200,
    consultationMode: ["In-Person", "Online"],
    timeSlots: ["Morning", "Afternoon"],
    slug: "priya-sharma",
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    specialty: "Orthopedic Surgery",
    specialtyHindi: "हड्डी रोग सर्जन",
    experience: "18+ Years",
    experienceValue: 18,
    qualification: "MBBS, MS (Orthopedics)",
    educationLevel: "Post Graduate",
    image: "/images/doctor-placeholder.avif",
    department: "Orthopedics",
    availability: "Tue-Sat: 8AM-4PM",
    availabilityStatus: "Busy",
    languages: ["English", "Hindi", "Gujarati"],
    rating: 4.7,
    gender: "Male",
    consultationFee: 1800,
    consultationMode: ["In-Person"],
    timeSlots: ["Morning"],
    slug: "amit-patel",
  },
  {
    id: 4,
    name: "Dr. Sunita Gupta",
    specialty: "Pediatrics",
    specialtyHindi: "बाल रोग विशेषज्ञ",
    experience: "12+ Years",
    experienceValue: 12,
    qualification: "MBBS, MD (Pediatrics)",
    educationLevel: "Post Graduate",
    image: "/images/doctor-female.avif",
    department: "General",
    availability: "Mon-Fri: 9AM-5PM",
    availabilityStatus: "Available",
    languages: ["English", "Hindi"],
    rating: 4.9,
    gender: "Female",
    consultationFee: 1000,
    consultationMode: ["In-Person", "Online"],
    timeSlots: ["Morning", "Evening"],
    slug: "sunita-gupta",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    specialty: "Neurology",
    specialtyHindi: "न्यूरोलॉजी विशेषज्ञ",
    experience: "22+ Years",
    experienceValue: 22,
    qualification: "MBBS, MD, DM (Neurology)",
    educationLevel: "Super Speciality",
    image: "/images/doctor-placeholder.avif",
    department: "Neurology",
    availability: "Mon-Thu: 10AM-4PM",
    availabilityStatus: "Available",
    languages: ["English", "Hindi"],
    rating: 4.8,
    gender: "Male",
    consultationFee: 2000,
    consultationMode: ["In-Person"],
    timeSlots: ["Morning", "Afternoon"],
    slug: "vikram-singh",
  },
  {
    id: 6,
    name: "Dr. Kavita Mehta",
    specialty: "Dermatology",
    specialtyHindi: "त्वचा विशेषज्ञ",
    experience: "14+ Years",
    experienceValue: 14,
    qualification: "MBBS, MD (Dermatology)",
    educationLevel: "Post Graduate",
    image: "/images/doctor-female.avif",
    department: "Dermatology",
    availability: "Wed-Sun: 11AM-7PM",
    availabilityStatus: "Available",
    languages: ["English", "Hindi"],
    rating: 4.6,
    gender: "Female",
    consultationFee: 1300,
    consultationMode: ["In-Person", "Online"],
    timeSlots: ["Afternoon", "Evening"],
    slug: "kavita-mehta",
  },
  {
    id: 7,
    name: "Dr. Arjun Reddy",
    specialty: "Gastroenterology",
    specialtyHindi: "गैस्ट्रो विशेषज्ञ",
    experience: "16+ Years",
    experienceValue: 16,
    qualification: "MBBS, MD, DM (Gastroenterology)",
    educationLevel: "Super Speciality",
    image: "/images/doctor-placeholder.avif",
    department: "Gastroenterology",
    availability: "Mon-Fri: 8AM-3PM",
    availabilityStatus: "Available",
    languages: ["English", "Hindi", "Telugu"],
    rating: 4.7,
    gender: "Male",
    consultationFee: 1600,
    consultationMode: ["In-Person", "Online"],
    timeSlots: ["Morning"],
    slug: "arjun-reddy",
  },
  {
    id: 8,
    name: "Dr. Meera Joshi",
    specialty: "Anesthesiology",
    specialtyHindi: "एनेस्थिसिया विशेषज्ञ",
    experience: "13+ Years",
    experienceValue: 13,
    qualification: "MBBS, MD (Anesthesiology)",
    educationLevel: "Post Graduate",
    image: "/images/doctor-female.avif",
    department: "Anesthesiology",
    availability: "24/7 On-Call",
    availabilityStatus: "Available",
    languages: ["English", "Hindi", "Marathi"],
    rating: 4.8,
    gender: "Female",
    consultationFee: 1400,
    consultationMode: ["In-Person"],
    timeSlots: ["Morning", "Afternoon", "Evening"],
    slug: "meera-joshi",
  },
]

const filterOptions = {
  departments: [
    "All Departments",
    "Cardiology",
    "Gynaecology",
    "Orthopedics",
    "General",
    "Neurology",
    "Dermatology",
    "Gastroenterology",
    "Anesthesiology",
  ],
  educationLevel: ["All Levels", "Graduate", "Post Graduate", "Super Speciality"],
  availability: ["All", "Available", "Busy"],
  experience: ["All", "5-10 Years", "10-15 Years", "15-20 Years", "20+ Years"],
  gender: ["All", "Male", "Female"],
  consultationMode: ["All Modes", "In-Person", "Online"],
  languages: ["All Languages", "English", "Hindi", "Gujarati", "Telugu", "Marathi"],
  timeSlots: ["All Times", "Morning", "Afternoon", "Evening"],
}

export default function DoctorsPage() {
  const [filters, setFilters] = useState({
    department: "All Departments",
    educationLevel: "All Levels",
    availability: "All",
    experience: "All",
    gender: "All",
    priceRange: [0, 3000],
    consultationMode: "All Modes",
    rating: 0,
    language: "All Languages",
    timeSlot: "All Times",
  })
  const [searchTerm, setSearchTerm] = useState("")

  // Add useEffect to scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const filteredDoctors = allDoctors.filter((doctor) => {
    const matchesDepartment = filters.department === "All Departments" || doctor.department === filters.department
    const matchesEducation = filters.educationLevel === "All Levels" || doctor.educationLevel === filters.educationLevel
    const matchesAvailability = filters.availability === "All" || doctor.availabilityStatus === filters.availability
    const matchesGender = filters.gender === "All" || doctor.gender === filters.gender
    const matchesPrice =
      doctor.consultationFee >= filters.priceRange[0] && doctor.consultationFee <= filters.priceRange[1]
    const matchesConsultation =
      filters.consultationMode === "All Modes" || doctor.consultationMode.includes(filters.consultationMode)
    const matchesRating = doctor.rating >= filters.rating
    const matchesLanguage = filters.language === "All Languages" || doctor.languages.includes(filters.language)
    const matchesTimeSlot = filters.timeSlot === "All Times" || doctor.timeSlots.includes(filters.timeSlot)
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesExperience = () => {
      if (filters.experience === "All") return true
      const exp = doctor.experienceValue
      switch (filters.experience) {
        case "5-10 Years":
          return exp >= 5 && exp < 10
        case "10-15 Years":
          return exp >= 10 && exp < 15
        case "15-20 Years":
          return exp >= 15 && exp < 20
        case "20+ Years":
          return exp >= 20
        default:
          return true
      }
    }

    return (
      matchesDepartment &&
      matchesEducation &&
      matchesAvailability &&
      matchesExperience() &&
      matchesGender &&
      matchesPrice &&
      matchesConsultation &&
      matchesRating &&
      matchesLanguage &&
      matchesTimeSlot &&
      matchesSearch
    )
  })

  const clearFilters = () => {
    setFilters({
      department: "All Departments",
      educationLevel: "All Levels",
      availability: "All",
      experience: "All",
      gender: "All",
      priceRange: [0, 3000],
      consultationMode: "All Modes",
      rating: 0,
      language: "All Languages",
      timeSlot: "All Times",
    })
    setSearchTerm("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <nav className="mb-6">
              <Link href="/" className="text-gray-200 hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-gray-300">/</span>
              <span className="text-white">Doctors</span>
            </nav>
            <h1 className="text-5xl font-bold mb-6">Our Medical Experts</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Meet our team of experienced doctors and specialists committed to providing exceptional healthcare
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                  <button onClick={clearFilters} className="text-sm text-[#0D5094] hover:underline cursor-pointer">
                    Clear All
                  </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <Icons.Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search doctors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D5094] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Department Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select
                    value={filters.department}
                    onChange={(e) => handleFilterChange("department", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D5094] focus:border-transparent text-sm"
                  >
                    {filterOptions.departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Education Level */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
                  <select
                    value={filters.educationLevel}
                    onChange={(e) => handleFilterChange("educationLevel", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D5094] focus:border-transparent text-sm"
                  >
                    {filterOptions.educationLevel.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <select
                    value={filters.experience}
                    onChange={(e) => handleFilterChange("experience", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D5094] focus:border-transparent text-sm"
                  >
                    {filterOptions.experience.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Gender */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <div className="flex gap-2">
                    {filterOptions.gender.map((gender) => (
                      <button
                        key={gender}
                        onClick={() => handleFilterChange("gender", gender)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                          filters.gender === gender
                            ? "bg-[#0D5094] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Consultation Fee: ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
                  </label>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      step="100"
                      value={filters.priceRange[1]}
                      onChange={(e) =>
                        handleFilterChange("priceRange", [filters.priceRange[0], Number.parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <div className="flex gap-2">
                    {filterOptions.availability.map((avail) => (
                      <button
                        key={avail}
                        onClick={() => handleFilterChange("availability", avail)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                          filters.availability === avail
                            ? "bg-[#0D5094] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {avail}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Consultation Mode */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Mode</label>
                  <select
                    value={filters.consultationMode}
                    onChange={(e) => handleFilterChange("consultationMode", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D5094] focus:border-transparent text-sm"
                  >
                    {filterOptions.consultationMode.map((mode) => (
                      <option key={mode} value={mode}>
                        {mode}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Rating: {filters.rating}+
                  </label>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.1"
                      value={filters.rating}
                      onChange={(e) => handleFilterChange("rating", Number.parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
                  <select
                    value={filters.language}
                    onChange={(e) => handleFilterChange("language", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D5094] focus:border-transparent text-sm"
                  >
                    {filterOptions.languages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time Slots */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Available Time</label>
                  <select
                    value={filters.timeSlot}
                    onChange={(e) => handleFilterChange("timeSlot", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D5094] focus:border-transparent text-sm"
                  >
                    {filterOptions.timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Doctors Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredDoctors.map((doctor) => (
                  <Link key={doctor.id} href={`/doctors/${doctor.slug}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Status Badge */}
                        <div
                          className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${
                            doctor.availabilityStatus === "Available"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {doctor.availabilityStatus}
                        </div>

                        {/* Rating Badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                          <Icons.Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{doctor.rating}</span>
                        </div>

                        {/* View Profile Badge */}
                        <div className="absolute bottom-4 right-4 bg-[#0D5094] text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          View Profile
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0D5094] transition-colors">
                          {doctor.name}
                        </h3>
                        <p className="text-[#0D5094] font-semibold mb-1">{doctor.specialty}</p>
                        <p className="text-gray-600 text-sm mb-3">{doctor.specialtyHindi}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Icons.Trophy className="w-4 h-4 mr-2 text-teal-500" />
                            {doctor.experience} | {doctor.educationLevel}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Icons.Clock className="w-4 h-4 mr-2 text-teal-500" />
                            {doctor.availability}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="text-green-600 font-medium">₹{doctor.consultationFee}</span>
                            <span className="mx-2">•</span>
                            <span>{doctor.consultationMode.join(", ")}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {doctor.languages.map((lang, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {lang}
                            </span>
                          ))}
                        </div>

                        <button className="w-full bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white py-3 rounded-lg font-medium hover:from-[#1a6bb8] hover:to-[#0D5094] transition-all duration-300 transform hover:scale-105">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredDoctors.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Icons.Users className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No doctors found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
