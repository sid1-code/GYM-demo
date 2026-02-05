import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Program } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ProgramCardProps {
    program: Program;
    className?: string;
}

export function ProgramCard({ program, className }: ProgramCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const handleCardClick = (e: React.MouseEvent) => {
        // Prevent expansion if clicking the button or inside the modal
        if ((e.target as HTMLElement).closest('button')) return;
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div onClick={handleCardClick} className="cursor-pointer">
                <Card className={cn(
                    "h-full border border-white/5 bg-surface-1 transition-all duration-500 group",
                    isExpanded ? "ring-2 ring-primary border-primary/50 shadow-accent-glow" : "hover:border-primary/30",
                    className
                )}>
                    {/* Header Image/Banner */}
                    <div className="h-40 bg-surface-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-1 to-transparent opacity-90 z-10" />
                        <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-4xl uppercase tracking-widest rotate-12 select-none group-hover:scale-110 transition-transform duration-700">
                            {program.category}
                        </div>
                        <div className="absolute bottom-4 left-6 z-20">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 backdrop-blur-md">
                                {program.duration}
                            </span>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-black text-white font-outfit leading-tight group-hover:text-primary transition-colors">
                                {program.title}
                            </h3>
                        </div>

                        <p className="text-text-muted text-sm leading-relaxed mb-8">
                            {program.description}
                        </p>

                        <div className="space-y-4">
                            {/* Always visible features */}
                            {program.features.slice(0, 3).map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <Check size={12} className="text-primary" />
                                    </div>
                                    <span className="font-medium">{feature}</span>
                                </div>
                            ))}

                            {/* Expanded features */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "circOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 space-y-4 border-t border-white/5 mt-4">
                                            <div className="flex items-center gap-3 text-sm text-text-secondary">
                                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                                    <Check size={12} className="text-primary" />
                                                </div>
                                                <span className="font-medium italic text-primary">Priority Support</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-text-secondary">
                                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                                    <Check size={12} className="text-primary" />
                                                </div>
                                                <span className="font-medium italic text-primary">Progress Analytics</span>
                                            </div>

                                            <Button
                                                variant="primary"
                                                className="w-full mt-6 shadow-accent-glow"
                                                onClick={() => setIsModalOpen(true)}
                                            >
                                                Select This Plan
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {!isExpanded && (
                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-xs font-black text-white/40 uppercase tracking-widest italic group-hover:text-primary transition-colors">
                                    Click to expand
                                </span>
                                <span className="text-text-muted text-[10px] uppercase font-black tracking-widest">{program.intensity}</span>
                            </div>
                        )}
                    </div>
                </Card>
            </div>

            {/* Selection Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setTimeout(() => setIsSuccess(false), 300);
                }}
                title={isSuccess ? "Welcome to the Team!" : `Enroll in ${program.title}`}
            >
                {isSuccess ? (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6 shadow-accent-glow animate-pulse">
                            <Check size={40} />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2 font-outfit">Registration Successful!</h4>
                        <p className="text-text-muted mb-8">Get ready to transform. Your coach will contact you shortly.</p>
                        <Button variant="secondary" className="w-full" onClick={() => setIsModalOpen(false)}>
                            Close
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <p className="text-text-secondary text-sm mb-8">
                            Fill out the form below to start your <span className="text-primary font-bold">{program.title}</span> today.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-white/50 uppercase tracking-widest">First Name</label>
                                <input required className="w-full bg-surface-2 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-white/50 uppercase tracking-widest">Last Name</label>
                                <input required className="w-full bg-surface-2 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-white/50 uppercase tracking-widest">Email Address</label>
                            <input type="email" required className="w-full bg-surface-2 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-white/50 uppercase tracking-widest">Phone Number</label>
                            <input type="tel" required className="w-full bg-surface-2 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors" />
                        </div>

                        <div className="pt-4">
                            <Button variant="primary" className="w-full py-4 text-base shadow-accent-glow" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Processing..." : "Confirm Enrollment"}
                            </Button>
                        </div>
                    </form>
                )}
            </Modal>
        </>
    );
}
