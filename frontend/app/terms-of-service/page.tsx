import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Growqai",
  description: "Terms of Service for Growqai - growth consulting firm powered by AI.",
}

export default function TermsOfService() {
  return (
    <section className="min-h-screen bg-white px-8 md:px-16 lg:px-28 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <div className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        {/* Decorative Line */}
        <div className="relative mb-4">
          <div className="h-px bg-gray-300 w-full"></div>
          <div className="absolute top-0 left-0 w-40 h-[3px] bg-gray-600 -translate-y-px"></div>
        </div>

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 tracking-wide mb-10">/ TERMS OF SERVICE</div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#050659] leading-tight mb-12">
          Growqai – Terms of Service
        </h1>

        {/* Content */}
        <div className="space-y-12 text-[#313447] text-lg leading-relaxed">

          <p>
            Welcome to Growqai ("we," "our," "us"). These Terms of Service ("Terms") govern your access to and use of our website, digital platforms, and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please discontinue use of our site immediately.
          </p>

          {/* Sections (content unchanged) */}
          {[
            {
              title: "1. About Growqai",
              content: `Growqai is a growth consulting firm that helps businesses scale intelligently by focusing on three critical pillars: Capital, Client, and Talent, powered by the strategic use of Artificial Intelligence. Our platform, resources, and services are designed to enable organizations to make data-backed decisions that accelerate their growth trajectory.`,
            },
            {
              title: "2. Acceptance of Terms",
              content: (
                <>
                  <p className="mb-4">
                    By accessing, browsing, or using our website or services, you confirm that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>You have read and understood these Terms.</li>
                    <li>You are at least 18 years old or have legal authority to enter into a binding agreement.</li>
                    <li>You agree to comply with all applicable laws and these Terms when using Growqai's services.</li>
                  </ul>
                  <p>
                    If you are using our services on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.
                  </p>
                </>
              )
            },
            {
              title: "3. Services Provided",
              content: `Growqai offers a range of consulting, strategic advisory, and AI-powered growth enablement services. We may modify, suspend, or discontinue certain features or services at any time without notice. We are not liable for any modification or discontinuation.`,
            },
            {
              title: "4. Use of Website and Services",
              content: (
                <>
                  <p className="mb-4">
                    You agree to use our website and services only for lawful and legitimate business purposes. You shall not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Use our website to engage in fraudulent, abusive, or illegal activity.</li>
                    <li>Copy, reproduce, or distribute any part of the website or its content without written authorization.</li>
                    <li>Attempt to gain unauthorized access to our systems, servers, or data.</li>
                    <li>Interfere with or disrupt the website's security features or network operations.</li>
                  </ul>
                  <p>
                    Violation of these terms may result in suspension or termination of your access to our services.
                  </p>
                </>
              )
            },
            {
              title: "5. User Accounts (if applicable)",
              content: (
                <>
                  <p className="mb-4">
                    If certain areas of our platform require you to create an account:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>You agree to provide accurate, complete, and up-to-date information.</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>You agree to notify us immediately if you suspect any unauthorized access to your account.</li>
                  </ul>
                  <p>
                    Growqai will not be liable for losses arising from any unauthorized use of your account.
                  </p>
                </>
              )
            },
            {
              title: "6. Intellectual Property Rights",
              content: (
                <>
                  <p className="mb-4">
                    All materials on the Growqai website, including content, design, graphics, logos, icons, and data, are the exclusive property of Growqai or its licensors. You are granted a limited, non-transferable license to access and use the website for informational purposes only.
                  </p>
                  <p>
                    You may not copy, modify, distribute, or exploit any content for commercial purposes without prior written consent. Any unauthorized use may result in legal action under applicable intellectual property laws.
                  </p>
                </>
              )
            },
            {
              title: "7. Confidentiality",
              content: `Any confidential or proprietary information shared between you and Growqai in the course of business shall remain confidential. You agree not to disclose, copy, or use such information for any purpose other than as permitted under a written agreement or engagement contract.`,
            },
            {
              title: "8. Third-Party Links and Tools",
              content: `Our website may include links to third-party websites or tools for your convenience. Growqai does not control, endorse, or assume responsibility for these third-party sites, their content, or their privacy practices. Accessing such sites is at your own risk.`,
            },
            {
              title: "9. Limitation of Liability",
              content: (
                <>
                  <p className="mb-4">To the maximum extent permitted by law:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Growqai shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from your use of our website or services.</li>
                    <li>This includes loss of data, profits, or business opportunities.</li>
                    <li>Our total liability for any claim related to the website or services shall not exceed the amount you have paid to us (if any) in the past six months.</li>
                  </ul>
                </>
              )
            },
            {
              title: "10. Disclaimers",
              content: (
                <>
                  <p className="mb-4">
                    The content on our website is provided for general informational purposes only and does not constitute professional or financial advice. While we strive to maintain accuracy, we make no warranties regarding the completeness, reliability, or suitability of the information provided.
                  </p>
                  <p>
                    You are responsible for verifying any information before acting upon it.
                  </p>
                </>
              )
            },
            {
              title: "11. Indemnification",
              content: (
                <>
                  <p className="mb-4">
                    You agree to indemnify, defend, and hold harmless Growqai, its affiliates, employees, and partners from any claims, damages, or losses arising out of:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your violation of these Terms.</li>
                    <li>Your misuse of our website or services.</li>
                    <li>Your infringement of any intellectual property or third-party rights.</li>
                  </ul>
                </>
              )
            },
            {
              title: "12. Termination",
              content: `Growqai reserves the right to terminate or restrict your access to the website or services at any time, with or without cause or notice. Upon termination, your right to use the website immediately ceases, and all provisions of these Terms intended to survive termination (e.g., ownership, confidentiality, limitations of liability) will remain in effect.`,
            },
            {
              title: "13. Governing Law and Jurisdiction",
              content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.`,
            },
            {
              title: "14. Changes to These Terms",
              content: `We may revise or update these Terms from time to time. Any changes will be posted on this page with a revised "Effective Date." Your continued use of our website after changes have been made constitutes acceptance of the new Terms.`,
            },
          ].map((section, i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#2527D9]">{section.title}</h2>
              <div className="text-[#313447]">{section.content}</div>
            </div>
          ))}

          {/* Last section left separate because of contact details */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#2527D9]">15. Contact Us</h2>
            <p className="mb-3 text-[#313447]">
              For any questions or concerns regarding these Terms of Service, please contact us at:
            </p>
            <div className="space-y-2 text-[#313447]">
              <p>📧 Email: info@growqai.com</p>
              <p>🌐 Website: www.growqai.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
