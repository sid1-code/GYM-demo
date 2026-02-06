import React from "react";
import { Card } from "@/components/ui/Card";

export default function TermsAndConditionsPage() {
    return (
        <div className="container-custom py-12 md:py-20">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit">
                        Terms & <span className="text-primary">Conditions</span>
                    </h1>
                    <p className="text-text-secondary">Last updated: February 6, 2026</p>
                </div>

                <Card className="p-8 md:p-12 border-white/10 bg-[#121612]">
                    <div className="prose prose-invert max-w-none space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">1. Acceptance of Terms</h2>
                            <p className="text-text-secondary leading-relaxed">
                                By accessing or using the FitPulse website and services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">2. Use License</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Permission is granted to temporarily download one copy of the materials (information or software) on FitPulse&apos;s website for personal, non-commercial transitory viewing only.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">3. Disclaimer</h2>
                            <p className="text-text-secondary leading-relaxed">
                                The materials on FitPulse&apos;s website are provided on an &apos;as is&apos; basis. FitPulse makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">4. Limitations</h2>
                            <p className="text-text-secondary leading-relaxed">
                                In no event shall FitPulse or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FitPulse&apos;s website.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white font-outfit">5. Governing Law</h2>
                            <p className="text-text-secondary leading-relaxed">
                                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                            </p>
                        </section>
                    </div>
                </Card>
            </div>
        </div>
    );
}
