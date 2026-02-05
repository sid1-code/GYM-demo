"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface PricingCardProps {
    price: string;
    durationLabel: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
    description?: string;
    className?: string;
}

export function PricingCard({
    price,
    durationLabel,
    ctaLabel = "Enroll Now",
    onCtaClick,
    description = "Get instant access to full training plan.",
    className
}: PricingCardProps) {
    return (
        <Card className={className ? className : "p-8 sticky top-24 border-primary/30 shadow-accent-glow/10"}>
            <h3 className="text-2xl font-bold text-white mb-2 font-outfit">Join Program</h3>
            <p className="text-text-muted mb-6">{description}</p>

            <div className="text-3xl font-bold text-white mb-8">
                {price}
                <span className="text-lg text-text-muted font-normal">/{durationLabel}</span>
            </div>

            <Button className="w-full mb-4" onClick={onCtaClick}>
                {ctaLabel}
            </Button>
            <p className="text-xs text-center text-text-muted">7-day money back guarantee</p>
        </Card>
    );
}
