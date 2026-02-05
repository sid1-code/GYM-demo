"use client";

import React, { Suspense } from "react";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Program } from "@/lib/data";

const placeholderPlans: Program[] = [
    {
        id: "monthly",
        title: "Monthly Plan",
        description: "Perfect for testing the waters and getting started on your fitness journey.",
        category: "strength",
        features: ["Standard Coaching", "Nutrition Guide", "Access to All Classes"],
        duration: "1 Month",
        intensity: "beginner",
        trainerId: "t1",
        image: "/images/program-strength.jpg"
    },
    {
        id: "quarterly",
        title: "Quarter Yearly Plan",
        description: "A solid commitment to see real progress and build sustainable habits.",
        category: "hiit",
        features: ["Priority Coaching", "Custom Diet Plan", "Weekly Progress Tracking"],
        duration: "3 Months",
        intensity: "intermediate",
        trainerId: "t2",
        image: "/images/program-hiit.jpg"
    },
    {
        id: "half-yearly",
        title: "Half Yearly Plan",
        description: "Designed for those serious about a total body transformation.",
        category: "strength",
        features: ["Dedicated Personal Coach", "Advanced Supplement Guide", "Monthly Physical Assessment"],
        duration: "6 Months",
        intensity: "intermediate",
        trainerId: "t3",
        image: "/images/program-mobility.jpg"
    },
    {
        id: "yearly",
        title: "Yearly Plan",
        description: "The ultimate fitness lifestyle commitment with maximum support and results.",
        category: "cardio",
        features: ["24/7 Coach Support", "Full Lifestyle Integration", "VIP Access to Workshops"],
        duration: "12 Months",
        intensity: "advanced",
        trainerId: "t1",
        image: "/images/program-hiit.jpg"
    },
];

function ProgramsContent() {
    return (
        <div className="container-custom py-12 md:py-20">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-outfit">
                        Training <span className="text-primary">Plans</span>
                    </h1>
                    <p className="text-text-secondary max-w-md">
                        Choose from our range of elite plans designed to push your limits.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {placeholderPlans.map((plan) => (
                    <ProgramCard key={plan.id} program={plan} />
                ))}
            </div>
        </div>
    );
}

export default function ProgramsPage() {
    return (
        <Suspense fallback={
            <div className="container-custom py-20 text-center text-text-muted">
                Loading plans...
            </div>
        }>
            <ProgramsContent />
        </Suspense>
    );
}
