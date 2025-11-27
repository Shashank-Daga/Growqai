import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/site/footer"

export const metadata: Metadata = {
    title: "Growth HUB | Growqai",
    description:
        "Growth HUB - Where Ideas Thrive and Founders Connect. Community workspace for founders, creators, and innovators.",
}

export default function HubPage() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-6">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                </Link>
            </div>

            <div className="max-w-7xl mx-auto">

                {/* ================= HERO SECTION ================ */}
                <div className="relative w-full h-[80vh] md:h-[85vh] lg:h-[90vh]">
                    <Image
                        src="/hero_UI.png" // replace with your actual hero image
                        alt="hero"
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30" />

                    {/* Hero Content */}
                    <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-12 lg:px-20 flex flex-col justify-center">
                        <h1 className="text-[#050659] text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight">
                            Growth HUB — Hustle. Unite. Build.
                        </h1>

                        <p className="text-lg md:text-xl text-[#2527D9] mt-4 max-w-xl">
                            Where Ideas Thrive and Founders Connect
                        </p>

                        {/* Buttons like reference */}
                        <div className="mt-6 flex gap-4">
                            <button className="px-6 py-3 bg-[#1718FF] text-black font-medium shadow-md hover:bg-[#4B4DFF]">
                                Book Now
                            </button>
                            <button className="px-6 py-3 bg-transparent border border-white text-white font-medium hover:bg-white/10">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>

                {/* ============ GROWTH HUB SECTION ============== */}
                <div className="bg-[#faf7ef] py-16 px-6 md:px-12 lg:px-20">
                    <div className="max-w-7xl mx-auto">

                        <div className="justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-[#050659] mb-2">Why Growth HUB</h2>
                            <span className="text-[#313447] hover:text-gray-900 cursor-pointer">
                                Because growth doesn't happen in isolation. At Growth HUB, we're redefining the coworking experience — it's not just about a seat and Wi-Fi, it's about being surrounded by people who push boundaries.
                            </span>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">

                            <div className="bg-white p-6 shadow-sm border">
                                <h3 className="font-semibold mb-2 text-[#2527D9]">Community of Doers</h3>
                                <p className="text-[#313447] text-sm">
                                    A curated network of founders, creators, and professionals who collaborate, learn, and build together.
                                </p>
                            </div>

                            <div className="bg-white p-6 shadow-sm border">
                                <h3 className="font-semibold mb-2 text-[#2527D9]">Ecosystem Access</h3>
                                <p className="text-[#313447] text-sm">
                                    Direct connection to Growqai's growth consulting verticals; Capital, Client, and Talent helping ventures scale faster.
                                </p>
                            </div>

                            <div className="bg-white p-6 shadow-sm border">
                                <h3 className="font-semibold mb-2 text-[#2527D9]">Events & Learning Sessions</h3>
                                <p className="text-[#313447] text-sm">
                                    From founder roundtables to AI-led growth workshops, we create spaces for knowledge and inspiration.
                                </p>
                            </div>

                            <div className="bg-white p-6 shadow-sm border">
                                <h3 className="font-semibold mb-2 text-[#2527D9]">Curated Ambience</h3>
                                <p className="text-[#313447] text-sm">
                                    Modern, inspiring workspaces designed to boost focus, creativity, and meaningful interaction.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ================== OUR ACTIVE HUBS =================== */}
                <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">

                    <h2 className="text-3xl font-bold text-[#050659]">Our Active Hubs</h2>
                    <p className="text-[#313447] mt-2 mb-10">
                        We're growing and so is our community.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">

                        <div className="bg-gray-50 p-8 shadow-sm">
                            <Link href="/hub/hubs/shreyas-crest">
                                <h3 className="text-2xl font-semibold text-[#2527D9] mb-4 cursor-pointer hover:text-[#1718FF] transition-colors">
                                    Growth HUB – Shreyas Crest
                                </h3>
                            </Link>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                A vibrant, modern workspace that blends functionality
                                with creativity. It's where early-stage startups,
                                solopreneurs, and growth-driven teams collaborate to
                                turn ideas into action.
                            </p>

                            <div className="bg-gray-200 h-52  flex items-center justify-center text-gray-600">
                                (Property video and details will appear here)
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8  shadow-sm">
                            <Link href="/hub/hubs/aariv-elegant">
                                <h3 className="text-2xl font-semibold text-[#2527D9] mb-4">
                                    Growth HUB – Aariv Elegant
                                </h3>
                            </Link>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                A space built for founders who believe in scaling
                                fast and smart. With premium amenities and a
                                like-minded community, Aariv Elegant is where
                                innovation finds its rhythm.
                            </p>

                            <div className="bg-gray-200 h-52  flex items-center justify-center text-gray-600">
                                (Property video and details will appear here)
                            </div>
                        </div>

                    </div>
                </div>

                {/* CONTACT + FOOTER */}
                <ContactSection />
                <Footer />

            </div>
        </section>
    )
}
