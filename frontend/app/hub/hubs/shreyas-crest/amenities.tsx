"use client"
import { useState } from "react"

const allAmenities = [
    { icon: "/Shreyas Crest/Amenities/Furnished.png", title: "Fully Furnished Setup", desc: "Move-in ready workspace with modern interiors" },
    { icon: "/Shreyas Crest/Amenities/Workstation.png", title: "40 Workstations + 3 Private Cabins", desc: "Ideal for teams, founders & private spaces" },
    { icon: "/Shreyas Crest/Amenities/Conference.png", title: "12-Seater Conference Room", desc: "Perfect for meetings & discussions" },
    { icon: "/Shreyas Crest/Amenities/Cafeteria.png", title: "Cafeteria Space", desc: "Break area for snacks & refreshments" },
    { icon: "/Shreyas Crest/Amenities/Ventilations.png", title: "Naturally Ventilated", desc: "Bright, airy and comfortable environment" },
    { icon: "/Shreyas Crest/Amenities/Reception.png", title: "Reception & Waiting Area", desc: "Professional visitor handling" },
    { icon: "/Shreyas Crest/Amenities/wifi.png", title: "High-Speed WiFi", desc: "Reliable internet for uninterrupted work" },
]

export function Amenities() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {allAmenities.map((item, idx) => (
                    <div key={idx} className="text-center">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-3">
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="font-semibold text-[#2527D9] mb-1">{item.title}</h3>
                        <p className="text-[#313447] text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
