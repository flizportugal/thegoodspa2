import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function AboutPage() {
  const partners = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Lead Esthetician',
      credentials: 'Licensed Esthetician, 15+ years experience',
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sarah founded The Good Spa with a vision to create a sanctuary where luxury meets wellness. Her expertise in advanced skincare treatments has transformed thousands of clients.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Master Hair Stylist & Colorist',
      credentials: 'Vidal Sassoon Certified, 12+ years experience',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Elena brings her artistic vision and technical mastery to every hair transformation. Trained at the prestigious Vidal Sassoon Academy, she specializes in color correction and precision cuts.',
    },
  ]

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 vignette-overlay" />
          <div className="absolute inset-0 bg-[#111111]/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="heading-display text-5xl md:text-7xl text-white mb-6">
            Our Story
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Dedicated to excellence in beauty and wellness since 2014
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Our Mission</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-6">
              Redefining Luxury Wellness
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-[#6F6F6F] space-y-6 leading-relaxed">
            <p>
              Founded in 2014, The Good Spa was born from a simple belief: everyone deserves access to
              exceptional wellness and beauty services in an environment that feels like a true sanctuary.
            </p>
            <p>
              Our team of licensed professionals brings together decades of combined experience in
              esthetics, massage therapy, hair styling, makeup artistry, and holistic wellness. We stay
              at the forefront of industry innovations while honoring time-tested techniques that deliver
              real results.
            </p>
            <p>
              We use only premium, carefully curated products that are gentle on your skin and kind to
              the environment. Every treatment is customized to your unique needs, ensuring you receive
              the personalized care you deserve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[#F6F6F2]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Meet The Team</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[#111111] mb-6">
              Our Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {partners.map((partner, index) => (
              <Card key={index} className="border-[#111111]/10 overflow-hidden">
                <div className="h-80">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl text-[#111111]">{partner.name}</CardTitle>
                  <p className="text-[#D4A24F] font-semibold text-lg">{partner.role}</p>
                  <p className="text-[#6F6F6F] text-sm">{partner.credentials}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] leading-relaxed">{partner.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-6">
            Experience The Difference
          </h2>
          <p className="text-[#6F6F6F] text-lg mb-8 leading-relaxed">
            Visit us and discover why our clients call us their wellness home
          </p>
        </div>
      </section>
    </div>
  )
}
