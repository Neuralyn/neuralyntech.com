"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

const audience = [
    "Growing startups",
    "Healthcare organizations",
    "Professional service firms",
    "SMBs scaling operations",
    "Enterprise departments"
];

export function AudienceSection() {
    return (
        <Section className="bg-white/[0.02]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                            Built for Teams That Need More Than Tools
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed mb-8">
                            We don't sell software subscriptions. We sell operational transformation for companies that have outgrown off-the-shelf solutions.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                        <ul className="space-y-6">
                            {audience.map((item, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="text-lg md:text-xl font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
