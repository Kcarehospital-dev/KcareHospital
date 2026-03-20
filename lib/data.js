// lib/data.js
// All site content lives here as defaults.
// When deployed on Vercel, data is fetched from Vercel KV (editable via /admin).
// Falls back to these defaults if KV is not configured.

export const DEFAULT_DATA = {
  hospital: {
    name: "KCare Hospital",
    tagline: "Multi Specialty Hospital",
    address: "123 Healthcare Street, Medical District, New Delhi - 110001",
    phone1: "+91 98765 43210",
    phone2: "+91 11 2345 6789",
    whatsapp: "+91 98765 43210",
    email: "info@kcarehospital.com",
    emergencyNumber: "+91 98765 43210",
    workingHours: "24/7 Emergency Services Available",
    googleMapsUrl: "https://maps.google.com",
    established: "1999",
  },
  stats: [
    { number: "50,000+", label: "Patients Treated", description: "Successfully treated patients", icon: "Users" },
    { number: "25+", label: "Years Experience", description: "Years of medical excellence", icon: "Trophy" },
    { number: "24/7", label: "Emergency Care", description: "Round the clock services", icon: "Clock" },
    { number: "98%", label: "Success Rate", description: "Patient satisfaction rate", icon: "Heart" },
  ],
  about: {
    mission: "To provide exceptional healthcare services with compassion, integrity, and excellence. We are committed to delivering comprehensive medical care that meets the highest standards of quality and safety while treating every patient with dignity and respect.",
    vision: "To be the leading multi-specialty hospital in the region, recognized for our clinical excellence, innovative treatments, and patient-centered care. We strive to create a healthier community through accessible, affordable, and world-class healthcare services.",
    features: [
      "State-of-the-art medical equipment",
      "Experienced and qualified medical staff",
      "Comprehensive healthcare services",
      "24/7 emergency medical care",
      "Patient-centered approach to treatment",
      "Modern infrastructure and facilities",
    ],
  },
  departments: [
    { id: "general", name: "General", hindiName: "सामान्य चिकित्सा", iconClass: "fa-solid fa-stethoscope", color: "from-blue-500 to-blue-600" },
    { id: "orthopedics", name: "Orthopedics", hindiName: "हड्डी रोग", iconClass: "fa-solid fa-bone", color: "from-green-500 to-green-600" },
    { id: "anesthesiology", name: "Anesthesiology", hindiName: "एनेस्थिसियोलॉजी", iconClass: "fa-solid fa-hand-holding-medical", color: "from-purple-500 to-purple-600" },
    { id: "pulmonary", name: "Pulmonary", hindiName: "पल्मोनरी", iconClass: "fa-solid fa-lungs", color: "from-teal-500 to-teal-600" },
    { id: "gastroenterology", name: "Gastroenterology", hindiName: "गैस्ट्रोएंटरोलॉजी", iconClass: "fa-solid fa-viruses", color: "from-orange-500 to-orange-600" },
    { id: "neurology", name: "Neurology", hindiName: "न्यूरोलॉजी", iconClass: "fa-solid fa-user-doctor", color: "from-pink-500 to-pink-600" },
    { id: "gynaecology", name: "Gynaecology", hindiName: "स्त्री रोग", iconClass: "fa-solid fa-venus", color: "from-rose-500 to-rose-600" },
    { id: "ent", name: "Ear, Nose, Throat", hindiName: "कान, नाक, गला", iconClass: "fa-solid fa-ear-listen", color: "from-indigo-500 to-indigo-600" },
  ],
  services: [
    { id: "modular-ots", name: "State of the Art Modular OTs", hindiName: "अत्याधुनिक मॉड्यूलर ओ.टी.", iconClass: "fa-solid fa-bed-pulse", color: "from-blue-500 to-blue-600" },
    { id: "labour-room", name: "Labour Room", hindiName: "प्रसूति गृह", iconClass: "fa-solid fa-baby", color: "from-pink-500 to-pink-600" },
    { id: "women-child-ward", name: "Women / Child Ward", hindiName: "महिला / बाल वार्ड", iconClass: "fa-solid fa-venus", color: "from-purple-500 to-purple-600" },
    { id: "ccu", name: "C.C.U", hindiName: "सी.सी.यू.", iconClass: "fa-solid fa-heart-pulse", color: "from-red-500 to-red-600" },
    { id: "icu", name: "State of the Art ICU (Surgical / Medical)", hindiName: "अत्याधुनिक आई.सी.यू.", iconClass: "fa-solid fa-procedures", color: "from-teal-500 to-teal-600" },
    { id: "computerized-lab", name: "Computerized Lab", hindiName: "कम्प्यूटरीकृत पैथोलॉजी", iconClass: "fa-solid fa-microscope", color: "from-green-500 to-green-600" },
    { id: "radiology", name: "Radiology", hindiName: "रेडियोलोजी", iconClass: "fa-solid fa-x-ray", color: "from-indigo-500 to-indigo-600" },
    { id: "ct-scan", name: "CT Scan", hindiName: "सीटी स्कैन", iconClass: "fa-solid fa-x-ray", color: "from-orange-500 to-orange-600" },
  ],
  doctors: [
    {
      id: "rajesh-kumar",
      name: "Dr. Rajesh Kumar",
      specialty: "Chief Cardiologist",
      specialtyHindi: "मुख्य हृदय रोग विशेषज्ञ",
      qualification: "MBBS, MD, DM (Cardiology)",
      experience: "20+ Years",
      image: "/images/doctor-placeholder.avif",
      department: "Cardiology",
      availability: "Mon-Fri: 9AM-5PM",
      availabilityStatus: "Available",
      languages: ["English", "Hindi"],
      rating: 4.9,
      gender: "Male",
      consultationFee: 1500,
      consultationMode: ["In-Person", "Online"],
      bio: "Dr. Rajesh Kumar is a highly experienced cardiologist with over 20 years of expertise in treating complex cardiac conditions.",
    },
    {
      id: "priya-sharma",
      name: "Dr. Priya Sharma",
      specialty: "Senior Gynecologist",
      specialtyHindi: "वरिष्ठ स्त्री रोग विशेषज्ञ",
      qualification: "MBBS, MS (Gynecology)",
      experience: "15+ Years",
      image: "/images/doctor-female.avif",
      department: "Gynaecology",
      availability: "Mon-Sat: 10AM-6PM",
      availabilityStatus: "Available",
      languages: ["English", "Hindi"],
      rating: 4.8,
      gender: "Female",
      consultationFee: 1200,
      consultationMode: ["In-Person", "Online"],
      bio: "Dr. Priya Sharma is a dedicated gynecologist with 15 years of experience in women's health and maternity care.",
    },
    {
      id: "amit-patel",
      name: "Dr. Amit Patel",
      specialty: "Orthopedic Surgeon",
      specialtyHindi: "हड्डी रोग सर्जन",
      qualification: "MBBS, MS (Orthopedics)",
      experience: "18+ Years",
      image: "/images/doctor-placeholder.avif",
      department: "Orthopedics",
      availability: "Tue-Sat: 8AM-4PM",
      availabilityStatus: "Busy",
      languages: ["English", "Hindi", "Gujarati"],
      rating: 4.7,
      gender: "Male",
      consultationFee: 1800,
      consultationMode: ["In-Person"],
      bio: "Dr. Amit Patel specializes in joint replacement and sports medicine with 18 years of surgical experience.",
    },
    {
      id: "sunita-gupta",
      name: "Dr. Sunita Gupta",
      specialty: "Pediatrician",
      specialtyHindi: "बाल रोग विशेषज्ञ",
      qualification: "MBBS, MD (Pediatrics)",
      experience: "12+ Years",
      image: "/images/doctor-female.avif",
      department: "Pediatrics",
      availability: "Mon-Sat: 10AM-4PM",
      availabilityStatus: "Available",
      languages: ["English", "Hindi"],
      rating: 4.8,
      gender: "Female",
      consultationFee: 1000,
      consultationMode: ["In-Person", "Online"],
      bio: "Dr. Sunita Gupta is a caring pediatrician dedicated to the health and well-being of children from newborns to teenagers.",
    },
  ],
  testimonials: [
    {
      name: "Ramesh Gupta",
      nameHindi: "रमेश गुप्ता",
      location: "Delhi",
      rating: 5,
      image: "/images/doctor-placeholder.avif",
      text: "Excellent medical care and very professional staff. The doctors are highly skilled and the facilities are world-class.",
      textHindi: "उत्कृष्ट चिकित्सा देखभाल और बहुत पेशेवर स्टाफ। डॉक्टर अत्यधिक कुशल हैं।",
    },
    {
      name: "Sunita Devi",
      nameHindi: "सुनीता देवी",
      location: "Kanpur",
      rating: 5,
      image: "/images/doctor-female.avif",
      text: "KCare Hospital provided exceptional care during my surgery. The nursing staff was compassionate and the doctors explained everything clearly.",
      textHindi: "केकेयर अस्पताल ने मेरी सर्जरी के दौरान असाधारण देखभाल प्रदान की।",
    },
    {
      name: "Vikash Kumar",
      nameHindi: "विकास कुमार",
      location: "Lucknow",
      rating: 5,
      image: "/images/doctor-placeholder.avif",
      text: "The emergency services at KCare are outstanding. They saved my life during a critical situation.",
      textHindi: "केकेयर की आपातकालीन सेवाएं उत्कृष्ट हैं। उन्होंने एक गंभीर स्थिति में मेरी जान बचाई।",
    },
  ],
  awards: [
    { title: "Best Multi-Specialty Hospital", year: "2023", organization: "Healthcare Excellence Awards" },
    { title: "Patient Safety Excellence", year: "2023", organization: "Medical Safety Council" },
    { title: "Quality Healthcare Provider", year: "2022", organization: "National Health Association" },
    { title: "Community Service Award", year: "2022", organization: "Local Government" },
  ],
  partners: [
    { name: "Medanta - The Medicity", logo: "/images/medanta-logo.png", description: "Leading multi-specialty medical institute" },
    { name: "Fortis Healthcare", logo: "/images/fortis-logo.png", description: "Trusted healthcare partner" },
  ],
  slides: [
    { image: "/images/slide1.jpeg", title: "Advanced Surgical Care", subtitle: "State-of-the-art operating theaters", description: "Experience world-class surgical procedures in our modern, fully-equipped operation theaters." },
    { image: "/images/slide2.jpeg", title: "Comprehensive ICU Services", subtitle: "Critical care with 24/7 monitoring", description: "Our intensive care units provide round-the-clock monitoring and specialized care." },
    { image: "/images/slide3.jpeg", title: "Comfortable Patient Experience", subtitle: "Modern facilities for patient comfort", description: "Enjoy a comfortable and stress-free hospital experience in our modern environment." },
    { image: "/images/slide4.jpeg", title: "In-House Pharmacy", subtitle: "Complete pharmaceutical services", description: "Access all your medications conveniently with our fully-stocked in-house pharmacy." },
  ],
}

// Fetch live data from KV via our API route (works at runtime on Vercel)
export async function getSiteData() {
  try {
    // In server components, call the internal API
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    const res = await fetch(`${baseUrl}/api/data`, {
      next: { tags: ["site-data"] },
      cache: "no-store",
    })
    if (!res.ok) throw new Error("KV fetch failed")
    const kv = await res.json()
    // Deep merge KV data over defaults
    return deepMerge(DEFAULT_DATA, kv)
  } catch {
    return DEFAULT_DATA
  }
}

function deepMerge(defaults, overrides) {
  if (!overrides) return defaults
  const result = { ...defaults }
  for (const key of Object.keys(overrides)) {
    if (overrides[key] !== null && overrides[key] !== undefined) {
      result[key] = overrides[key]
    }
  }
  return result
}
