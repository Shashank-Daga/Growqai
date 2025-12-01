import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/site/footer"
import { Amenities } from "./amentites"

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

                {/* Two Column Layout Below Collage */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12">

                    {/* LEFT SECTION — DESCRIPTION + LOCATION */}
                    <div>

                        {/* Intro Description */}
                        <div className="py-12 mb-12 text-[#313447]">
                            <p className="text-xl mb-4">
                                A vibrant, modern workspace that blends functionality with creativity. It's where early-stage startups, solopreneurs, and growth-driven teams collaborate to turn ideas into action.
                            </p>
                            <p className="text-xl md:text-xlleading-relaxed">
                                Located in the heart of Baner, this ready-to-move office offers a modern, glass-enclosed environment ideal for teams seeking a blend of comfort, design, and functionality.
                            </p>
                        </div>

                        {/* LOCATION & HOURS */}
                        <div className="bg-gray-50 p-8">
                            <h2 className="text-2xl font-bold text-[#050659] mb-6">Location & Hours</h2>

                            <div className="mb-8">
                                <h3 className="font-semibold mb-2 text-[#2527D9]">Address</h3>
                                <a
                                    href="https://maps.app.goo.gl/kuKMxRDjATTGEtGPA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#313447] hover:underline"
                                >
                                    Shreyas Crest,<br />
                                    S.No. 48/1/5, 6 & 7, Pashan - Sus Rd, Baner<br />
                                    Pune, Maharashtra - 411045
                                </a>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2 text-[#2527D9]">Operating Hours</h3>
                                <p className="text-[#313447]">
                                    Monday - Friday:<br />
                                    8:00 AM - 10:00 PM
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SECTION — AMENITIES WITH LOAD MORE */}
                    <div>
                        <div className="bg-gray-50 p-8">
                            <h2 className="text-2xl font-bold text-[#050659] mb-6 text-center">Amenities & Features</h2>

                            {/* Collapsible Grid */}
                            <Amenities />
                        </div>
                    </div>

                </div>
            </div>

            {/* CONTACT + FOOTER */}
            < ContactSection />
            <Footer />
        </section >
    )
}
