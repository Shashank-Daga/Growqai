import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Growqai",
    description: "Privacy Policy for Growqai - growth consulting firm powered by AI.",
}

export default function PrivacyPolicy() {
    return (
        <section className="min-h-screen bg-white px-8 md:px-16 lg:px-28 py-8">
            <div className="max-w-5xl mx-auto">

                {/* Back Button */}
                <div className="mb-10">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                </div>

                {/* Decorative Line */}
                <div className="relative mb-2">
                    <div className="h-px bg-gray-400 w-full"></div>
                    <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
                </div>

                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 tracking-wide mb-10">/ PRIVACY POLICY</div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-[#050659] leading-tight mb-12">
                    Growqai – Privacy Policy
                </h1>

                {/* Content */}
                <div className="space-y-12 text-[#313447] text-lg leading-relaxed">

                    {/* INTRO */}
                    <div className="space-y-6">
                        <p>
                            At Growqai ("we," "our," "us"), we value your privacy and are committed to 
                            protecting your personal data. This Privacy Policy explains how we collect, use, 
                            disclose, and safeguard your information when you visit our website, engage with 
                            our services, or interact with us in any form.
                        </p>
                        <p>
                            By using our website or services, you agree to the terms of this Privacy Policy. 
                            If you do not agree, please discontinue using our website immediately.
                        </p>
                    </div>

                    {/* SECTION 1 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">1. Who We Are</h2>
                        <p>
                            Growqai is a growth consulting firm focused on empowering businesses through 
                            Capital, Client, and Talent enablement, using data and artificial intelligence 
                            to drive strategic outcomes.
                        </p>
                        <p>
                            Our website and consulting services are intended for business use and 
                            professional engagement.
                        </p>
                    </div>

                    {/* SECTION 2 */}
                    <div className="space-y-6 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">2. Information We Collect</h2>
                        
                        <p>We collect information in several ways to provide and improve our services.</p>

                        <div>
                            <h3 className="text-2xl font-medium text-gray-900 mb-2">
                                2.1 Personal Information
                            </h3>
                            <p className="mb-4">We may collect information such as:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Contact number</li>
                                <li>Company name and job title</li>
                                <li>Business address</li>
                                <li>Any details provided voluntarily</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-medium text-gray-900 mb-2">
                                2.2 Non-Personal / Technical Data
                            </h3>
                            <p className="mb-4">Automatically collected data includes:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Device type and OS</li>
                                <li>Pages visited and time spent</li>
                                <li>Referring source</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-medium text-gray-900 mb-2">
                                2.3 Cookies & Tracking Technologies
                            </h3>
                            <p className="mb-4">We use these to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Improve performance and UX</li>
                                <li>Analyze visitor behavior</li>
                                <li>Personalize content</li>
                            </ul>
                            <p className="mt-4">
                                You may disable cookies in your browser, but some features may not work properly.
                            </p>
                        </div>
                    </div>

                    {/* SECTION 3 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">3. How We Use Your Information</h2>
                        <p>We use your data to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Provide and manage services</li>
                            <li>Respond to inquiries</li>
                            <li>Send updates or newsletters</li>
                            <li>Improve website performance</li>
                            <li>Conduct analytics</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </div>

                    {/* SECTION 4 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">
                            4. Legal Basis for Processing (GDPR)
                        </h2>
                        <p>We process data under:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Consent</strong></li>
                            <li><strong>Contract necessity</strong></li>
                            <li><strong>Legitimate interest</strong></li>
                            <li><strong>Legal obligation</strong></li>
                        </ul>
                    </div>

                    {/* SECTION 5 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">5. How We Share Information</h2>
                        <p>We may share with:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Service providers (hosting, analytics, CRM)</li>
                            <li>Business partners (with consent)</li>
                            <li>Legal authorities when required</li>
                        </ul>
                    </div>

                    {/* SECTION 6 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">6. Data Retention</h2>
                        <p>We retain personal data only for as long as necessary to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Fulfill the purposes outlined in this Policy</li>
                            <li>Comply with legal, regulatory, or contractual requirements</li>
                        </ul>
                        <p>When no longer needed, your data will be securely deleted or anonymized.</p>
                    </div>

                    {/* SECTION 7 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">7. Data Security</h2>
                        <p>We use industry-standard administrative, technical, and physical safeguards to protect your information against unauthorized access, disclosure, alteration, or destruction.</p>
                        <p>While we take every precaution, no system is completely secure. You acknowledge that data transmission over the internet involves inherent risks.</p>
                    </div>

                    {/* SECTION 8 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">8. Your Rights</h2>
                        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
                            <li><strong>Right to Rectification:</strong> Request corrections of inaccurate or incomplete data.</li>
                            <li><strong>Right to Erasure (“Right to be Forgotten”):</strong> Request deletion of your personal information.</li>
                            <li><strong>Right to Restrict Processing:</strong> Request limits on how your data is used.</li>
                            <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider.</li>
                            <li><strong>Right to Withdraw Consent:</strong> Opt out of communications or data processing at any time.</li>
                        </ul>
                        <p>To exercise these rights, please contact us at info@growqai.com.</p>
                    </div>

                    {/* SECTION 9 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">9. International Data Transfers</h2>
                        <p>If you access our website or services from outside India, your data may be transferred to and processed in India or other jurisdictions where we operate.</p>
                        <p>By using our services, you consent to such transfers, which will be protected in accordance with this Policy.</p>
                    </div>

                    {/* SECTION 10 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">10. Children’s Privacy</h2>
                        <p>Our website and services are not intended for individuals under 18 years of age.</p>
                        <p>We do not knowingly collect or process data from minors. If we become aware of any such data, we will promptly delete it.</p>
                    </div>

                    {/* SECTION 11 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">11. Links to Other Websites</h2>
                        <p>Our website may contain links to third-party websites.</p>
                        <p>We are not responsible for the privacy practices, security, or content of those sites. We encourage you to review their individual privacy policies before engaging with them.</p>
                    </div>

                    {/* SECTION 12 */}
                    <div className="space-y-4 text-[#313447]">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">12. Updates to This Privacy Policy</h2>
                        <p>We may revise or update this Privacy Policy from time to time to reflect changes in law, technology, or our business practices.</p>
                        <p>All updates will be posted on this page with the revised “Effective Date.”</p>
                        <p>Your continued use of our website after updates constitutes acceptance of the revised Policy.</p>
                    </div>

                    {/* SECTION 13 */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#2527D9]">13. Contact Us</h2>
                        <div className="space-y-2 text-[#313447]">
                            <p>📧 Email: info@growqai.com</p>
                            <p>🌐 Website: www.growqai.com</p>
                            <p>🏢 Address: 101, Shreyas Crest, Baner, Pune, Maharashtra, 411045</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
