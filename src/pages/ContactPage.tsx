import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you within 24 hours.')
  }

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 vignette-overlay" />
          <div className="absolute inset-0 bg-[#111111]/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="heading-display text-5xl md:text-7xl text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
            We're here to answer your questions
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-micro text-[#D4A24F] mb-4">Connect With Us</p>
              <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-8">
                Visit Our Spa
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4A24F]/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-[#D4A24F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] text-xl mb-1">Location</h3>
                    <p className="text-[#6F6F6F]">
                      123 Wellness Boulevard<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4A24F]/10 rounded-full flex items-center justify-center">
                    <Phone className="text-[#D4A24F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] text-xl mb-1">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-[#6F6F6F] hover:text-[#D4A24F] transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                    <p className="text-sm text-[#6F6F6F] mt-1">Click to call</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4A24F]/10 rounded-full flex items-center justify-center">
                    <Mail className="text-[#D4A24F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] text-xl mb-1">Email</h3>
                    <a
                      href="mailto:hello@thegoodspa.com"
                      className="text-[#6F6F6F] hover:text-[#D4A24F] transition-colors"
                    >
                      hello@thegoodspa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4A24F]/10 rounded-full flex items-center justify-center">
                    <Clock className="text-[#D4A24F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] text-xl mb-1">Hours</h3>
                    <div className="text-[#6F6F6F] space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-[#111111]/10 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-[#111111]">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        placeholder="Your name"
                        className="bg-[#F6F6F2]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="bg-[#F6F6F2]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="bg-[#F6F6F2]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      placeholder="What is this regarding?"
                      className="bg-[#F6F6F2]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell us how we can help..."
                      className="bg-[#F6F6F2] min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#111111] text-white hover:bg-[#D4A24F] transition-all"
                    size="lg"
                  >
                    Send Message
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
