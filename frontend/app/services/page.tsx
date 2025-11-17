import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import { Footer } from "@/components/site/footer"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
    title: "Our Services | Growqai",
    description:
        "Discover Growqai's services: Arrange Capital, Attract Clients, and Accelerate Talent with AI-powered growth solutions.",
}

export default function ServicesPage() {
    return (
        <section className="bg-white px-8 md:px-16 lg:px-24 py-16">
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
                <div className="text-sm text-gray-500 mb-10">/SERVICES</div>

                {/* ============ SERVICE BLOCKS ============ */}
                <div className="space-y-32">

                    {/* BLOCK 1 — Arrange Capital (TEXT LEFT + IMAGE RIGHT) */}
                    <div id="arrange-capital" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Arrange Capital</h2>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Capital fuels your growth journey
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Capital is a crucial lever for any growing company, providing the necessary
                                resources to invest in talent, technology, and market expansion. With the
                                right funding, businesses can accelerate innovation, scale their operations,
                                and seize new opportunities more quickly. Effective capital management not
                                only fuels immediate growth but also builds a strong foundation for
                                sustainable success in a competitive landscape.
                            </p>

                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                Why do you need to engage with an expert for your capital raise?
                            </h4>
                            <ul className="list-disc list-inside space-y-2 ml-4 mb-8 text-lg text-gray-700">
                                <li>
                                    We help you to identify the right investor, sifting through investor
                                    databases and portfolios
                                </li>
                                <li>
                                    Standing out in a crowded capital market requires data-driven and
                                    customised pitches
                                </li>
                                <li>Leveraging technology for faster due diligence and closure</li>
                            </ul>

                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                How do we make it happen?
                            </h4>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                We strive to deliver value to our clients. <br />
                                Growqai helps you to identify &
                                engage with potential investors, automating investor discovery, engagement &
                                conversion.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-lg text-gray-700">
                                <li>
                                    <strong>Investor Discovery:</strong> We automate the investor discovery
                                    and matching to identify the right investors.
                                </li>
                                <li>
                                    <strong>Multichannel Engagement:</strong> Our engagement tools ensure
                                    multichannel reach-outs and engagement with investors.
                                </li>
                                <li>
                                    <strong>Faster Deal Closure:</strong> We ensure due diligence time is
                                    reduced, resulting in faster investment closure.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <Image
                                src="/services/1.jpg"
                                width={800}
                                height={600}
                                alt="Arrange Capital"
                                className="rounded-lg object-cover w-full"
                            />
                        </div>
                    </div>

                    {/* BLOCK 2 — Attract Clients (IMAGE LEFT + TEXT RIGHT) */}
                    <div id="attract-clients" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <Image
                                src="/services/2.jpg"
                                width={800}
                                height={600}
                                alt="Attract Clients"
                                className="rounded-lg object-cover w-full"
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Attract Clients</h2>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Expand your client base through AI-powered lead generation & targeted customer conversions.
                            </h3>

                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                Targeted Client Acquisition: Maximizing ROI
                            </h4>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Attracting the right clients is crucial for B2B businesses to achieve
                                sustainable growth and maximize ROI. By focusing on your ideal client
                                profile, we help target organizations that truly benefit from your
                                solutions—leading to better lead quality, faster conversions, and stronger
                                long-term partnerships.
                            </p>

                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                Why do you need an expert's help with client acquisition?
                            </h4>
                            <ul className="list-disc list-inside space-y-2 ml-4 mb-8 text-lg text-gray-700">
                                <li>Navigating client acquisition in today's competitive B2B landscape requires advanced strategies</li>
                                <li>We bring data-driven insights and advanced tools to consistently reach and engage your ideal clients</li>
                                <li>We believe in the power of technology to scale smartly</li>
                            </ul>

                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                How do we make it happen?
                            </h4>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Expand your client base, enabled by AI. <br />
                                Expand your client base through
                                AI-powered lead generation and targeted customer conversions.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-lg text-gray-700">
                                <li>
                                    <strong>Get more leads:</strong> Our tools boost qualified lead pipeline
                                    with lead sourcing & scoring.
                                </li>
                                <li>
                                    <strong>Effective Engagement:</strong> We help you to consistently reach
                                    and engage with your clients.
                                </li>
                                <li>
                                    <strong>AI at Core:</strong> We collaborate with you to convert potential
                                    clients with targeted closures.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* BLOCK 3 — Accelerate Talent (TEXT LEFT + IMAGE RIGHT) */}
                    <div id="accelerate-talent" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accelerate Talent</h2>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Attract, engage, and hire top-tier talent with AI-assisted sourcing, hiring, and retention.
                            </h3>

                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                Talent - Catalyst of Business Growth
                            </h4>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                At Growqai, we believe talent is the engine that drives lasting business
                                success. In today's fast-moving, tech-driven marketplace, companies with the
                                right people don't just adapt—they set the pace. Investing in talent is the
                                smartest move any growth company can make to unlock breakthrough growth and
                                create a true competitive edge.
                            </p>

                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                What makes talent a critical growth driver?
                            </h4>
                            <ul className="list-disc list-inside space-y-2 ml-4 mb-8 text-lg text-gray-700">
                                <li>Effective hiring and development help companies out-innovate and out-execute the competition</li>
                                <li>The ability to attract, develop, and retain top talent isn't just an operational necessity but acts as a critical growth driver</li>
                                <li>Organizations that prioritize talent acquisition and development experience 68% higher profit increases</li>
                            </ul>

                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                How do we make it happen?
                            </h4>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Attracting and Hiring the best talent. <br />
                                Our talent strategies are aimed at
                                helping you attract and hire the best talent, which drives your growth.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-lg text-gray-700">
                                <li><strong>Source:</strong> Automate talent outreach & sourcing</li>
                                <li><strong>Engage:</strong> Expedite screening & ensure engagement with top talent</li>
                                <li><strong>Hire:</strong> Reduce hiring time by deploying AI-enabled hiring</li>
                            </ul>
                        </div>

                        <div>
                            <Image
                                src="/services/3.jpg"
                                width={800}
                                height={600}
                                alt="Accelerate Talent"
                                className="rounded-lg object-cover w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* ============ END SERVICE BLOCKS ============ */}
                
                <ContactSection />
                <Footer />

            </div>
        </section>
    )
}
