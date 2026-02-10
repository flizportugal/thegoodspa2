import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Star, Shield, Award, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.service-hero', {
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
        },
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.trust-badge', {
        scrollTrigger: {
          trigger: '.trust-section',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)',
      })
    })

    return () => ctx.revert()
  }, [])

  const services = [
    {
      title: 'Facial Treatments',
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Rejuvenating facials tailored to your skin',
    },
    {
      title: 'Massage Therapy',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Therapeutic touch for complete relaxation',
    },
    {
      title: 'Hair Styling',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Expert cuts and vibrant color transformations',
    },
    {
      title: 'Makeup Artistry',
      image: 'https://images.pexels.com/photos/1582992/pexels-photo-1582992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Professional makeup for every occasion',
    },
    {
      title: 'Nail Care',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Luxurious manicures and pedicures',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'The best spa experience in the city! The facial treatment left my skin glowing for weeks.',
    },
    {
      name: 'Jennifer K.',
      rating: 5,
      text: 'Professional, relaxing, and absolutely worth every penny. The massage therapy is incredible.',
    },
    {
      name: 'Amanda R.',
      rating: 5,
      text: 'I come here for all my special occasions. The makeup artistry is truly next level.',
    },
  ]

  return (
    <div className="pt-20">
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Spa Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 vignette-overlay" />
          <div className="absolute inset-0 bg-[#111111]/40" />
        </div>

        <div className="relative z-10 text-center px-6 hero-content">
          <h2 className="heading-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
            Luxury<br />Redefined
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Experience the art of wellness in our sanctuary of tranquility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#D4A24F] text-[#111111] hover:bg-white transition-all text-base px-8 py-6">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#111111] transition-all text-base px-8 py-6">
              <Link to="/membership">Join Glow Club</Link>
            </Button>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="services-section py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Our Expertise</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[#111111] mb-6">
              Premium Services
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto text-lg leading-relaxed">
              Curated treatments designed to rejuvenate your body and spirit
            </p>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-hero relative h-screen flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 vignette-overlay" />
                  <div className="absolute inset-0 bg-[#111111]/50" />
                </div>

                <div className={`relative z-10 max-w-xl px-6 lg:px-16 ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}>
                  <h3 className="heading-display text-5xl md:text-6xl text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-xl mb-8 font-light">
                    {service.description}
                  </p>
                  <Button size="lg" asChild className="bg-[#D4A24F] text-[#111111] hover:bg-white transition-all">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section py-16 px-6 lg:px-8 bg-[#F6F6F2]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="trust-badge text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4A24F]/10 rounded-full mb-4">
                <Shield className="text-[#D4A24F]" size={32} />
              </div>
              <h3 className="font-semibold text-[#111111] mb-2">Licensed</h3>
              <p className="text-sm text-[#6F6F6F]">Certified professionals</p>
            </div>

            <div className="trust-badge text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4A24F]/10 rounded-full mb-4">
                <Award className="text-[#D4A24F]" size={32} />
              </div>
              <h3 className="font-semibold text-[#111111] mb-2">Award Winning</h3>
              <p className="text-sm text-[#6F6F6F]">Industry recognized</p>
            </div>

            <div className="trust-badge text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4A24F]/10 rounded-full mb-4">
                <Clock className="text-[#D4A24F]" size={32} />
              </div>
              <h3 className="font-semibold text-[#111111] mb-2">10+ Years</h3>
              <p className="text-sm text-[#6F6F6F]">Serving excellence</p>
            </div>

            <div className="trust-badge text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4A24F]/10 rounded-full mb-4">
                <Star className="text-[#D4A24F]" size={32} fill="currentColor" />
              </div>
              <h3 className="font-semibold text-[#111111] mb-2">5 Star Reviews</h3>
              <p className="text-sm text-[#6F6F6F]">Client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={testimonialsRef} className="testimonials-section py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Client Love</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[#111111] mb-6">
              Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card border-[#111111]/10">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#D4A24F] fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-xl text-[#111111]">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[#111111] text-white text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-display text-4xl md:text-6xl mb-6">
            Ready to Begin?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Book your appointment today and discover the difference of true luxury wellness
          </p>
          <Button size="lg" asChild className="bg-[#D4A24F] text-[#111111] hover:bg-white transition-all text-base px-8 py-6">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
