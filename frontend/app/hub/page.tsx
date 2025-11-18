import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/site/footer"

export const metadata: Metadata = {
    title: "Growth HUB | Growqai",
    description: "Growth HUB - Where Ideas Thrive and Founders Connect. Community workspace for founders, creators, and innovators.",
}

export default function HubPage() {
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
                <div className="text-sm text-gray-500 mb-10">/HUB</div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-[#050659] mb-4">
                    Growth HUB — Hustle. Unite. Build.
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl font-semibold text-[#2527D9] mb-12">
                    Where Ideas Thrive and Founders Connect
                </h2>

                {/* Intro Description */}
                <div className="max-w-4xl mb-16 space-y-6">
                    <p className="text-lg text-[#313447] leading-relaxed">
                        Growth HUB is the community workspace vertical under Growqai, built to empower founders, creators, and innovators. It's more than just a workspace; it's a thriving ecosystem designed for collaboration, learning, and collective growth. Whether you're scaling your startup, building your personal brand, or exploring your next big idea, Growth HUB gives you the space, network, and energy to make it happen.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Here, ambition meets action. Every desk, every conversation, and every collaboration fuels the next breakthrough.
                    </p>
                </div>

                {/* Why Growth HUB */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-[#050659] mb-6">Why Growth HUB</h3>
                    <p className="text-lg text-[#313447] leading-relaxed mb-6 max-w-4xl">
                        Because growth doesn't happen in isolation. At Growth HUB, we're redefining the coworking experience — it's not just about a seat and Wi-Fi, it's about being surrounded by people who push boundaries.
                    </p>
                    <p className="text-lg text-[#313447] leading-relaxed mb-6">
                        What makes us different:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-lg text-[#313447]">
                        <li><strong>Community of Doers:</strong> A curated network of founders, creators, and professionals who collaborate, learn, and build together.</li>
                        <li><strong>Ecosystem Access:</strong> Direct connection to Growqai's growth consulting verticals; Capital, Client, and Talent helping ventures scale faster.</li>
                        <li><strong>Events & Learning Sessions:</strong> From founder roundtables to AI-led growth workshops, we create spaces for knowledge and inspiration.</li>
                        <li><strong>Curated Ambience:</strong> Modern, inspiring workspaces designed to boost focus, creativity, and meaningful interaction.</li>
                    </ul>
                </div>

                {/* Our Active Hubs */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-[#050659] mb-2">Our Active Hubs</h3>
                    <p className="text-lg text-[#313447] leading-relaxed mb-8 max-w-4xl">
                        We're growing and so is our community.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Growth HUB – Shreyas Crest */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h4 className="text-2xl font-semibold text-[#2527D9] mb-4">Growth HUB – Shreyas Crest</h4>
                            <p className="text-[#313447] leading-relaxed mb-6">
                                A vibrant, modern workspace that blends functionality with creativity. It's where early-stage startups, solopreneurs, and growth-driven teams collaborate to turn ideas into action.
                            </p>
                            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
                                (Property video and details will appear here)
                            </div>
                        </div>

                        {/* Growth HUB – Aariv Elegant */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h4 className="text-2xl font-semibold text-[#2527D9] mb-4">Growth HUB – Aariv Elegant</h4>
                            <p className="text-[#313447] leading-relaxed mb-6">
                                A space built for founders who believe in scaling fast and smart. With premium amenities and a like-minded community, Aariv Elegant is where innovation finds its rhythm.
                            </p>
                            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
                                (Property video and details will appear here)
                            </div>
                        </div>
                    </div>
                </div>

                {/* Join the Movement */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-[#050659] mb-6">Join the Movement</h3>
                    <p className="text-lg text-[#313447] leading-relaxed mb-6 max-w-4xl">
                        Growth HUB isn't just a place to work; it's where Hustle, Unity, and Building come together. If you're ready to surround yourself with ambition, innovation, and purpose, join the Growth HUB community today.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Let's Grow Together.
                    </p>
                    <div className="space-y-4">
                        <p className="text-lg">👉 Explore our spaces | Become a member | Collaborate with us</p>
                    </div>
                </div>

                <ContactSection />
                <Footer />

            </div>
        </section>
    )
}
