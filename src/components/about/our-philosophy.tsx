"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const principles = [
    "Systems over tools.",
    "Structure over shortcuts.",
    "Long-term reliability over temporary solutions."
];

export function OurPhilosophy() {
    return (
        <Section className="bg-black py-24 md:py-32">
            <Container>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-heading font-bold text-white mb-8"
                        >
                            Our Philosophy
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-white/70 leading-relaxed mb-8"
                        >
                            Modern organizations are overwhelmed by fragmented tools and disconnected systems. We focus on integration, automation, and intelligent infrastructure that works as one cohesive environment.
                        </motion.p>
                    </div>

                    <div className="space-y-6">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="flex items-center gap-4"
                            >
                                <div className="h-px w-8 bg-blue-400" />
                                <span className="text-xl md:text-2xl text-white font-light">
                                    {principle}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
