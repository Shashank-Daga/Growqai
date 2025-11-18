import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#050659] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold text-balance">Growqai</h3>
            </div>
            <p className="text-sm">
              Growqai is a growth consulting firm designed for the new-age business era.<br />
              We empower companies to scale through Capital, Clients, and Talent.<br />
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/" className="block hover:text-[#4FF2E8] text-sm transition-colors">
                Home
              </Link>
              <Link href="/services" className="block hover:text-[#4FF2E8] text-sm transition-colors">
                Services
              </Link>
              {/* <Link href="/latest-insights" className="block hover:text-[#4FF2E8] text-sm transition-colors">
                Case Studies
              </Link> */}
              <Link href="#testimonials" className="block hover:text-[#4FF2E8] text-sm transition-colors">
                Testimonials
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/hub" className="block hover:text-[#4FF2E8] text-sm transition-colors">
                HUB
              </Link>
              <Link href="/about-us" className="block hover:text-[#4FF2E8] text-sm transition-colors">
                About us
              </Link>
              <Link href="/contact" className="block hover:text-[#4FF2E8] text-sm transition-colors">
                Contact
              </Link>
              <Link href="/latest-insights" className="block hover:text-[#4FF2E8] text-sm transition-colors">
                Insights
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <div className="space-y-2">
              <Link href="/terms-of-service" className="block hover:text-[#4FF2E8] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="block hover:text-[#4FF2E8] text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#40444b] mt-8 pt-8">
          <p className="text-sm">
            © 2025 Growqai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
