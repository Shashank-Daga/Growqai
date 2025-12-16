"use client"
import { useState } from "react"

const allAmenities = [
    { icon: "/Shreyas Crest/Amenities/Furnished.png", title: "Bay 1", desc: "4 workstations + 2 cubicles" },
    { icon: "/Shreyas Crest/Amenities/Workstation.png", title: "Bay 2", desc: "5 workstations with attached washroom" },
    { icon: "/Shreyas Crest/Amenities/Conference.png", title: "Bay 3", desc: "2 cabins (1 open and 1 enclosed)" },
    { icon: "/Shreyas Crest/Amenities/Reception.png", title: "Modern Washrooms", desc: "Two clean and fully equipped washrooms" },
    { icon: "/Shreyas Crest/Amenities/Cafeteria.png", title: "Pantry & Dining", desc: "Common pantry area and dining space" },
    { icon: "/Aariv Elegant/Amenities/Facilities.png", title: "Facilities Support", desc: "Refrigerator & regular cleaning support" },
    { icon: "/Shreyas Crest/Amenities/Ventilations.png", title: "Bright & Ventilated", desc: "Natural airflow and well-lit interiors" },
    { icon: "/Aariv Elegant/Amenities/Secure.png", title: "Secure Workspace", desc: "Peaceful and safe working environment" },
    { icon: "/Aariv Elegant/Amenities/Parking.png", title: "Parking Availability", desc: "Ample parking for both 4-wheelers and 2-wheelers" },
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
