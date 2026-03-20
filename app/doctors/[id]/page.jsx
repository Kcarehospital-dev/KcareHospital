import DoctorDetailPageClient from "./DoctorDetailPageClient"

// Generate static params for all doctor IDs
export async function generateStaticParams() {
  return [
    { id: "rajesh-kumar" },
    { id: "priya-sharma" },
    { id: "amit-patel" },
    { id: "sunita-gupta" },
    { id: "vikram-singh" },
    { id: "kavita-mehta" },
    { id: "arjun-reddy" },
    { id: "meera-joshi" },
  ]
}

export default function DoctorDetailPage({ params }) {
  // Ensure params.id is properly passed
  const doctorId = params.id

  return <DoctorDetailPageClient doctorId={doctorId} />
}
