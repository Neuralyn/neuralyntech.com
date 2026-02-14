"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function EngineeringApproach() {
    return (
        <Section className="bg-muted/30 py-24 md:py-32">
            <Container className="max-w-4xl">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                            Our Engineering <br />
                            <span className="text-muted-foreground">Approach</span>
                        </h2>
                    </div>
                    <div className="md:w-2/3 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-xl font-bold text-foreground mb-3">Systems Over Features</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We design systems around operational bottlenecks, not just feature lists. Every line of code is written with the broader architecture in mind, ensuring that the solution solves the root problem rather than treating symptoms.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-foreground mb-3">Built for Scale & Security</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Every project is architecture-driven, automation-focused, and built for scale from day one. We prioritize security and stability, ensuring that our systems can handle increased load without compromising integrity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
