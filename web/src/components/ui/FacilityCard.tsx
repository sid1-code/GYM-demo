"use client";

import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import NextImage from "next/image";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface FacilityCardProps {
    title: string;
    description: string;
    details: string[];
    image: string;
    index: number;
    className?: string;
}

export function FacilityCard({ title, description, details, image, index, className }: FacilityCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer h-full">
            <Card className={cn(
                "h-full border border-white/5 bg-surface-1 transition-all duration-500 group",
                isExpanded ? "ring-2 ring-primary border-primary/50 shadow-accent-glow" : "hover:border-primary/30",
                className
            )}>
                {/* Visual Header */}
                <div className="h-48 bg-surface-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-1 to-transparent opacity-60 z-10" />
                    <NextImage
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-black text-white font-outfit leading-tight group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            className="text-primary/50 group-hover:text-primary transition-colors"
                        >
                            <ChevronRight size={24} />
                        </motion.div>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                        {description}
                    </p>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                className="overflow-hidden mt-auto"
                            >
                                <div className="pt-6 space-y-4 border-t border-white/5">
                                    {details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                                                <Check size={12} className="text-primary" />
                                            </div>
                                            <span className="font-medium">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!isExpanded && (
                        <div className="mt-auto pt-4 flex items-center justify-between">
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] italic group-hover:text-primary transition-colors">
                                View Details
                            </span>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}
