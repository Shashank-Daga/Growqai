import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/site/footer"

export const metadata: Metadata = {
    title: "Growth HUB - Aariv Elegant | Growqai",
    description: "A space built for founders who believe in scaling fast and smart. With premium amenities and a like-minded community, Aariv Elegant is where innovation finds its rhythm.",
}

export default function ShreyasCrestPage() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-6">
                <Link href="/hub" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Hubs
                </Link>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 lg:px-20">

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#050659] mb-4">
                        Growth HUB — Aariv Elegant
                    </h1>
                    <p className="text-xl text-[#2527D9] max-w-3xl mx-auto">
                        A space built for founders who believe in scaling fast and smart.
                        With premium amenities and a like-minded community, Aariv Elegant is where innovation finds its rhythm.
                    </p>
                </div>

                {/* Image Gallery */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                        <Image
                            src="/Service/1.jpg" // Replace with actual image
                            alt="Shreyas Crest Workspace"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                        <Image
                            src="/Service/2.jpg" // Replace with actual image
                            alt="Shreyas Crest Interior"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Intro Description */}
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        This premium office space at Aariv Elegant offers a well-designed layout ideal for startups,
                        small enterprises, or satellite offices seeking a ready-to-move-in setup in one of Pune’s
                        most sought-after commercial hubs — Baner.
                    </p>
                </div>

                {/* Amenities */}
                <div className="bg-gray-50 rounded-3xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-[#050659] mb-8 text-center">Amenities & Features</h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🧑‍💻</span>
                            </div>
                            <h3 className="font-semibold mb-2">Bay 1</h3>
                            <p className="text-gray-600">4 workstations + 2 cubicles</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">💼</span>
                            </div>
                            <h3 className="font-semibold mb-2">Bay 2</h3>
                            <p className="text-gray-600">5 workstations with attached washroom</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🏢</span>
                            </div>
                            <h3 className="font-semibold mb-2">Bay 3</h3>
                            <p className="text-gray-600">2 cabins (1 open and 1 enclosed)</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">📐</span>
                            </div>
                            <h3 className="font-semibold mb-2">Optimized Layout</h3>
                            <p className="text-gray-600">Efficiently planned for space, privacy & collaboration</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🚻</span>
                            </div>
                            <h3 className="font-semibold mb-2">Modern Washrooms</h3>
                            <p className="text-gray-600">Two clean and fully equipped washrooms</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">☕</span>
                            </div>
                            <h3 className="font-semibold mb-2">Pantry & Dining</h3>
                            <p className="text-gray-600">Common pantry area and dining space</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🧹</span>
                            </div>
                            <h3 className="font-semibold mb-2">Facilities Support</h3>
                            <p className="text-gray-600">Refrigerator & regular cleaning support</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🌤️</span>
                            </div>
                            <h3 className="font-semibold mb-2">Bright & Ventilated</h3>
                            <p className="text-gray-600">Natural airflow and well-lit interiors</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🔒</span>
                            </div>
                            <h3 className="font-semibold mb-2">Secure Workspace</h3>
                            <p className="text-gray-600">Peaceful and safe working environment</p>
                        </div>

                        <div className="text-center md:col-span-3">
                            <div className="w-16 h-16 bg-[#1718FF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🚗</span>
                            </div>
                            <h3 className="font-semibold mb-2">Parking Availability</h3>
                            <p className="text-gray-600">Ample parking for both 4-wheelers and 2-wheelers</p>
                        </div>

                    </div>
                </div>

                {/* Location */}
                <div className="bg-gray-50 rounded-3xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-[#050659] mb-8 text-center">Location & Hours</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4">Address</h3>
                            <p className="text-gray-600 mb-4">
                                Shreyas Crest,<br />
                                [Actual Address],<br />
                                [City], [State] - [PIN]
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Operating Hours</h3>
                            <p className="text-gray-600">
                                Monday - Friday: 8:00 AM - 10:00 PM<br />
                                Saturday: 9:00 AM - 8:00 PM<br />
                                Sunday: 10:00 AM - 6:00 PM
                            </p>
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
