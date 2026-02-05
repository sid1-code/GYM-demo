"use client";

import React from "react";
import { FacilityCard } from "@/components/ui/FacilityCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const facilities = [
    {
        title: "Weight Loss Program",
        description: "Science-backed weight management strategies combining metabolic conditioning, nutrition, and lifestyle coaching.",
        image: "/facilities/weight-loss.jpg",
        details: [
            "Personalized Caloric Profiles",
            "Metabolic Speed Training",
            "Weekly Body Composition Scans",
            "Nutritional Behavioral Therapy"
        ]
    },
    {
        title: "Weight Lifting",
        description: "Our elite strength floor features Olympic-grade equipment and specialized zones for powerlifting and hypertrophy.",
        image: "/facilities/weight-lifting.webp",
        details: [
            "Olympic Lifting Platforms",
            "Custom-built Power Racks",
            "Dumbbells up to 150 lbs",
            "Structural Integrity Coaching"
        ]
    },
    {
        title: "Cardio Zone",
        description: "A high-performance cardiovascular laboratory equipped with advanced endurance machines and heart-rate monitoring.",
        image: "/facilities/cardio-zone.jpg",
        details: [
            "Eco-friendly Curved Treadmills",
            "Wattbike Pro Analyzers",
            "Concept2 Rowers & SkiErgs",
            "Real-time VO2 Max Tracking"
        ]
    },
    {
        title: "Yoga",
        description: "A sanctuary for mind-body integration, offering diverse disciplines from high-heat yoga to restorative mobility sessions.",
        image: "/facilities/yoga.webp",
        details: [
            "Heated Infrared Studios",
            "Premium Manduka PRO Mats",
            "Specialized Hatha & Vinyasa",
            "Breathwork & Meditation"
        ]
    },
    {
        title: "Kickboxing",
        description: "High-intensity striking sessions that develop explosive power, agility, and fundamental combat mechanics.",
        image: "/facilities/kickboxing.jpg",
        details: [
            "Professional Heavy Bags",
            "Striking Mechanic Analysis",
            "Fat-torch Drills",
            "Agility Ladder Work"
        ]
    },
    {
        title: "Battle Rope",
        description: "Intensive full-body metabolic conditioning that targets muscular endurance and cardiovascular capacity through rope waves.",
        image: "/facilities/battlerope.webp",
        details: [
            "High-tensile Grade Ropes",
            "Grip Strength Protocols",
            "Low-impact HIIT",
            "Core Stability Focus"
        ]
    }
];

export default function FacilitiesPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container-custom">
                <div className="mb-12">
                    <Breadcrumbs />
                </div>

                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-white font-outfit mb-6 uppercase tracking-tighter">
                        Elite <span className="text-primary">Facilities</span>
                    </h1>
                    <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
                        Experience world-class training environments equipped with the industry's most advanced technology and equipment. Every zone is designed to maximize your performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <FacilityCard
                            key={index}
                            index={index}
                            title={facility.title}
                            description={facility.description}
                            details={facility.details}
                            image={facility.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
