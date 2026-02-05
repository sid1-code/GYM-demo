"use client";

import React from "react";
import { useTrainers } from "@/hooks/useData";
import { TrainerCard } from "@/components/ui/TrainerCard";

export default function TrainersPage() {
    const { getAllTrainers } = useTrainers();
    const trainers = getAllTrainers();

    return (
        <div className="container-custom py-12 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-outfit">Meet The <span className="text-primary">Coaches</span></h1>
                <p className="text-text-secondary">World-class athletes and subject matter experts dedicated to your transformation.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {trainers.map((trainer) => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                ))}
            </div>
        </div>
    );
}
