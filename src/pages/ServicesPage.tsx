import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { BookingDialog } from '../components/BookingDialog'

export function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false)

  const serviceCategories = [
    {
      category: 'Facial Treatments',
      image: '/facial_closeup.jpg',
      services: [
        {
          name: 'Signature Facial',
          duration: '60 min',
          price: '$150',
          description: 'Our classic facial treatment includes deep cleansing, exfoliation, extraction, and a customized mask.',
        },
        {
          name: 'Anti-Aging Treatment',
          duration: '75 min',
          price: '$200',
          description: 'Advanced anti-aging facial with peptides, retinol, and collagen-boosting ingredients.',
        },
        {
          name: 'Hydration Therapy',
          duration: '60 min',
          price: '$180',
          description: 'Intensive hydration treatment for dry and dehydrated skin with hyaluronic acid.',
        },
      ],
    },
    {
      category: 'Massage Therapy',
      image: '/massage_shoulders.jpg',
      services: [
        {
          name: 'Swedish Massage',
          duration: '60 min',
          price: '$180',
          description: 'Gentle, flowing strokes to promote relaxation and improve circulation.',
        },
        {
          name: 'Deep Tissue Massage',
          duration: '75 min',
          price: '$210',
          description: 'Focused pressure to release chronic muscle tension and knots.',
        },
        {
          name: 'Hot Stone Massage',
          duration: '90 min',
          price: '$240',
          description: 'Therapeutic massage using heated stones to melt away tension.',
        },
      ],
    },
    {
      category: 'Hair Services',
      image: '/hair_flowing.jpg',
      services: [
        {
          name: 'Hair Cut & Style',
          duration: '60 min',
          price: '$120',
          description: 'Professional cut and styling tailored to your face shape and lifestyle.',
        },
        {
          name: 'Hair Coloring',
          duration: '120 min',
          price: '$200+',
          description: 'Full or partial color services using premium, gentle formulas.',
        },
        {
          name: 'Keratin Treatment',
          duration: '180 min',
          price: '$350',
          description: 'Smoothing treatment to eliminate frizz and add shine for months.',
        },
      ],
    },
    {
      category: 'Makeup Services',
      image: '/makeup_bold.jpg',
      services: [
        {
          name: 'Special Occasion Makeup',
          duration: '60 min',
          price: '$150',
          description: 'Professional makeup application for events, parties, or photo shoots.',
        },
        {
          name: 'Bridal Makeup',
          duration: '90 min',
          price: '$250',
          description: 'Long-lasting bridal makeup with trial session included.',
        },
        {
          name: 'Makeup Lesson',
          duration: '90 min',
          price: '$180',
          description: 'One-on-one makeup tutorial to learn techniques for daily or special looks.',
        },
      ],
    },
    {
      category: 'Nail Services',
      image: '/nails_hands.jpg',
      services: [
        {
          name: 'Classic Manicure',
          duration: '45 min',
          price: '$60',
          description: 'Nail shaping, cuticle care, massage, and polish application.',
        },
        {
          name: 'Gel Manicure',
          duration: '60 min',
          price: '$80',
          description: 'Long-lasting gel polish that lasts up to 3 weeks.',
        },
        {
          name: 'Spa Pedicure',
          duration: '75 min',
          price: '$95',
          description: 'Luxurious foot soak, exfoliation, massage, and polish.',
        },
      ],
    },
    {
      category: 'Wellness Packages',
      image: '/services_towel.jpg',
      services: [
        {
          name: 'Half Day Retreat',
          duration: '3 hours',
          price: '$350',
          description: 'Facial, massage, and light refreshments in our relaxation lounge.',
        },
        {
          name: 'Full Day Experience',
          duration: '6 hours',
          price: '$650',
          description: 'Complete spa day including facial, massage, body treatment, lunch, and champagne.',
        },
        {
          name: 'Couples Retreat',
          duration: '2 hours',
          price: '$500',
          description: 'Side-by-side massage and champagne for two in our couples suite.',
        },
      ],
    },
  ]

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services_towel.jpg"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 vignette-overlay" />
          <div className="absolute inset-0 bg-[#111111]/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="heading-display text-5xl md:text-7xl text-white mb-6">
            Our Services
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Expert treatments crafted for your wellness journey
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-24">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                  <div className={categoryIndex % 2 === 0 ? 'order-1' : 'order-2'}>
                    <img
                      src={category.image}
                      alt={category.category}
                      className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className={categoryIndex % 2 === 0 ? 'order-2' : 'order-1'}>
                    <p className="text-micro text-[#D4A24F] mb-4">Service Category</p>
                    <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-6">
                      {category.category}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="border-[#111111]/10 hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-2xl text-[#111111]">{service.name}</CardTitle>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-[#6F6F6F] text-sm">{service.duration}</span>
                          <span className="text-[#D4A24F] font-bold text-xl">{service.price}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#6F6F6F] mb-4 leading-relaxed">{service.description}</p>
                        <Button
                          onClick={() => setBookingOpen(true)}
                          className="w-full bg-[#111111] text-white hover:bg-[#D4A24F] transition-all"
                        >
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[#F6F6F2]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-[#6F6F6F] text-lg mb-8 leading-relaxed">
            Our expert team is here to help you choose the perfect treatment for your needs
          </p>
          <Button onClick={() => setBookingOpen(true)} size="lg" className="bg-[#111111] text-white hover:bg-[#D4A24F] transition-all text-base px-8 py-6">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  )
}
