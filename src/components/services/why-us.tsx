"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ShieldCheck, Zap, Lock, MessageSquare, Server } from "lucide-react";

const reasons = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "AI-First Engineering",
        description: "We don't bolt AI on. We build systems where AI is the core engine.",
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: "Production Reliability",
        description: "Systems built to handle real scale. No fragile prototypes.",
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: "Security-First Thinking",
        description: "Enterprise-grade data protection and privacy from day one.",
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "Clear Communication",
        description: "Direct access to engineers. Regular updates. No jargon.",
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Long-Term Stability",
        description: "Infrastructure designed to last and evolve with you.",
    },
];

export function WhyUs() {
    return (
        <Section>
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                        Why Neuralyn Tech?
                    </h2>
                    <p className="text-white/80">
                        Engineering excellence, not agency fluff.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-primary mb-6">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
