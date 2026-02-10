export function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <p className="text-micro text-[#D4A24F] mb-4">Legal</p>
            <h1 className="heading-display text-5xl md:text-7xl text-[#111111] mb-6">
              Privacy Policy
            </h1>
            <p className="text-[#6F6F6F]">Last updated: February 10, 2024</p>
          </div>

          <div className="prose prose-lg max-w-none text-[#6F6F6F] space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Introduction</h2>
              <p className="leading-relaxed">
                The Good Spa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our spa or
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Information We Collect</h2>
              <p className="leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="space-y-2 ml-6">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Health information relevant to spa treatments</li>
                <li>Payment and billing information</li>
                <li>Appointment history and preferences</li>
                <li>Marketing preferences and communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 ml-6">
                <li>Provide and maintain our services</li>
                <li>Process your appointments and payments</li>
                <li>Send you appointment reminders and confirmations</li>
                <li>Improve our services and customer experience</li>
                <li>Send promotional materials (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information with service providers who assist us in operating our business, but only to the extent
                necessary and under strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 ml-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                <br />
                Email: privacy@thegoodspa.com
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Address: 123 Wellness Boulevard, New York, NY 10001
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
