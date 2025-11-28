"use client"
import { useState } from "react"

const allAmenities = [
    { icon: "🧑‍💻", title: "Bay 1", desc: "4 workstations + 2 cubicles" },
    { icon: "💼", title: "Bay 2", desc: "5 workstations with attached washroom" },
    { icon: "🏢", title: "Bay 3", desc: "2 cabins (1 open and 1 enclosed)" },
    { icon: "📐", title: "Optimized Layout", desc: "Efficiently planned for space, privacy & collaboration" },
    { icon: "🚻", title: "Modern Washrooms", desc: "Two clean and fully equipped washrooms" },
    { icon: "☕", title: "Pantry & Dining", desc: "Common pantry area and dining space" },
    { icon: "🧹", title: "Facilities Support", desc: "Refrigerator & regular cleaning support" },
    { icon: "🌤️", title: "Bright & Ventilated", desc: "Natural airflow and well-lit interiors" },
    { icon: "🔒", title: "Secure Workspace", desc: "Peaceful and safe working environment" },
    { icon: "🚗", title: "Parking Availability", desc: "Ample parking for both 4-wheelers and 2-wheelers" },
]

export function Amenities() {
    const [showAll, setShowAll] = useState(false)

    const visible = showAll ? allAmenities : allAmenities.slice(0, 4)

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {visible.map((item, idx) => (
                    <div key={idx} className="text-center">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-3">
                            <span className="text-3xl">{item.icon}</span>
                        </div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-[#313447] text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            {!showAll && (
                <button
                    onClick={() => setShowAll(true)}
                    className="mx-auto block text-white font-semibold bg-[#1718FF] px-4 py-2 hover:bg-[#4B4DFF] transition-all"
                >
                    Load More
                </button>
            )}
        </>
    )
}
