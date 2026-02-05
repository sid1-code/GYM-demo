import Link from "next/link";
import { Dumbbell, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 py-12 border-t border-[rgba(255,255,255,0.06)]">
            <div className="container-custom grid md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                            <Dumbbell size={20} />
                        </div>
                        <span className="font-outfit font-bold text-lg text-white">
                            FIT<span className="text-primary">PULSE</span>
                        </span>
                    </Link>
                    <p className="text-text-muted max-w-sm">
                        Elevate your potential with premium training programs designed for elite performance.
                    </p>
                </div>



                <div>
                    <h4 className="font-bold text-white mb-6">Connect</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-black transition-all">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-black transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-black transition-all">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-custom mt-12 pt-8 border-t border-white/5 text-center text-text-muted text-sm">
                © {new Date().getFullYear()} FitPulse. All rights reserved.
            </div>
        </footer>
    );
}
