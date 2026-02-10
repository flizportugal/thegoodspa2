import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { MobileFloatingCTA } from './components/MobileFloatingCTA'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { AboutPage } from './pages/AboutPage'
import { MembershipPage } from './pages/MembershipPage'
import { GiftCardsPage } from './pages/GiftCardsPage'
import { BlogPage } from './pages/BlogPage'
import { FAQPage } from './pages/FAQPage'
import { ContactPage } from './pages/ContactPage'
import { CorporatePage } from './pages/CorporatePage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { AccessibilityPage } from './pages/AccessibilityPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F6F6F2]">
        <div className="grain-overlay" />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/gift-cards" element={<GiftCardsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
        </Routes>

        <Footer />
        <MobileFloatingCTA />
      </div>
    </Router>
  )
}

export default App
