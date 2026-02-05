"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    variant?: "solid" | "glass";
    hoverEffect?: boolean;
}

export function Card({
    className,
    children,
    variant = "solid",
    hoverEffect = true,
    ...props
}: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={hoverEffect ? { y: -8, transition: { duration: 0.2 } } : {}}
            className={cn(
                "relative rounded-[20px] overflow-hidden border border-border transition-all duration-300 group",
                variant === "solid" ? "bg-[#121612]" : "bg-surface-1 backdrop-blur-md",
                hoverEffect && "hover:border-[rgba(182,248,41,0.45)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.65)]",
                className
            )}
            {...props}
        >
            {/* Top Edge Glow */}
            <div className="absolute top-0 left-0 w-full h-[120px] bg-card-glow opacity-0 transition-opacity duration-300 group-hover:opacity-30 pointer-events-none" />

            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </motion.div>
    );
}
