import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { Button } from './ui/button'
import { BookingDialog } from './BookingDialog'

export function MobileFloatingCTA() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Button
          onClick={() => setBookingOpen(true)}
          size="lg"
          className="bg-[#D4A24F] text-[#111111] hover:bg-[#111111] hover:text-white shadow-2xl rounded-full h-16 w-16 p-0"
        >
          <Calendar size={24} />
        </Button>
      </div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  )
}
