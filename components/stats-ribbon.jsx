import { Icons } from "./icons"
const iconMap = { Users: Icons.Users, Trophy: Icons.Trophy, Clock: Icons.Clock, Heart: Icons.Heart }

export default function StatsRibbon({ stats = [] }) {
  return (
    <section className="bg-gradient-to-r from-[#0D5094] via-[#1a6bb8] to-[#0D5094] text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-200">Numbers that speak for our commitment to excellence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Icons.Heart
            const colors = ["from-blue-500 to-blue-600","from-teal-500 to-teal-600","from-green-500 to-green-600","from-red-500 to-red-600"]
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`bg-gradient-to-br ${colors[index % colors.length]} p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold mb-3 group-hover:scale-105 transition-transform">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-300">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
