const awards = [
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Best Multi-Specialty Hospital",
    year: "2023",
    organization: "Healthcare Excellence Awards",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: "Patient Safety Excellence",
    year: "2023",
    organization: "Medical Safety Council",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 16L3 5h5.5l1.5 9 1.5-9H17l-2 11H5zm2.5-7H9l.5 3H8l-.5-3zm6 0h1.5l-.5 3H13l.5-3z" />
        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2L12 17.6 5.6 21.2 8 14l-6-4.8h7.6L12 2z" />
      </svg>
    ),
    title: "Quality Healthcare Provider",
    year: "2022",
    organization: "National Health Association",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 4-6 3.75-6 8h2c0-3.75 6-4.25 6-8 0-3.31-2.69-6-6-6z" />
        <circle cx="12" cy="19" r="1" />
      </svg>
    ),
    title: "Community Service Award",
    year: "2022",
    organization: "Local Government",
  },
]

export default function AwardsRibbon() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by various healthcare organizations and institutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-[#0D5094] to-teal-500 text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow group-hover:from-teal-500 group-hover:to-[#0D5094]">
                {award.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0D5094] transition-colors">
                {award.title}
              </h3>
              <p className="text-[#0D5094] font-medium mb-1">{award.year}</p>
              <p className="text-gray-600 text-sm">{award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
