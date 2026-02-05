import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-accent-gradient text-text-inverse shadow-accent-glow hover:scale-[1.03] hover:shadow-[0_10px_26px_rgba(182,248,41,0.35)]",
        secondary: "bg-transparent border border-[rgba(182,248,41,0.35)] text-primary hover:bg-[rgba(182,248,41,0.05)]",
        ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5"
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg"
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
