export function AccessibilityPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <p className="text-micro text-[#D4A24F] mb-4">Legal</p>
            <h1 className="heading-display text-5xl md:text-7xl text-[#111111] mb-6">
              Accessibility
            </h1>
            <p className="text-[#6F6F6F]">Last updated: February 10, 2024</p>
          </div>

          <div className="prose prose-lg max-w-none text-[#6F6F6F] space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Our Commitment</h2>
              <p className="leading-relaxed">
                The Good Spa is committed to ensuring digital accessibility for people with disabilities. We are
                continually improving the user experience for everyone and applying the relevant accessibility
                standards to ensure we provide equal access to all of our users.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Conformance Status</h2>
              <p className="leading-relaxed">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                These guidelines explain how to make web content more accessible for people with disabilities and
                user-friendly for everyone.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Accessibility Features</h2>
              <p className="leading-relaxed mb-4">Our website includes the following accessibility features:</p>
              <ul className="space-y-2 ml-6">
                <li>Clear navigation structure and consistent layout</li>
                <li>Text alternatives for non-text content</li>
                <li>Sufficient color contrast for readability</li>
                <li>Keyboard-accessible navigation</li>
                <li>Resizable text without loss of functionality</li>
                <li>Descriptive link text</li>
                <li>Properly structured headings</li>
                <li>Form labels and error identification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Physical Accessibility</h2>
              <p className="leading-relaxed mb-4">Our spa facility offers:</p>
              <ul className="space-y-2 ml-6">
                <li>Wheelchair-accessible entrance and parking</li>
                <li>Accessible restrooms</li>
                <li>Wide doorways and hallways</li>
                <li>Adjustable treatment tables</li>
                <li>Accommodation for service animals</li>
                <li>Staff trained in accessibility assistance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Ongoing Efforts</h2>
              <p className="leading-relaxed">
                We are continuously working to improve accessibility through:
              </p>
              <ul className="space-y-2 ml-6">
                <li>Regular accessibility audits and testing</li>
                <li>Staff training on accessibility best practices</li>
                <li>Updates based on user feedback</li>
                <li>Monitoring and implementing new accessibility standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Feedback</h2>
              <p className="leading-relaxed">
                We welcome your feedback on the accessibility of The Good Spa. If you encounter any accessibility
                barriers or have suggestions for improvement, please let us know:
                <br />
                <br />
                Email: accessibility@thegoodspa.com
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Address: 123 Wellness Boulevard, New York, NY 10001
                <br />
                <br />
                We will make every effort to respond to your feedback within 5 business days.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Technical Specifications</h2>
              <p className="leading-relaxed">
                Our website's accessibility relies on the following technologies to work with the particular
                combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="space-y-2 ml-6 mt-4">
                <li>HTML5</li>
                <li>WAI-ARIA</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">Limitations and Alternatives</h2>
              <p className="leading-relaxed">
                Despite our best efforts to ensure accessibility, there may be some limitations. If you find any
                issues, please contact us, and we will work to provide you with the information or service you
                need through an alternative method.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
