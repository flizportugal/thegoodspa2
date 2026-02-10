import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { BookingDialog } from './BookingDialog'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/membership', label: 'Membership' },
    { path: '/gift-cards', label: 'Gift Cards' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#F6F6F2]/95 backdrop-blur-sm border-b border-[#111111]/10 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center">
              <h1 className="heading-display text-2xl md:text-3xl text-[#111111]">The Good Spa</h1>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-micro transition-colors ${
                    isActive(link.path)
                      ? 'text-[#D4A24F]'
                      : 'text-[#111111] hover:text-[#D4A24F]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => setBookingOpen(true)}
                className="bg-[#111111] text-white hover:bg-[#D4A24F] transition-all"
              >
                Book Now
              </Button>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#111111]/10 bg-[#F6F6F2]">
            <div className="space-y-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-micro transition-colors ${
                    isActive(link.path) ? 'text-[#D4A24F]' : 'text-[#111111]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setBookingOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="w-full mt-2 bg-[#111111] text-white hover:bg-[#D4A24F]"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  )
}
