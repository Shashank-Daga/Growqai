import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/site/footer"

export const metadata: Metadata = {
    title: "Growth HUB - Shreyas Crest | Growqai",
    description: "Discover Growth HUB Shreyas Crest - A vibrant, modern workspace for early-stage startups, solopreneurs, and growth-driven teams.",
}

export default function ShreyasCrestPage() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-6">
                <Link href="/hub" className="inline-flex items-center gap-2 text-[#313447] hover:text-gray-900 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                </Link>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 lg:px-20">

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#050659] mb-4">
                        Growth HUB — Shreyas Crest
                    </h1>
                </div>

                {/* Image Gallery – 6 equal-size images */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">

                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className="relative h-64 overflow-hidden rounded-lg">
                            <Image
                                src={`/Shreyas Crest/${num}.jpg`}
                                alt={`Workspace Image ${num}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}

                </div>


                {/* Intro Description */}
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <p className="text-xl text-[#2527D9] max-w-3xl mx-auto">
                        A vibrant, modern workspace that blends functionality with creativity. It's where early-stage startups, solopreneurs, and growth-driven teams collaborate to turn ideas into action.
                    </p>
                    <p className="text-lg md:text-xl text-[#313447] leading-relaxed">
                        Located in the heart of Baner, this ready-to-move office offers a modern, glass-enclosed environment ideal for teams seeking a blend of comfort, design, and functionality.
                    </p>
                </div>

                {/* Amenities */}
                <div className="bg-gray-50  p-8 mb-16">
                    <h2 className="text-3xl font-bold text-[#050659] mb-8 text-center">Amenities & Features</h2>
                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="text-center">
                            <div className="w-16 h-16  flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🏢</span>
                            </div>
                            <h3 className="font-semibold mb-2">Fully Furnished Setup</h3>
                            <p className="text-[#313447]">Move-in ready workspace with modern interiors</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16  flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">💺</span>
                            </div>
                            <h3 className="font-semibold mb-2">40 Workstations + 3 Private Cabins</h3>
                            <p className="text-[#313447]">Ideal for teams, founders & private workspaces</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">👥</span>
                            </div>
                            <h3 className="font-semibold mb-2">12-Seater Conference Room</h3>
                            <p className="text-[#313447]">Perfect for meetings, presentations & discussions</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">☕</span>
                            </div>
                            <h3 className="font-semibold mb-2">Cafeteria Space</h3>
                            <p className="text-[#313447]">Dedicated area for breaks, snacks & refreshments</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🌤️</span>
                            </div>
                            <h3 className="font-semibold mb-2">Naturally Ventilated</h3>
                            <p className="text-[#313447]">Bright, airy and comfortable environment</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">💼</span>
                            </div>
                            <h3 className="font-semibold mb-2">Reception & Waiting Area</h3>
                            <p className="text-[#313447]">Professional first-point-of-contact for visitors</p>
                        </div>

                        <div className="text-center md:col-span-3">
                            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">📶</span>
                            </div>
                            <h3 className="font-semibold mb-2">High-Speed WiFi</h3>
                            <p className="text-[#313447]">Fast and reliable internet for uninterrupted work</p>
                        </div>

                    </div>
                </div>

                {/* Location */}
                <div className="bg-gray-50  p-8 mb-16">
                    <h2 className="text-3xl font-bold text-[#050659] mb-8 text-center">Location & Hours</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4 text-[#2527D9]">Address</h3>
                            <div>
                                <a
                                    href="https://maps.app.goo.gl/kuKMxRDjATTGEtGPA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#313447] hover:underline mb-4"
                                >
                                    Shreyas Crest,<br />
                                    S.No. 48/1/5, 6 & 7, Pashan - Sus Rd, Baner<br />
                                    Pune, Maharashtra - 411045
                                </a>
                            </div>

                        </div>
                        <div>
                            <h3 className="font-semibold mb-4 text-[#2527D9]">Operating Hours</h3>
                            <p className="text-[#313447]">
                                Monday - Friday:<br /> 8:00 AM - 10:00 PM<br />
                            </p>
                        </div>
                    </div>
                </div>

            </div >

            {/* CONTACT + FOOTER */}
            < ContactSection />
            <Footer />
        </section >
    )
}
