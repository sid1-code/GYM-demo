"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { Mail, Loader2, Check } from "lucide-react";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setIsSuccessModalOpen(true);
        }, 1500);
    };

    return (
        <div className="container-custom py-12 md:py-20">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit">Join The <span className="text-primary">Movement</span></h1>
                    <p className="text-text-secondary">Ready to start? Fill out the form below and a coach will reach out to you.</p>
                </div>

                <Card className="p-8 md:p-10 border-white/10 bg-[#121612]">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-semibold text-white">First Name</label>
                                <input
                                    id="firstName"
                                    required
                                    className="w-full bg-surface-2 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-semibold text-white">Last Name</label>
                                <input
                                    id="lastName"
                                    required
                                    className="w-full bg-surface-2 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-white">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full bg-surface-2 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="goal" className="text-sm font-semibold text-white">Primary Goal</label>
                            <select
                                id="goal"
                                className="w-full bg-surface-2 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                            >
                                <option value="strength">Build Strength</option>
                                <option value="weight-loss">Lose Weight</option>
                                <option value="athleticism">Improve Athleticism</option>
                                <option value="mobility">Better Mobility</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-white">Message (Optional)</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-surface-2 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                placeholder="Tell us about your fitness background..."
                            />
                        </div>

                        <Button type="submit" disabled={loading} className="w-full py-4 text-lg">
                            {loading ? <Loader2 className="animate-spin" /> : "Submit Application"}
                        </Button>
                    </form>
                </Card>
            </div>

            <Modal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
                title="Application Received"
            >
                <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                        <Check size={32} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                        <p className="text-text-secondary">
                            We&quot;ll get back to you within 24 hours to schedule your consultation.
                        </p>
                    </div>
                    <Button className="w-full" onClick={() => setIsSuccessModalOpen(false)}>
                        Close
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
