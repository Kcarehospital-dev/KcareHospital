import { Icons } from "./icons"

const stats = [
  {
    icon: Icons.Users,
    number: "50,000+",
    label: "Patients Treated",
    description: "Successfully treated patients",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Icons.Trophy,
    number: "25+",
    label: "Years Experience",
    description: "Years of medical excellence",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Icons.Clock,
    number: "24/7",
    label: "Emergency Care",
    description: "Round the clock services",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Icons.Heart,
    number: "98%",
    label: "Success Rate",
    description: "Patient satisfaction rate",
    color: "from-red-500 to-red-600",
  },
]

export default function StatsRibbon() {
  return (
    <section className="bg-gradient-to-r from-[#0D5094] via-[#1a6bb8] to-[#0D5094] text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-200">Numbers that speak for our commitment to excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div
                className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-3 group-hover:scale-105 transition-transform">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
