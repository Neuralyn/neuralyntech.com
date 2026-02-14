"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function OurMission() {
    return (
        <Section className="bg-black py-24 md:py-32">
            <Container>
                <div className="grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-heading font-bold text-white mb-6"
                        >
                            Our Mission
                        </motion.h2>
                    </div>
                    <div className="md:col-span-8 space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-3xl lg:text-4xl leading-tight font-light text-white/90"
                        >
                            To design and deploy intelligent systems that eliminate inefficiencies, integrate complex operations, and enable organizations to scale with clarity and confidence.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="pl-6 border-l-2 border-primary/50"
                        >
                            <p className="text-xl text-white/60 italic">
                                "We believe modern businesses do not need more tools — they need better systems."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
