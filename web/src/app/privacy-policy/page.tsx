import React from "react";
import { Card } from "@/components/ui/Card";

export default function PrivacyPolicyPage() {
    return (
        <div className="container-custom py-12 md:py-20">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                    <p className="text-text-secondary">Last updated: February 6, 2026</p>
                </div>

                <Card className="p-8 md:p-12 border-white/10 bg-[#121612]">
                    <div className="prose prose-invert max-w-none space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">1. Information We Collect</h2>
                            <p className="text-text-secondary leading-relaxed">
                                We collect information you provide directly to us, such as when you create an account, sign up for a newsletter, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">2. How We Use Your Information</h2>
                            <p className="text-text-secondary leading-relaxed">
                                We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect FitPulse and our users. We also use this information to offer you tailored content – like giving you more relevant training programs.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">3. Sharing of Information</h2>
                            <p className="text-text-secondary leading-relaxed">
                                We do not share your personal information with companies, organizations, or individuals outside of FitPulse except in the following cases: with your consent, for external processing, or for legal reasons.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">4. Security</h2>
                            <p className="text-text-secondary leading-relaxed">
                                We work hard to protect FitPulse and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">5. Changes</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.
                            </p>
                        </section>
                    </div>
                </Card>
            </div>
        </div>
    );
}
