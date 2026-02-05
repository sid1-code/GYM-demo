"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Dumbbell, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Plans" },
    { href: "/facilities", label: "Facilities" },
    { href: "/success-stories", label: "Success Stories" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [isJoinSuccess, setIsJoinSuccess] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const handleJoinSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsJoinSuccess(true);
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    scrolled || isOpen ? "bg-[#0B0E0C]/85 backdrop-blur-md py-4 border-white/5" : "bg-transparent py-6 border-transparent"
                )}
            >
                <div className="container-custom flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Dumbbell size={24} />
                        </div>
                        <span className="font-outfit font-bold text-xl tracking-tight text-white">
                            FIT<span className="text-primary">PULSE</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-white",
                                    pathname === link.href ? "text-primary" : "text-text-secondary"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button size="sm" onClick={() => setIsJoinModalOpen(true)}>Join Now</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#0B0E0C] border-b border-border p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-lg font-medium",
                                    pathname === link.href ? "text-primary" : "text-text-secondary"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="w-full" onClick={() => setIsJoinModalOpen(true)}>Join Now</Button>
                    </div>
                )}
            </nav>

            {/* Global Join Modal */}
            <Modal
                isOpen={isJoinModalOpen}
                onClose={() => {
                    setIsJoinModalOpen(false);
                    setIsJoinSuccess(false);
                }}
                title={isJoinSuccess ? "Success" : "Join FitPulse"}
            >
                {isJoinSuccess ? (
                    <div className="text-center space-y-6">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                            <Check size={32} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-bold text-white">Registration Complete!</h4>
                            <p className="text-text-secondary">
                                Welcome to the elite 1%. Our team will contact you shortly with your membership details.
                            </p>
                        </div>
                        <Button className="w-full" onClick={() => setIsJoinModalOpen(false)}>
                            Got it
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleJoinSubmit} className="space-y-4">
                        <p className="text-text-secondary text-sm mb-4">
                            Enter your details to start your journey with FitPulse.
                        </p>
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
                        <Button type="submit" className="w-full mt-4">Create Account</Button>
                    </form>
                )}
            </Modal>
        </>
    );
}
