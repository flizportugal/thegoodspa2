export function PortfolioPage() {
  const portfolioItems = [
    {
      category: 'Facial Transformations',
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Our advanced facial treatments reveal radiant, youthful skin',
    },
    {
      category: 'Hair Makeovers',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Expert color and styling for stunning transformations',
    },
    {
      category: 'Makeup Artistry',
      image: 'https://images.pexels.com/photos/1582992/pexels-photo-1582992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Professional makeup for any occasion',
    },
  ]

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 vignette-overlay" />
          <div className="absolute inset-0 bg-[#111111]/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="heading-display text-5xl md:text-7xl text-white mb-6">
            Our Work
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Real transformations from our expert team
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Before & After</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[#111111] mb-6">
              Transformations
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto text-lg leading-relaxed">
              See the remarkable results our clients achieve with our expert treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-xl mb-4">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-[#111111] mb-2">{item.category}</h3>
                <p className="text-[#6F6F6F] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[#F6F6F2]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-[#6F6F6F] text-lg mb-8 leading-relaxed">
            Book your appointment and experience the difference
          </p>
        </div>
      </section>
    </div>
  )
}
