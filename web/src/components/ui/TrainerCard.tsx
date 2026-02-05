"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Trainer } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TrainerCardProps {
    trainer: Trainer;
    className?: string;
    variant?: "detailed" | "simple";
}

export function TrainerCard({ trainer, className, variant = "detailed" }: TrainerCardProps) {
    if (variant === "simple") {
        return (
            <Link href={`/trainers/${trainer.id}`}>
                <Card className={cn("p-4 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer", className)}>
                    <div className="w-12 h-12 rounded-full bg-surface-2 border border-white/10 overflow-hidden flex items-center justify-center text-xs text-text-muted">
                        {trainer.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold text-white font-outfit">{trainer.name}</div>
                        <div className="text-xs text-primary">{trainer.role}</div>
                    </div>
                </Card>
            </Link>
        );
    }

    return (
        <Link href={`/trainers/${trainer.id}`}>
            <Card className={cn("h-full group hover:border-primary/50 overflow-hidden text-center p-0 pb-8 bg-[#121612]", className)}>
                {/* Image Area with Bottom Gradient Overlay */}
                <div className="h-72 bg-surface-2 relative w-full mb-6 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121612] via-transparent to-transparent opacity-90 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-6xl">
                        {trainer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                </div>

                <div className="px-6 relative z-20 -mt-12">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary text-black font-bold text-sm mb-4">
                        {trainer.role}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors font-outfit">{trainer.name}</h3>
                    <p className="text-text-muted text-sm mb-6 line-clamp-2">{trainer.bio}</p>

                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {trainer.specialties.map((spec) => (
                            <span key={spec} className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-text-secondary">
                                {spec}
                            </span>
                        ))}
                    </div>

                    <Button variant="ghost" className="text-primary hover:text-white hover:bg-primary/20">View Profile</Button>
                </div>
            </Card>
        </Link>
    );
}
