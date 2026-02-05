"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { programs, trainers } from "@/lib/data";

interface BreadcrumbsProps {
    className?: string;
    customLabels?: Record<string, string>;
}

export function Breadcrumbs({ className, customLabels }: BreadcrumbsProps) {
    const pathname = usePathname();
    const pathNodes = pathname.split("/").filter((node) => node !== "");

    const crumbs = pathNodes.map((node, index) => {
        const href = "/" + pathNodes.slice(0, index + 1).join("/");
        let label = node.charAt(0).toUpperCase() + node.slice(1).replace(/-/g, " ");

        // Handle dynamic IDs (Programs/Trainers)
        if (pathNodes[index - 1] === "programs") {
            const program = programs.find((p) => p.id === node);
            if (program) label = program.title;
        } else if (pathNodes[index - 1] === "trainers") {
            const trainer = trainers.find((t) => t.id === node);
            if (trainer) label = trainer.name;
        }

        // Apply custom labels if provided
        if (customLabels && customLabels[node]) {
            label = customLabels[node];
        }

        return { label, href, active: index === pathNodes.length - 1 };
    });

    if (crumbs.length === 0) return null;

    return (
        <nav className={cn("flex items-center gap-2 text-sm mb-8", className)} aria-label="Breadcrumb">
            <Link
                href="/"
                className="text-text-muted hover:text-primary transition-colors flex items-center gap-1"
            >
                <Home size={14} />
            </Link>

            {crumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-text-muted" />
                    {crumb.active ? (
                        <span className="text-primary font-medium" aria-current="page">
                            {crumb.label}
                        </span>
                    ) : (
                        <Link
                            href={crumb.href}
                            className="text-text-muted hover:text-text-primary transition-colors"
                        >
                            {crumb.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
