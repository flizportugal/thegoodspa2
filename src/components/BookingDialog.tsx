import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

interface BookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })

  const services = [
    'Signature Facial',
    'Anti-Aging Treatment',
    'Deep Tissue Massage',
    'Swedish Massage',
    'Hair Cut & Style',
    'Hair Coloring',
    'Special Occasion Makeup',
    'Bridal Makeup',
    'Classic Manicure',
    'Spa Pedicure',
    'Wellness Day Package',
  ]

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert('Thank you! Your booking request has been submitted. We will contact you shortly to confirm.')
    onOpenChange(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      notes: '',
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl heading-display text-[#111111]">
            Book Your Appointment
          </DialogTitle>
          <DialogDescription className="text-[#6F6F6F]">
            Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#F6F6F2]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#F6F6F2]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-[#F6F6F2]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service *</Label>
            <Select
              required
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
            >
              <SelectTrigger className="bg-[#F6F6F2]">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date *</Label>
              <Input
                id="date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-[#F6F6F2]"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time *</Label>
              <Select
                required
                value={formData.time}
                onValueChange={(value) => setFormData({ ...formData, time: value })}
              >
                <SelectTrigger className="bg-[#F6F6F2]">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any special requests or requirements?"
              className="bg-[#F6F6F2] min-h-24"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#111111] text-white hover:bg-[#D4A24F] transition-all"
            size="lg"
          >
            Submit Booking Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
