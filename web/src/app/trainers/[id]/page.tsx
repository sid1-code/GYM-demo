"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Instagram, Twitter, ArrowRight } from "lucide-react";
import { useTrainers, usePrograms } from "@/hooks/useData";

export default function TrainerDetail() {
    const params = useParams();
    const id = params?.id as string;
    const { getTrainerById } = useTrainers();
    const { getProgramsByTrainer } = usePrograms();

    const trainer = getTrainerById(id);
    if (!trainer) notFound();

    const trainerPrograms = getProgramsByTrainer(trainer.id);

    return (
        <div className="container-custom py-12">
            <Breadcrumbs />

            <div className="grid lg:grid-cols-12 gap-12">
                {/* Left Col: Image & Quick Stats */}
                <div className="lg:col-span-4 space-y-8">
                    <Card className="p-0 overflow-hidden border-none aspect-[3/4] relative" hoverEffect={false}>
                        <div className="absolute inset-0 bg-surface-2 flex items-center justify-center text-white/5 font-bold text-8xl">
                            {trainer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <h1 className="text-3xl font-bold text-white mb-2 font-outfit">{trainer.name}</h1>
                            <p className="text-primary font-medium">{trainer.role}</p>

                            <div className="flex gap-4 mt-6">
                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                                    <Instagram size={20} />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                                    <Twitter size={20} />
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 space-y-4" hoverEffect={false}>
                        <h3 className="font-bold text-white font-outfit">Credentials</h3>
                        <ul className="space-y-2 text-sm text-text-muted">
                            <li>• Certified Strength & Conditioning Specialist</li>
                            <li>• MSc. Sports Science</li>
                            <li>• 10+ Years Experience</li>
                            <li>• Former National Athlete</li>
                        </ul>
                    </Card>
                </div>

                {/* Right Col: Bio & Programs */}
                <div className="lg:col-span-8 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 font-outfit">About</h2>
                        <p className="text-text-secondary leading-relaxed text-lg">{trainer.bio}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {trainer.specialties.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-surface-2 border border-white/5 rounded-full text-sm text-text-primary">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 font-outfit">Programs by {trainer.name.split(' ')[0]}</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {trainerPrograms.map(program => (
                                <ProgramCard key={program.id} program={program} />
                            ))}
                            {trainerPrograms.length === 0 && (
                                <p className="text-text-muted italic">No active programs listed.</p>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
