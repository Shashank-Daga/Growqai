import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/site/footer"
import { Amenities } from "./amenities"

export const metadata: Metadata = {
    title: "Growth HUB - Aariv Elegant | Growqai",
    description: "A space built for founders who believe in scaling fast and smart. With premium amenities and a like-minded community, Aariv Elegant is where innovation finds its rhythm.",
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
                        Growth HUB — Aariv Elegant
                    </h1>
                </div>

                {/* Image Gallery – 6 equal-size images */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">

                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className="relative h-64 overflow-hidden rounded-lg">
                            <Image
                                src={`/Aariv Elegant/${num}.jpg`}
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
                        <div className="py-12 text-[#313447] ">
                            <p className="text-xl mb-4">
                                A space built for founders who believe in scaling fast and smart.
                                With premium amenities and a like-minded community, Aariv Elegant is where innovation finds its rhythm.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed">
                                This premium office space at Aariv Elegant offers a well-designed layout ideal for startups,
                                small enterprises, or satellite offices seeking a ready-to-move-in setup in one of Pune’s
                                most sought-after commercial hubs — Baner.
                            </p>
                        </div>

                        {/* LOCATION & HOURS */}
                        <div className="bg-gray-50 p-8">
                            <h2 className="text-2xl font-bold text-[#050659] mb-6">Location & Hours</h2>

                            <div className="mb-8">
                                <h3 className="font-semibold mb-2 text-[#2527D9]">Address</h3>
                                <a
                                    href="https://www.google.com/maps/place/Aariv+Elegant/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#313447] hover:underline"
                                >
                                    Aariv Elegant,<br />
                                    Aariv Elegant Lane, Plot no 23/1B,<br />
                                    Lane Number 7, Laxman Nagar, Baner<br />
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

                        {/* Contact Us */}
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-[#050659] mb-6">Contact Us</h2>
                            <div>
                                <h3 className="font-semibold mb-2 text-[#2527D9]">Phone No.</h3>
                                <a
                                    href="tel:+919767663123"
                                    className="text-[#313447] hover:text-[#2527D9] transition-colors"
                                >
                                    +91 9767663123
                                </a>
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
            <ContactSection />
            <Footer />
        </section>
    )
}
