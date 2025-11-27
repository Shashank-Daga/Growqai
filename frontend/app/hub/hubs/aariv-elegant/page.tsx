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
                    <p className="text-xl text-[#2527D9] max-w-3xl mx-auto">
                        A space built for founders who believe in scaling fast and smart.
                        With premium amenities and a like-minded community, Aariv Elegant is where innovation finds its rhythm.
                    </p>
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

                {/* Intro Description */}
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <p className="text-lg md:text-xl text-[#313447] leading-relaxed">
                        This premium office space at Aariv Elegant offers a well-designed layout ideal for startups,
                        small enterprises, or satellite offices seeking a ready-to-move-in setup in one of Pune’s
                        most sought-after commercial hubs — Baner.
                    </p>
                </div>

                {/* Amenities */}
                <div className="bg-gray-50 p-8 mb-16">
                    <h2 className="text-3xl font-bold text-[#050659] mb-8 text-center">Amenities & Features</h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🧑‍💻</span>
                            </div>
                            <h3 className="font-semibold mb-2">Bay 1</h3>
                            <p className="text-[#313447]">4 workstations + 2 cubicles</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF] flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">💼</span>
                            </div>
                            <h3 className="font-semibold mb-2">Bay 2</h3>
                            <p className="text-[#313447]">5 workstations with attached washroom</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF]  flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🏢</span>
                            </div>
                            <h3 className="font-semibold mb-2">Bay 3</h3>
                            <p className="text-[#313447]">2 cabins (1 open and 1 enclosed)</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF]  flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">📐</span>
                            </div>
                            <h3 className="font-semibold mb-2">Optimized Layout</h3>
                            <p className="text-[#313447]">Efficiently planned for space, privacy & collaboration</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF]  flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🚻</span>
                            </div>
                            <h3 className="font-semibold mb-2">Modern Washrooms</h3>
                            <p className="text-[#313447]">Two clean and fully equipped washrooms</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF]  flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">☕</span>
                            </div>
                            <h3 className="font-semibold mb-2">Pantry & Dining</h3>
                            <p className="text-[#313447]">Common pantry area and dining space</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF]  flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🧹</span>
                            </div>
                            <h3 className="font-semibold mb-2">Facilities Support</h3>
                            <p className="text-[#313447]">Refrigerator & regular cleaning support</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF]  flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🌤️</span>
                            </div>
                            <h3 className="font-semibold mb-2">Bright & Ventilated</h3>
                            <p className="text-[#313447]">Natural airflow and well-lit interiors</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1718FF]  flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🔒</span>
                            </div>
                            <h3 className="font-semibold mb-2">Secure Workspace</h3>
                            <p className="text-[#313447]">Peaceful and safe working environment</p>
                        </div>

                        <div className="text-center md:col-span-3">
                            <div className="w-16 h-16 bg-[#1718FF]  flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🚗</span>
                            </div>
                            <h3 className="font-semibold mb-2">Parking Availability</h3>
                            <p className="text-[#313447]">Ample parking for both 4-wheelers and 2-wheelers</p>
                        </div>

                    </div>
                </div>

                {/* Location */}
                <div className="bg-gray-50 p-8 mb-16">
                    <h2 className="text-3xl font-bold text-[#050659] mb-8 text-center">Location & Hours</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4">Address</h3>
                            <a
                                    href="https://www.google.com/maps/place/Aariv+Elegant/@18.5722572,73.7659764,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9d0d70feed5:0x6a97c0a5401a4589!8m2!3d18.5722572!4d73.7685513!16s%2Fg%2F11s4t3tp4b?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#313447] hover:underline mb-4"
                                >
                                Aariv Elegant,<br />
                                Aariv Elegant Lane, Plot no 23/1B,<br /> Lane Number 7, Laxman Nagar, Baner<br />
                                Pune, Maharashtra - 411045
                            </a>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Operating Hours</h3>
                            <p className="text-[#313447]">
                                Monday - Friday:<br /> 8:00 AM - 10:00 PM<br />
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
