import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

export function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState(150)
  const amounts = [50, 100, 150, 200, 300, 500]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Gift card for $${selectedAmount} processed successfully!`)
  }

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1582992/pexels-photo-1582992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Gift Cards"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 vignette-overlay" />
          <div className="absolute inset-0 bg-[#111111]/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="heading-display text-5xl md:text-7xl text-white mb-6">
            Gift Cards
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Give the gift of wellness and beauty
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-micro text-[#D4A24F] mb-4">Perfect For Any Occasion</p>
              <h2 className="heading-display text-4xl md:text-5xl text-[#111111] mb-6">
                Share The Experience
              </h2>
              <p className="text-[#6F6F6F] text-lg mb-6 leading-relaxed">
                Our beautifully designed digital gift cards are perfect for birthdays, holidays,
                anniversaries, or just to show someone you care. They can be used for any service
                or product at The Good Spa.
              </p>
              <ul className="space-y-4 text-[#6F6F6F]">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4A24F] rounded-full mt-2" />
                  <span>Instant digital delivery via email</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4A24F] rounded-full mt-2" />
                  <span>Valid for all services and retail products</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4A24F] rounded-full mt-2" />
                  <span>No expiration date</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4A24F] rounded-full mt-2" />
                  <span>Can be combined with membership discounts</span>
                </li>
              </ul>
            </div>

            <Card className="border-[#111111]/10 shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="mb-4 block">Select Amount</Label>
                    <div className="grid grid-cols-3 gap-4">
                      {amounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setSelectedAmount(amount)}
                          className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                            selectedAmount === amount
                              ? 'border-[#D4A24F] bg-[#D4A24F]/10 text-[#D4A24F]'
                              : 'border-[#111111]/20 text-[#111111] hover:border-[#D4A24F]'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom">Or Enter Custom Amount</Label>
                    <Input
                      id="custom"
                      type="number"
                      min="25"
                      placeholder="Enter amount"
                      onChange={(e) => setSelectedAmount(Number(e.target.value))}
                      className="bg-[#F6F6F2]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recipient-name">Recipient Name</Label>
                    <Input
                      id="recipient-name"
                      required
                      placeholder="Who is this for?"
                      className="bg-[#F6F6F2]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recipient-email">Recipient Email</Label>
                    <Input
                      id="recipient-email"
                      type="email"
                      required
                      placeholder="Where should we send it?"
                      className="bg-[#F6F6F2]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sender-name">Your Name</Label>
                    <Input
                      id="sender-name"
                      required
                      placeholder="From"
                      className="bg-[#F6F6F2]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Personal Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Add a personal note"
                      className="bg-[#F6F6F2] min-h-24"
                    />
                  </div>

                  <div className="pt-4 border-t border-[#111111]/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#6F6F6F]">Total</span>
                      <span className="text-3xl font-bold text-[#111111]">${selectedAmount}</span>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#111111] text-white hover:bg-[#D4A24F] transition-all"
                      size="lg"
                    >
                      Purchase Gift Card
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
