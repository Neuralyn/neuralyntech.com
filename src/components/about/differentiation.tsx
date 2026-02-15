"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Cpu, Layers, ShieldCheck, Focus } from "lucide-react";

const differentiators = [
    {
        icon: Layers,
        title: "Engineering-First Approach",
        description: "We design systems from architecture outward - not surface-level automation hacks."
    },
    {
        icon: Cpu,
        title: "AI-Integrated From Day One",
        description: "We build with AI embedded at the infrastructure level, not bolted on later."
    },
    {
        icon: ShieldCheck,
        title: "Security & Stability Focus",
        description: "Every system is built with long-term performance and reliability in mind."
    },
    {
        icon: Focus, // Using Focus as a proxy for Operational Clarity/Scope
        title: "Operational Clarity",
        description: "We simplify complexity. Clear scope. Clear deliverables. Clear timelines."
    }
];

export function Differentiation() {
    return (
        <Section className="bg-zinc-950/50 py-24 md:py-32">
            <Container>
                <div className="mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        What Makes Neuralyn Different
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
