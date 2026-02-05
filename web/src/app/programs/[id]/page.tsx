"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { PricingCard } from "@/components/ui/PricingCard";
import { TrainerCard } from "@/components/ui/TrainerCard";
import { Check, Clock, Zap, Calendar } from "lucide-react";
import { usePrograms, useTrainers } from "@/hooks/useData";

export default function ProgramDetail() {
    const params = useParams();
    const id = params?.id as string;
    const { getProgramById } = usePrograms();
    const { getTrainerById } = useTrainers();

    const program = getProgramById(id);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!program) notFound();

    const trainer = getTrainerById(program.trainerId);

    const handleEnroll = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="container-custom py-12">
            <Breadcrumbs />

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider">
                            {program.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white font-outfit">{program.title}</h1>
                        <p className="text-xl text-text-secondary leading-relaxed">{program.description}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Card className="p-4 flex items-center gap-4 bg-surface-2 border-white/5" hoverEffect={false}>
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Clock size={24} />
                            </div>
                            <div>
                                <div className="text-text-muted text-xs uppercase tracking-wider">Duration</div>
                                <div className="font-bold text-white">{program.duration}</div>
                            </div>
                        </Card>
                        <Card className="p-4 flex items-center gap-4 bg-surface-2 border-white/5" hoverEffect={false}>
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Zap size={24} />
                            </div>
                            <div>
                                <div className="text-text-muted text-xs uppercase tracking-wider">Intensity</div>
                                <div className="font-bold text-white capitalize">{program.intensity}</div>
                            </div>
                        </Card>
                        <Card className="p-4 flex items-center gap-4 bg-surface-2 border-white/5" hoverEffect={false}>
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <div className="text-text-muted text-xs uppercase tracking-wider">Frequency</div>
                                <div className="font-bold text-white">4-5 days/wk</div>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white font-outfit">What You&apos;ll Get</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {program.features.concat(["Mobile App Access", "Nutrition Guide", "Community Access"]).map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-surface-1 border border-white/5">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                        <Check size={14} />
                                    </div>
                                    <span className="text-text-primary font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <PricingCard
                        price="$49"
                        durationLabel="month"
                        onCtaClick={handleEnroll}
                    />

                    {trainer && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white font-outfit">Head Coach</h3>
                            <TrainerCard trainer={trainer} variant="simple" />
                        </div>
                    )}
                </div>
            </div>

            {/* Enrollment Modal - Using Refined Modal Accessibility */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setIsSuccess(false);
                }}
                title={isSuccess ? "Welcome to the Program" : `Enroll in ${program.title}`}
            >
                {isSuccess ? (
                    <div className="text-center space-y-6">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                            <Check size={32} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-bold text-white">Enrollment Successful!</h4>
                            <p className="text-text-secondary">
                                You now have full access to {program.title}. Check your dashboard to begin your journey.
                            </p>
                        </div>
                        <button className="btn-primary w-full" onClick={() => setIsModalOpen(false)}>
                            Let&apos;s Go
                        </button>
                    </div>
                ) : (
                    <form
                        onSubmit={(e) => { e.preventDefault(); setIsSuccess(true); }}
                        className="space-y-4"
                    >
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-secondary">Full Name</label>
                            <input
                                required
                                className="w-full bg-[#121612] border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-primary transition-colors"
                                placeholder="Alex Johnson"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-secondary">Email Address</label>
                            <input
                                required
                                type="email"
                                className="w-full bg-[#121612] border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-primary transition-colors"
                                placeholder="alex@example.com"
                            />
                        </div>
                        <div className="pt-4">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-text-secondary">Total Due:</span>
                                <span className="text-xl font-bold text-white">$49.00</span>
                            </div>
                            <button type="submit" className="btn-primary w-full">Confirm Enrollment</button>
                        </div>
                    </form>
                )}
            </Modal>
        </div>
    );
}
