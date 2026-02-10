import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'

export function FAQPage() {
  const faqs = [
    {
      question: 'Do I need an appointment?',
      answer: 'Yes, we operate by appointment only to ensure you receive our full attention and the best possible experience. Walk-ins are welcome based on availability, but we highly recommend booking in advance.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee of 50% of the service cost.',
    },
    {
      question: 'What should I wear to my appointment?',
      answer: 'Wear comfortable clothing. For massage services, we provide robes and ensure your privacy with proper draping. For facials, avoid wearing makeup if possible.',
    },
    {
      question: 'Do you offer couples treatments?',
      answer: 'Yes! We have a private couples suite where you can enjoy side-by-side massages or other treatments together. Contact us to book your couples experience.',
    },
    {
      question: 'What forms of payment do you accept?',
      answer: 'We accept all major credit cards, debit cards, cash, and digital gift cards. Gratuity can be added to your card payment or given in cash.',
    },
    {
      question: 'Are your products cruelty-free?',
      answer: 'Yes, we are committed to using only cruelty-free and ethically sourced products. Many of our product lines are also vegan and organic.',
    },
    {
      question: 'Can I purchase gift cards online?',
      answer: 'Absolutely! You can purchase digital gift cards on our website in any amount from $50 to $500. They are delivered instantly via email.',
    },
    {
      question: 'What are your membership benefits?',
      answer: 'Our Glow Club membership offers complimentary monthly treatments, significant discounts on all services and products, priority booking, and exclusive access to special events and promotions.',
    },
    {
      question: 'Do you accommodate special needs or allergies?',
      answer: 'Yes, please inform us of any allergies, sensitivities, or special needs when booking. We will customize your treatment and product selection accordingly.',
    },
    {
      question: 'What is your gratuity policy?',
      answer: 'Gratuity is not included in service prices but is greatly appreciated. Standard gratuity is 18-20% of the service cost.',
    },
    {
      question: 'Do you offer bridal packages?',
      answer: 'Yes! We offer customized bridal packages for the bride and bridal party, including makeup trials, day-of services, and group packages. Contact us to discuss your wedding needs.',
    },
    {
      question: 'Are your staff licensed and insured?',
      answer: 'Yes, all our professionals are fully licensed, insured, and undergo continuous education to stay current with the latest techniques and trends.',
    },
  ]

  return (
    <div className="pt-20">
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Got Questions?</p>
            <h1 className="heading-display text-5xl md:text-7xl text-[#111111] mb-6">
              FAQ
            </h1>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto text-lg leading-relaxed">
              Find answers to our most commonly asked questions
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#111111]/10 rounded-lg px-6 bg-[#F6F6F2]/50"
              >
                <AccordionTrigger className="text-left text-[#111111] hover:text-[#D4A24F] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6F6F6F] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center">
            <p className="text-[#6F6F6F] mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="text-[#D4A24F] font-semibold hover:underline text-lg"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
