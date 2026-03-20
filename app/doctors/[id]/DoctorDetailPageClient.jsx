"use client"

import { useEffect, useState } from "react"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"
import { Icons } from "../../../components/icons"

// Comprehensive doctor data
const getDoctorData = (id) => {
  // Add safety check for undefined id
  if (!id) {
    return null
  }

  const normalizedId = id.toLowerCase()

  const doctors = {
    "rajesh-kumar": {
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
      about:
        "Dr. Rajesh Kumar is a highly experienced cardiologist with over 20 years of expertise in treating complex cardiac conditions. He specializes in interventional cardiology and has performed thousands of successful cardiac procedures. Dr. Kumar is known for his patient-centric approach and commitment to providing the highest quality cardiac care.",
      education: [
        "MBBS - All India Institute of Medical Sciences (AIIMS), New Delhi",
        "MD (Internal Medicine) - Post Graduate Institute, Chandigarh",
        "DM (Cardiology) - All India Institute of Medical Sciences (AIIMS), New Delhi",
        "Fellowship in Interventional Cardiology - Mount Sinai Hospital, New York",
      ],
      specializations: [
        "Interventional Cardiology",
        "Coronary Angioplasty",
        "Cardiac Catheterization",
        "Heart Failure Management",
        "Preventive Cardiology",
        "Echocardiography",
      ],
      procedures: [
        "Coronary Angiography",
        "Percutaneous Coronary Intervention (PCI)",
        "Balloon Angioplasty",
        "Stent Placement",
        "Pacemaker Implantation",
        "Cardiac Rehabilitation",
      ],
      awards: [
        "Best Cardiologist Award - Indian Medical Association (2022)",
        "Excellence in Patient Care - Healthcare Excellence Awards (2021)",
        "Research Excellence Award - Cardiology Society of India (2020)",
      ],
      memberships: [
        "Cardiological Society of India",
        "Indian Medical Association",
        "American College of Cardiology",
        "European Society of Cardiology",
      ],
      publications: [
        "Advanced Techniques in Interventional Cardiology - Journal of Cardiology (2023)",
        "Heart Failure Management in Indian Population - Indian Heart Journal (2022)",
        "Preventive Cardiology Strategies - Cardiology Today (2021)",
      ],
      conditions: [
        "Coronary Artery Disease",
        "Heart Attack",
        "Heart Failure",
        "Arrhythmias",
        "Hypertension",
        "Valvular Heart Disease",
      ],
    },
    "priya-sharma": {
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
      about:
        "Dr. Priya Sharma is a dedicated gynecologist and obstetrician with 15 years of experience in women's healthcare. She specializes in high-risk pregnancies, minimally invasive gynecological surgeries, and reproductive health. Dr. Sharma is passionate about providing comprehensive care to women at all stages of life.",
      education: [
        "MBBS - Lady Hardinge Medical College, New Delhi",
        "MS (Obstetrics & Gynecology) - Maulana Azad Medical College, New Delhi",
        "Fellowship in Reproductive Medicine - Fortis Hospital, New Delhi",
        "Advanced Laparoscopy Training - World Laparoscopy Hospital",
      ],
      specializations: [
        "High-Risk Pregnancy Management",
        "Minimally Invasive Gynecological Surgery",
        "Reproductive Endocrinology",
        "Menopause Management",
        "Adolescent Gynecology",
        "Family Planning",
      ],
      procedures: [
        "Laparoscopic Surgery",
        "Hysteroscopy",
        "Normal and Cesarean Delivery",
        "Ovarian Cyst Removal",
        "Fibroid Treatment",
        "Endometriosis Surgery",
      ],
      awards: [
        "Best Gynecologist Award - Women's Health Society (2023)",
        "Excellence in Maternal Care - Obstetrics Association (2022)",
        "Patient Choice Award - Healthcare Excellence (2021)",
      ],
      memberships: [
        "Federation of Obstetric and Gynaecological Societies of India",
        "Indian Medical Association",
        "Society for Assisted Reproductive Technology",
        "International Federation of Gynecology and Obstetrics",
      ],
      publications: [
        "Management of High-Risk Pregnancies - Journal of Obstetrics (2023)",
        "Minimally Invasive Techniques in Gynecology - Women's Health Today (2022)",
        "Reproductive Health in Modern Times - Gynecology Review (2021)",
      ],
      conditions: [
        "Pregnancy and Childbirth",
        "Menstrual Disorders",
        "PCOS/PCOD",
        "Endometriosis",
        "Fibroids",
        "Infertility",
      ],
    },
    "amit-patel": {
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
      about:
        "Dr. Amit Patel is a renowned orthopedic surgeon with 18 years of experience in treating complex bone and joint disorders. He specializes in joint replacement surgeries, sports medicine, and trauma care. Dr. Patel is known for his expertise in minimally invasive surgical techniques and has helped thousands of patients regain mobility.",
      education: [
        "MBBS - B.J. Medical College, Ahmedabad",
        "MS (Orthopedics) - King Edward Memorial Hospital, Mumbai",
        "Fellowship in Joint Replacement - Hospital for Special Surgery, New York",
        "Advanced Arthroscopy Training - Steadman Clinic,Colorado",
      ],
      specializations: [
        "Joint Replacement Surgery",
        "Sports Medicine",
        "Arthroscopic Surgery",
        "Trauma and Fracture Care",
        "Spine Surgery",
        "Pediatric Orthopedics",
      ],
      procedures: [
        "Total Hip Replacement",
        "Total Knee Replacement",
        "Arthroscopic Surgery",
        "ACL Reconstruction",
        "Fracture Fixation",
        "Spinal Fusion",
      ],
      awards: [
        "Best Orthopedic Surgeon - Indian Orthopedic Association (2023)",
        "Excellence in Joint Replacement - Bone & Joint Society (2022)",
        "Innovation in Orthopedic Surgery - Medical Excellence Awards (2021)",
      ],
      memberships: [
        "Indian Orthopedic Association",
        "International Association of Orthopedic Surgeons",
        "Arthroscopy Association of India",
        "Indian Medical Association",
      ],
      publications: [
        "Advanced Joint Replacement Techniques - Orthopedic Journal (2023)",
        "Sports Injury Prevention and Management - Sports Medicine Review (2022)",
        "Minimally Invasive Orthopedic Surgery - Bone & Joint Today (2021)",
      ],
      conditions: ["Arthritis", "Sports Injuries", "Fractures", "Joint Pain", "Spine Disorders", "Bone Tumors"],
    },
    "sunita-gupta": {
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
      about:
        "Dr. Sunita Gupta is a compassionate pediatrician with 12 years of experience in child healthcare. She specializes in newborn care, childhood development, and pediatric infectious diseases. Dr. Gupta is known for her gentle approach with children and her ability to make both children and parents feel comfortable during consultations.",
      education: [
        "MBBS - Maulana Azad Medical College, New Delhi",
        "MD (Pediatrics) - All India Institute of Medical Sciences (AIIMS), New Delhi",
        "Fellowship in Neonatology - Boston Children's Hospital",
        "Advanced Pediatric Life Support Certification",
      ],
      specializations: [
        "Newborn and Infant Care",
        "Childhood Development",
        "Pediatric Infectious Diseases",
        "Vaccination and Immunization",
        "Adolescent Medicine",
        "Pediatric Nutrition",
      ],
      procedures: [
        "Newborn Screening",
        "Developmental Assessment",
        "Vaccination Programs",
        "Pediatric Emergency Care",
        "Growth Monitoring",
        "Behavioral Counseling",
      ],
      awards: [
        "Best Pediatrician Award - Indian Academy of Pediatrics (2023)",
        "Excellence in Child Care - Children's Health Foundation (2022)",
        "Compassionate Care Award - Medical Excellence Society (2021)",
      ],
      memberships: [
        "Indian Academy of Pediatrics",
        "Indian Medical Association",
        "International Pediatric Association",
        "Society for Pediatric Research",
      ],
      publications: [
        "Modern Approaches to Pediatric Care - Pediatrics Today (2023)",
        "Childhood Nutrition and Development - Child Health Journal (2022)",
        "Vaccination Strategies in Developing Countries - Pediatric Review (2021)",
      ],
      conditions: [
        "Common Childhood Illnesses",
        "Growth and Development Issues",
        "Respiratory Infections",
        "Digestive Problems",
        "Allergies",
        "Behavioral Issues",
      ],
    },
    "vikram-singh": {
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
      about:
        "Dr. Vikram Singh is a highly experienced neurologist with 22 years of expertise in treating neurological disorders. He specializes in stroke management, epilepsy treatment, and movement disorders. Dr. Singh is known for his comprehensive approach to neurological care and his dedication to patient education.",
      education: [
        "MBBS - King George's Medical University, Lucknow",
        "MD (Internal Medicine) - All India Institute of Medical Sciences (AIIMS), New Delhi",
        "DM (Neurology) - National Institute of Mental Health and Neurosciences (NIMHANS), Bangalore",
        "Fellowship in Movement Disorders - Johns Hopkins Hospital, Baltimore",
      ],
      specializations: [
        "Stroke Management",
        "Epilepsy Treatment",
        "Movement Disorders",
        "Headache and Migraine",
        "Neuromuscular Diseases",
        "Sleep Disorders",
      ],
      procedures: [
        "Electroencephalography (EEG)",
        "Electromyography (EMG)",
        "Nerve Conduction Studies",
        "Lumbar Puncture",
        "Botox Therapy",
        "Deep Brain Stimulation",
      ],
      awards: [
        "Best Neurologist Award - Indian Academy of Neurology (2023)",
        "Excellence in Stroke Care - Stroke Association of India (2022)",
        "Research Excellence Award - Neurology Society (2021)",
      ],
      memberships: [
        "Indian Academy of Neurology",
        "Movement Disorder Society",
        "International League Against Epilepsy",
        "World Stroke Organization",
      ],
      publications: [
        "Advances in Stroke Management - Neurology India (2023)",
        "Epilepsy Treatment Protocols - Indian Journal of Neurology (2022)",
        "Movement Disorders in Indian Population - Neurological Sciences (2021)",
      ],
      conditions: ["Stroke", "Epilepsy", "Parkinson's Disease", "Multiple Sclerosis", "Headaches", "Neuropathy"],
    },
    "kavita-mehta": {
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
      about:
        "Dr. Kavita Mehta is an experienced dermatologist with 14 years of expertise in treating various skin conditions. She specializes in medical and cosmetic dermatology, including acne treatment, anti-aging procedures, and skin cancer screening. Dr. Mehta is known for her personalized approach to skincare and her commitment to helping patients achieve healthy, beautiful skin.",
      education: [
        "MBBS - Grant Medical College, Mumbai",
        "MD (Dermatology) - Seth G.S. Medical College, Mumbai",
        "Fellowship in Cosmetic Dermatology - American Academy of Dermatology",
        "Advanced Training in Laser Therapy - International Society for Dermatologic Surgery",
      ],
      specializations: [
        "Medical Dermatology",
        "Cosmetic Dermatology",
        "Acne and Acne Scarring",
        "Anti-aging Treatments",
        "Skin Cancer Screening",
        "Pediatric Dermatology",
      ],
      procedures: [
        "Chemical Peels",
        "Laser Therapy",
        "Botox and Fillers",
        "Skin Biopsy",
        "Cryotherapy",
        "Photodynamic Therapy",
      ],
      awards: [
        "Best Dermatologist Award - Indian Association of Dermatologists (2023)",
        "Excellence in Cosmetic Dermatology - Aesthetic Medicine Society (2022)",
        "Patient Care Excellence Award - Medical Excellence Foundation (2021)",
      ],
      memberships: [
        "Indian Association of Dermatologists, Venereologists and Leprologists",
        "International Society of Dermatology",
        "American Academy of Dermatology",
        "Cosmetic Dermatology Society of India",
      ],
      publications: [
        "Modern Approaches to Acne Treatment - Indian Journal of Dermatology (2023)",
        "Anti-aging Strategies in Dermatology - Dermatology Today (2022)",
        "Skin Cancer Prevention and Early Detection - Journal of Skin Cancer (2021)",
      ],
      conditions: [
        "Acne and Acne Scars",
        "Eczema and Dermatitis",
        "Psoriasis",
        "Skin Cancer",
        "Hair Loss",
        "Aging Skin",
      ],
    },
    "arjun-reddy": {
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
      about:
        "Dr. Arjun Reddy is a skilled gastroenterologist with 16 years of experience in treating digestive disorders. He specializes in endoscopic procedures, liver diseases, and inflammatory bowel disease. Dr. Reddy is known for his expertise in advanced endoscopic techniques and his compassionate approach to patient care.",
      education: [
        "MBBS - Osmania Medical College, Hyderabad",
        "MD (Internal Medicine) - Nizam's Institute of Medical Sciences, Hyderabad",
        "DM (Gastroenterology) - All India Institute of Medical Sciences (AIIMS), New Delhi",
        "Fellowship in Advanced Endoscopy - Mayo Clinic, Rochester",
      ],
      specializations: [
        "Advanced Endoscopy",
        "Liver Diseases",
        "Inflammatory Bowel Disease",
        "Pancreatic Disorders",
        "Gastrointestinal Cancers",
        "Therapeutic Endoscopy",
      ],
      procedures: ["Upper Endoscopy", "Colonoscopy", "ERCP", "Endoscopic Ultrasound", "Liver Biopsy", "Polypectomy"],
      awards: [
        "Best Gastroenterologist Award - Indian Society of Gastroenterology (2023)",
        "Excellence in Endoscopy - Endoscopy Society of India (2022)",
        "Research Excellence Award - Liver Foundation of India (2021)",
      ],
      memberships: [
        "Indian Society of Gastroenterology",
        "Society of Gastrointestinal Endoscopy of India",
        "Indian Association for the Study of the Liver",
        "World Gastroenterology Organisation",
      ],
      publications: [
        "Advanced Endoscopic Techniques - Indian Journal of Gastroenterology (2023)",
        "Liver Disease Management in India - Hepatology International (2022)",
        "IBD Treatment Strategies - Journal of Gastroenterology (2021)",
      ],
      conditions: [
        "Acid Reflux (GERD)",
        "Liver Cirrhosis",
        "Inflammatory Bowel Disease",
        "Pancreatic Disorders",
        "Gastrointestinal Bleeding",
        "Colon Polyps",
      ],
    },
    "meera-joshi": {
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
      about:
        "Dr. Meera Joshi is an experienced anesthesiologist with 13 years of expertise in perioperative care. She specializes in cardiac anesthesia, pediatric anesthesia, and pain management. Dr. Joshi is known for her meticulous approach to patient safety and her expertise in managing complex anesthetic cases.",
      education: [
        "MBBS - Grant Medical College, Mumbai",
        "MD (Anesthesiology) - King Edward Memorial Hospital, Mumbai",
        "Fellowship in Cardiac Anesthesia - Narayana Health, Bangalore",
        "Advanced Pain Management Certification - Indian Society of Anaesthesiologists",
      ],
      specializations: [
        "Cardiac Anesthesia",
        "Pediatric Anesthesia",
        "Neuroanesthesia",
        "Pain Management",
        "Critical Care",
        "Regional Anesthesia",
      ],
      procedures: [
        "General Anesthesia",
        "Spinal and Epidural Anesthesia",
        "Nerve Blocks",
        "Pain Management Procedures",
        "Critical Care Management",
        "Perioperative Monitoring",
      ],
      awards: [
        "Best Anesthesiologist Award - Indian Society of Anaesthesiologists (2023)",
        "Excellence in Patient Safety - Anesthesia Safety Foundation (2022)",
        "Outstanding Service Award - Hospital Administration (2021)",
      ],
      memberships: [
        "Indian Society of Anaesthesiologists",
        "Society for Pediatric Anesthesia",
        "Indian Association of Cardiovascular-Thoracic Anaesthesiologists",
        "International Association for the Study of Pain",
      ],
      publications: [
        "Advances in Cardiac Anesthesia - Indian Journal of Anaesthesia (2023)",
        "Pediatric Anesthesia Safety Protocols - Pediatric Anesthesia Today (2022)",
        "Pain Management Strategies - Journal of Pain Medicine (2021)",
      ],
      conditions: [
        "Surgical Anesthesia",
        "Chronic Pain",
        "Post-operative Pain",
        "Critical Care",
        "Emergency Anesthesia",
        "Pain Syndromes",
      ],
    },
  }

  return doctors[normalizedId] || null
}

export default function DoctorDetailPageClient({ doctorId }) {
  const [doctor, setDoctor] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

    // Get doctor data
    if (doctorId) {
      const doctorData = getDoctorData(doctorId)
      setDoctor(doctorData)
    }
    setLoading(false)
  }, [doctorId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0D5094] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading doctor information...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Doctor Not Found</h1>
          <p className="text-gray-600 mb-6">The doctor you're looking for doesn't exist or has been moved.</p>
          <Link href="/doctors" className="text-[#0D5094] hover:underline">
            Back to Doctors
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0D5094] to-[#1a6bb8] text-white py-20">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-gray-200 hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link href="/doctors" className="text-gray-200 hover:text-white transition-colors">
              Doctors
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-white">{doctor.name}</span>
          </nav>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <Image
                src={doctor.image || "/placeholder.svg"}
                alt={doctor.name}
                width={200}
                height={200}
                className="rounded-full object-cover border-4 border-white/20"
              />
              <div
                className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs font-medium ${
                  doctor.availabilityStatus === "Available" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {doctor.availabilityStatus}
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-2xl text-gray-200 mb-2">{doctor.specialty}</p>
              <p className="text-lg text-gray-300 mb-4">{doctor.specialtyHindi}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                  <Icons.Trophy className="w-4 h-4 mr-2" />
                  <span>{doctor.experience}</span>
                </div>
                <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                  <Icons.Star className="w-4 h-4 mr-2 text-yellow-400" />
                  <span>{doctor.rating} Rating</span>
                </div>
                <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                  <span>₹{doctor.consultationFee} Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Dr. {doctor.name.split(" ").slice(1).join(" ")}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">{doctor.about}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Info</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Icons.Users className="w-4 h-4 text-[#0D5094] mr-2" />
                        <span className="text-gray-700">{doctor.department}</span>
                      </div>
                      <div className="flex items-center">
                        <Icons.Clock className="w-4 h-4 text-[#0D5094] mr-2" />
                        <span className="text-gray-700">{doctor.availability}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-700">Languages: {doctor.languages.join(", ")}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-700">Consultation: {doctor.consultationMode.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Education Level</h3>
                    <div className="bg-[#0D5094]/10 p-4 rounded-lg">
                      <span className="text-[#0D5094] font-medium">{doctor.educationLevel}</span>
                      <p className="text-gray-600 text-sm mt-1">{doctor.qualification}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Education & Training</h2>
                <div className="space-y-4">
                  {doctor.education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Icons.Trophy className="w-5 h-5 text-[#0D5094] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Specializations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctor.specializations.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border-l-4 border-[#0D5094] bg-gray-50">
                      <Icons.Heart className="w-5 h-5 text-[#0D5094]" />
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedures Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Procedures & Treatments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {doctor.procedures.map((procedure, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Icons.Shield className="w-4 h-4 text-teal-500" />
                      <span className="text-gray-700">{procedure}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions Treated */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions Treated</h2>
                <div className="flex flex-wrap gap-3">
                  {doctor.conditions.map((condition, index) => (
                    <span key={index} className="bg-teal-100 text-teal-700 px-3 py-2 rounded-full text-sm font-medium">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Appointment Booking */}
              <div className="bg-gradient-to-br from-[#0D5094] to-[#1a6bb8] text-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Book Appointment</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Consultation Fee:</span>
                    <span className="font-bold">₹{doctor.consultationFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available:</span>
                    <span className="font-bold">{doctor.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span className="font-bold">{doctor.consultationMode.join(", ")}</span>
                  </div>
                </div>
                <button className="w-full bg-white text-[#0D5094] py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-4">
                  Book Appointment
                </button>
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icons.Phone className="w-5 h-5" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icons.Email className="w-5 h-5" />
                    <span>info@kcarehospital.com</span>
                  </div>
                </div>
              </div>

              {/* Awards & Recognition */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Awards & Recognition</h3>
                <div className="space-y-4">
                  {doctor.awards.map((award, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Icons.Trophy className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Memberships */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Memberships</h3>
                <div className="space-y-3">
                  {doctor.memberships.map((membership, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icons.Shield className="w-4 h-4 text-[#0D5094]" />
                      <span className="text-gray-700 text-sm">{membership}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publications */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Publications</h3>
                <div className="space-y-3">
                  {doctor.publications.map((publication, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 text-sm">{publication}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
