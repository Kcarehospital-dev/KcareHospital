export default function AwardsRibbon({ awards = [] }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our commitment to excellence has been recognized by various healthcare organizations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="bg-gradient-to-br from-[#0D5094] to-teal-500 text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow group-hover:from-teal-500 group-hover:to-[#0D5094]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0D5094] transition-colors">{award.title}</h3>
              <p className="text-[#0D5094] font-medium mb-1">{award.year}</p>
              <p className="text-gray-600 text-sm">{award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
