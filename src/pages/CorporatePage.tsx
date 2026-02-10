import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

export function CorporatePage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! Our events team will contact you within 24 hours.')
  }

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/howitworks_robe.jpg"
            alt="Corporate & Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 vignette-overlay" />
          <div className="absolute inset-0 bg-[#111111]/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="heading-display text-5xl md:text-7xl text-white mb-6">
            Corporate &<br />Events
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Elevate your special occasion with luxury spa services
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Group Services</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[#111111] mb-6">
              Perfect For Any Event
            </h2>
            <p className="text-[#6F6F6F] max-w-3xl mx-auto text-lg leading-relaxed">
              From bridal parties to corporate team building, we create customized spa experiences
              that bring people together in a luxurious, relaxing environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <Card className="border-[#111111]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-[#111111]">Weddings & Bridal</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#6F6F6F]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Bridal party packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Day-of makeup & hair services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Pre-wedding spa days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Bachelorette spa parties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#111111]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-[#111111]">Corporate Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#6F6F6F]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Team building spa days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Executive relaxation packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Office chair massage services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Wellness workshops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#111111]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-[#111111]">Special Occasions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#6F6F6F]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Birthday spa parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Mother-daughter days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Girls' getaway weekends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A24F] mt-1">•</span>
                    <span>Custom group experiences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-micro text-[#D4A24F] mb-4">Let's Plan Together</p>
              <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-6">
                Request A Consultation
              </h2>
              <p className="text-[#6F6F6F] text-lg mb-6 leading-relaxed">
                Our events team will work with you to create the perfect experience for your group,
                whether it's an intimate gathering or a large corporate event.
              </p>
              <ul className="space-y-3 text-[#6F6F6F]">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4A24F] rounded-full mt-2" />
                  <span>Flexible scheduling for groups of 4+</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4A24F] rounded-full mt-2" />
                  <span>Customized service packages</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4A24F] rounded-full mt-2" />
                  <span>Private spa access available</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4A24F] rounded-full mt-2" />
                  <span>Catering and refreshments options</span>
                </li>
              </ul>
            </div>

            <Card className="border-[#111111]/10 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-[#111111]">Event Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization Name</Label>
                    <Input
                      id="company"
                      placeholder="Company name"
                      className="bg-[#F6F6F2]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Name *</Label>
                      <Input
                        id="contact-name"
                        required
                        placeholder="Your name"
                        className="bg-[#F6F6F2]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="bg-[#F6F6F2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                        className="bg-[#F6F6F2]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="group-size">Group Size *</Label>
                      <Input
                        id="group-size"
                        type="number"
                        required
                        min="4"
                        placeholder="Number of people"
                        className="bg-[#F6F6F2]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-date">Preferred Date</Label>
                    <Input
                      id="event-date"
                      type="date"
                      className="bg-[#F6F6F2]"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-details">Event Details *</Label>
                    <Textarea
                      id="event-details"
                      required
                      placeholder="Tell us about your event, services you're interested in, and any special requests..."
                      className="bg-[#F6F6F2] min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#111111] text-white hover:bg-[#D4A24F] transition-all"
                    size="lg"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
