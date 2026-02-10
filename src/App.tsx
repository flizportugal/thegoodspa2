import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F6F6F2]">
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-[#F6F6F2]/95 backdrop-blur-sm border-b border-[#111111]/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <h1 className="heading-display text-2xl md:text-3xl text-[#111111]">The Good Spa</h1>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-micro text-[#111111] hover:text-[#D4A24F] transition-colors">Services</a>
              <a href="#about" className="text-micro text-[#111111] hover:text-[#D4A24F] transition-colors">About</a>
              <a href="#membership" className="text-micro text-[#111111] hover:text-[#D4A24F] transition-colors">Membership</a>
              <a href="#contact" className="text-micro text-[#111111] hover:text-[#D4A24F] transition-colors">Contact</a>
              <Button className="bg-[#111111] text-white hover:bg-[#D4A24F] transition-all">
                Book Now
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#111111]/10 bg-[#F6F6F2]">
            <div className="space-y-1 px-6 py-4">
              <a href="#services" className="block py-2 text-micro text-[#111111]">Services</a>
              <a href="#about" className="block py-2 text-micro text-[#111111]">About</a>
              <a href="#membership" className="block py-2 text-micro text-[#111111]">Membership</a>
              <a href="#contact" className="block py-2 text-micro text-[#111111]">Contact</a>
              <Button className="w-full mt-2 bg-[#111111] text-white">Book Now</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero_robe.jpg"
            alt="Spa Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 vignette-overlay" />
          <div className="absolute inset-0 bg-[#111111]/30" />
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <h2 className="heading-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
            Luxury<br />Redefined
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
            Experience the art of wellness in our sanctuary of tranquility
          </p>
          <Button size="lg" className="bg-[#D4A24F] text-[#111111] hover:bg-white transition-all text-base px-8 py-6">
            Discover Your Journey
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-micro text-[#D4A24F] mb-4">Our Offerings</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[#111111] mb-6">
              Premium Services
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Curated treatments designed to rejuvenate your body and spirit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Facial Treatments', image: '/facial_closeup.jpg', price: 'From $150' },
              { title: 'Massage Therapy', image: '/massage_shoulders.jpg', price: 'From $180' },
              { title: 'Hair Styling', image: '/hair_flowing.jpg', price: 'From $120' },
              { title: 'Makeup Artistry', image: '/makeup_bold.jpg', price: 'From $100' },
              { title: 'Manicure & Pedicure', image: '/nails_hands.jpg', price: 'From $80' },
              { title: 'Wellness Packages', image: '/services_towel.jpg', price: 'From $300' },
            ].map((service, index) => (
              <Card key={index} className="group overflow-hidden border-[#111111]/10 hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#111111] text-xl">{service.title}</CardTitle>
                  <p className="text-[#D4A24F] font-semibold">{service.price}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#F6F6F2]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Real Results</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[#111111] mb-6">
              Transformations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Facial Rejuvenation', image: '/beforeafter_facial.jpg' },
              { title: 'Hair Transformation', image: '/beforeafter_hair.jpg' },
              { title: 'Makeup Artistry', image: '/beforeafter_makeup.jpg' },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden border-[#111111]/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-[#111111]">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-micro text-[#D4A24F] mb-4">Exclusive Access</p>
              <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-6">
                Membership Benefits
              </h2>
              <p className="text-[#6F6F6F] mb-8 text-lg leading-relaxed">
                Join our exclusive membership program and enjoy unlimited access to premium services,
                priority booking, and special discounts throughout the year.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Priority booking for all services',
                  '20% discount on all treatments',
                  'Complimentary monthly facial',
                  'Access to exclusive events',
                  'Birthday special treatments',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4A24F] rounded-full" />
                    <span className="text-[#111111]">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-[#111111] text-white hover:bg-[#D4A24F] transition-all">
                Join Now
              </Button>
            </div>
            <div className="relative">
              <img
                src="/membership_smile.jpg"
                alt="Membership"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#F5E6E0]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/giftcard_gentle.jpg"
                alt="Gift Cards"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-micro text-[#D4A24F] mb-4">Perfect Gift</p>
              <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-6">
                Gift Cards
              </h2>
              <p className="text-[#6F6F6F] mb-8 text-lg leading-relaxed">
                Share the gift of wellness with your loved ones. Our beautifully designed gift cards
                are perfect for any occasion and can be customized to any amount.
              </p>
              <Button size="lg" className="bg-[#111111] text-white hover:bg-[#D4A24F] transition-all">
                Purchase Gift Card
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Get In Touch</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[#111111] mb-6">
              Contact Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="/contact_close.jpg"
                alt="Contact"
                className="rounded-lg shadow-xl mb-8"
              />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#D4A24F] mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-1">Location</h3>
                    <p className="text-[#6F6F6F]">123 Wellness Boulevard<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-[#D4A24F] mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-1">Phone</h3>
                    <p className="text-[#6F6F6F]">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-[#D4A24F] mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-1">Email</h3>
                    <p className="text-[#6F6F6F]">hello@thegoodspa.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#D4A24F] mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-1">Hours</h3>
                    <p className="text-[#6F6F6F]">Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-[#111111]/10 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-[#111111]">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-[#F6F6F2] border-[#111111]/10"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-[#F6F6F2] border-[#111111]/10"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="bg-[#F6F6F2] border-[#111111]/10"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="bg-[#F6F6F2] border-[#111111]/10 min-h-32"
                    />
                  </div>
                  <Button className="w-full bg-[#111111] text-white hover:bg-[#D4A24F] transition-all">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="heading-display text-2xl mb-4">The Good Spa</h3>
              <p className="text-white/70 text-sm">
                Your sanctuary of wellness and beauty
              </p>
            </div>
            <div>
              <h4 className="text-micro mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-[#D4A24F] transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-[#D4A24F] transition-colors">About</a></li>
                <li><a href="#membership" className="hover:text-[#D4A24F] transition-colors">Membership</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-micro mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Facials</li>
                <li>Massage</li>
                <li>Hair</li>
                <li>Makeup</li>
              </ul>
            </div>
            <div>
              <h4 className="text-micro mb-4">Connect</h4>
              <p className="text-sm text-white/70">
                Follow us on social media for updates and special offers
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            © 2024 The Good Spa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
