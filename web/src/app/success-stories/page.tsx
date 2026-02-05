"use client";

import React from "react";
import Link from "next/link";
import { Star, Quote, User } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useTestimonials, usePrograms } from "@/hooks/useData";

export default function SuccessStoriesPage() {
    const { getAllTestimonials } = useTestimonials();
    const { getProgramById } = usePrograms();
    const testimonials = getAllTestimonials();

    return (
        <div className="container-custom py-12 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-outfit">Real <span className="text-primary">Results</span></h1>
                <p className="text-text-secondary">Hear from our community of athletes who have redefined their limits.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => {
                    const program = testimonial.programId ? getProgramById(testimonial.programId) : null;

                    return (
                        <Card key={testimonial.id} className="p-8 flex flex-col h-full bg-[#121612] border-white/5">
                            <div className="mb-6 text-primary">
                                <Quote size={40} className="opacity-50" />
                            </div>

                            <p className="text-lg text-text-primary italic mb-8 flex-grow leading-relaxed font-medium">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-surface-2 flex items-center justify-center text-text-muted">
                                    <User size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-white font-outfit">{testimonial.name}</div>
                                    <div className="text-xs text-text-muted">{testimonial.role}</div>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex gap-1 text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            fill={i < testimonial.rating ? "currentColor" : "none"}
                                            className={i < testimonial.rating ? "" : "text-text-muted"}
                                        />
                                    ))}
                                </div>
                                {program && (
                                    <Link href={`/programs/${program.id}`}>
                                        <span className="text-xs text-text-secondary px-2 py-1 rounded-md bg-white/5 border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer">
                                            {program.title}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
