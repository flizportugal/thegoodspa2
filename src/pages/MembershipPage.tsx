import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Check } from 'lucide-react'
import { BookingDialog } from '../components/BookingDialog'

export function MembershipPage() {
  const [bookingOpen, setBookingOpen] = useState(false)

  const plans = [
    {
      name: 'Bronze Glow',
      price: '$99',
      period: '/month',
      description: 'Perfect for those beginning their wellness journey',
      features: [
        '1 complimentary facial per month',
        '15% discount on all services',
        '10% discount on retail products',
        'Priority booking',
        'Birthday month special gift',
        'Access to member-only events',
      ],
      featured: false,
    },
    {
      name: 'Silver Radiance',
      price: '$189',
      period: '/month',
      description: 'Our most popular membership for regular self-care',
      features: [
        '1 complimentary facial per month',
        '1 complimentary massage (60min) per month',
        '20% discount on all services',
        '15% discount on retail products',
        'Priority booking & same-day appointments',
        'Complimentary birthday treatment',
        'Access to member-only events',
        'Bring a friend discount (10% off)',
      ],
      featured: true,
    },
    {
      name: 'Gold Luxe',
      price: '$299',
      period: '/month',
      description: 'Ultimate luxury and unlimited wellness',
      features: [
        '2 complimentary facials per month',
        '2 complimentary massages (60min) per month',
        '25% discount on all additional services',
        '20% discount on retail products',
        'Priority & concierge booking',
        'Complimentary birthday spa day package',
        'Exclusive VIP events & workshops',
        'Transfer or gift monthly services',
        'Complimentary makeup application (1x/month)',
        'Free spa day pass for a friend (quarterly)',
      ],
      featured: false,
    },
  ]

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/membership_smile.jpg"
            alt="Membership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 vignette-overlay" />
          <div className="absolute inset-0 bg-[#111111]/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="heading-display text-5xl md:text-7xl text-white mb-6">
            Glow Club
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Join our exclusive membership for unlimited luxury and savings
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Choose Your Level</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[#111111] mb-6">
              Membership Tiers
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto text-lg leading-relaxed">
              Select the perfect plan for your wellness lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-[#111111]/10 ${
                  plan.featured
                    ? 'ring-2 ring-[#D4A24F] shadow-2xl scale-105'
                    : 'hover:shadow-xl'
                } transition-all`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#D4A24F] text-[#111111] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl text-[#111111] mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-[#111111]">{plan.price}</span>
                    <span className="text-[#6F6F6F]">{plan.period}</span>
                  </div>
                  <p className="text-[#6F6F6F] text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className="text-[#D4A24F] flex-shrink-0 mt-0.5"
                        />
                        <span className="text-[#6F6F6F]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => setBookingOpen(true)}
                    className={`w-full ${
                      plan.featured
                        ? 'bg-[#D4A24F] text-[#111111] hover:bg-[#111111] hover:text-white'
                        : 'bg-[#111111] text-white hover:bg-[#D4A24F]'
                    } transition-all`}
                  >
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[#F6F6F2]">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-6 text-center">
            Membership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-4">Flexible & Easy</h3>
              <p className="text-[#6F6F6F] leading-relaxed">
                No long-term contracts. Cancel anytime with 30 days notice. Roll over unused
                services to the next month.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-4">Share the Love</h3>
              <p className="text-[#6F6F6F] leading-relaxed">
                Higher tier memberships allow you to transfer or gift your monthly services to
                friends and family.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-4">Exclusive Access</h3>
              <p className="text-[#6F6F6F] leading-relaxed">
                Members get first access to new treatments, seasonal promotions, and special
                wellness workshops.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-4">Incredible Savings</h3>
              <p className="text-[#6F6F6F] leading-relaxed">
                Save hundreds annually with member discounts on services and products. Your
                membership pays for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  )
}
