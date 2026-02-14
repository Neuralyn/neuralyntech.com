"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Rocket, Activity, Briefcase, Building2 } from "lucide-react";

const industries = [
    {
        icon: Rocket,
        title: "Growing Startups",
        description: "Building internal systems to scale without chaos."
    },
    {
        icon: Activity,
        title: "Healthcare Teams",
        description: "Seeking automation for complex operational workflows."
    },
    {
        icon: Briefcase,
        title: "Professional Services",
        description: "Improving delivery capability and client management systems."
    },
    {
        icon: Building2,
        title: "Modernizing Organizations",
        description: "Upgrading legacy infrastructure for the AI era."
    }
];

export function TargetAudience() {
    return (
        <Section className="bg-zinc-900/30 py-24 md:py-32">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-bold text-white mb-6"
                    >
                        Who We Work With
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-6 p-8 rounded-xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
