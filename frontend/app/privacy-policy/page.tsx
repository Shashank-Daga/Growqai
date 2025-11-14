import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Growqai",
    description: "Privacy Policy for Growqai - growth consulting firm powered by AI.",
}

export default function PrivacyPolicy() {
    return (
        <section className="min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                </div>

                {/* Decorative top line */}
                <div className="relative mb-2">
                    <div className="h-px bg-gray-400 w-full"></div>
                    <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
                </div>

                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-10">/PRIVACY POLICY</div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                    Growqai – Privacy Policy
                </h1>

                {/* Content */}
                <div className="max-w-4xl space-y-8 text-gray-700 leading-relaxed">
                    <p>
                        At Growqai ("we," "our," "us"), we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage with our services, or interact with us in any form.
                    </p>
                    <p>
                        By using our website or services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue using our website immediately.
                    </p>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Who We Are</h2>
                        <p>
                            Growqai is a growth consulting firm focused on empowering businesses through Capital, Client, and Talent enablement, using data and artificial intelligence to drive strategic outcomes.
                        </p>
                        <p>
                            Our website and consulting services are intended for business use and professional engagement.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p>
                            We collect information in several ways to provide and improve our services. This includes:
                        </p>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">2.1 Personal Information</h3>
                        <p className="mb-4">
                            Information that can identify you directly or indirectly, such as:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Contact number</li>
                            <li>Company name and job title</li>
                            <li>Business address</li>
                            <li>Any other details you voluntarily provide through forms or communication</li>
                        </ul>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">2.2 Non-Personal / Technical Data</h3>
                        <p className="mb-4">
                            When you visit our website, we automatically collect certain data such as:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                            <li>IP address and location data</li>
                            <li>Browser type and version</li>
                            <li>Device type and operating system</li>
                            <li>Pages visited, time spent, and interaction data</li>
                            <li>Referring website or source</li>
                        </ul>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">2.3 Cookies and Tracking Technologies</h3>
                        <p>
                            We use cookies, pixels, and similar technologies to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Improve website performance and user experience</li>
                            <li>Analyze traffic patterns and visitor behavior</li>
                            <li>Personalize your experience on our platform</li>
                        </ul>
                        <p className="mt-4">
                            You can modify or disable cookies through your browser settings, but some parts of our site may not function properly as a result.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use your information to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Provide and manage our consulting services</li>
                            <li>Communicate with you regarding inquiries, proposals, and partnerships</li>
                            <li>Send relevant updates, newsletters, or marketing materials (with your consent)</li>
                            <li>Improve our website functionality, usability, and security</li>
                            <li>Conduct research, analytics, and business development</li>
                            <li>Comply with legal obligations or resolve disputes</li>
                        </ul>
                        <p>
                            We will only use your personal data for the purposes it was collected, unless required or permitted by law.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Legal Basis for Processing (GDPR Compliance)</h2>
                        <p className="mb-4">
                            If you are located in the European Economic Area (EEA) or the UK, we will process your data based on one or more of the following legal grounds:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Consent:</strong> When you voluntarily provide information or opt into communication.</li>
                            <li><strong>Contractual Necessity:</strong> To fulfill an agreement or engagement with you.</li>
                            <li><strong>Legitimate Interest:</strong> To improve services, prevent fraud, and protect data.</li>
                            <li><strong>Legal Obligation:</strong> When we are required to comply with applicable laws or regulations.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. How We Share Information</h2>
                        <p className="mb-4">
                            We do not sell, rent, or trade your personal information. However, we may share limited data with trusted third parties, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Service Providers:</strong> For hosting, analytics, CRM, and communication purposes.</li>
                            <li><strong>Business Partners:</strong> For joint projects or collaborations, only with your consent.</li>
                            <li><strong>Legal Authorities:</strong> If required by law or to protect Growqai's legal rights.</li>
                        </ul>
                        <p>
                            All third parties handling your data are contractually obligated to maintain its confidentiality and use it only for authorized purposes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
                        <p className="mb-4">
                            We retain personal data only for as long as necessary to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Fulfill the purposes outlined in this Policy</li>
                            <li>Comply with legal, regulatory, or contractual requirements</li>
                        </ul>
                        <p>
                            When no longer needed, your data will be securely deleted or anonymized.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
                        <p>
                            We use industry-standard administrative, technical, and physical safeguards to protect your information against unauthorized access, disclosure, alteration, or destruction.
                        </p>
                        <p>
                            While we take every precaution, no system is completely secure. You acknowledge that data transmission over the internet involves inherent risks.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights</h2>
                        <p className="mb-4">
                            Depending on your location, you may have the following rights regarding your personal data:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
                            <li><strong>Right to Rectification:</strong> Request corrections of inaccurate or incomplete data.</li>
                            <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal information.</li>
                            <li><strong>Right to Restrict Processing:</strong> Request limits on how your data is used.</li>
                            <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider.</li>
                            <li><strong>Right to Withdraw Consent:</strong> Opt out of communications or data processing at any time.</li>
                        </ul>
                        <p>
                            To exercise these rights, please contact us at info@growqai.com.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Data Transfers</h2>
                        <p>
                            If you access our website or services from outside India, your data may be transferred to and processed in India or other jurisdictions where we operate. By using our services, you consent to such transfers, which will be protected in accordance with this Policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
                        <p>
                            Our website and services are not intended for individuals under 18 years of age. We do not knowingly collect or process data from minors. If we become aware of any such data, we will promptly delete it.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Links to Other Websites</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices, security, or content of those sites. We encourage you to review their individual privacy policies before engaging with them.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Updates to This Privacy Policy</h2>
                        <p>
                            We may revise or update this Privacy Policy from time to time to reflect changes in law, technology, or our business practices. All updates will be posted on this page with the revised "Effective Date." Your continued use of our website after updates constitutes acceptance of the revised Policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions, requests, or concerns about this Privacy Policy or our data handling practices, please contact us at:
                        </p>
                        <div className="space-y-2">
                            <p>📧 Email: info@growqai.com</p>
                            <p>🌐 Website: www.growqai.com</p>
                            <p>🏢 Address: 101, 1st Floor, Shreyas Crest, S.No. 48/1/5, Pashan-Sus Road, Baner, Pune, Maharashtra, 411045</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
