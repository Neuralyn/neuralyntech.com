"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery & System Audit",
        description: "We analyze your current infrastructure, workflows, and bottlenecks. We define clear scope and deliverables before writing a single line of code.",
    },
    {
        number: "02",
        title: "Architecture Design",
        description: "We engineer a complete blueprint of your new system. Data flow, security protocols, and integration points are mapped out for approval.",
    },
    {
        number: "03",
        title: "Build & Deployment",
        description: "Our engineering team builds your system using production-grade standards. We test rigorously and deploy with zero downtime.",
    },
    {
        number: "04",
        title: "Optimization & Monitoring",
        description: "We don't just hand it over. We monitor performance, optimize for scale, and ensure your system evolves with your business.",
    },
];

export function ProcessSteps() {
    return (
        <Section className="bg-black relative">
            <Container>
                <div className="mb-16 md:text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        How We Work
                    </h2>
                    <p className="text-white/80">
                        Clear scope. Defined deliverables. No ongoing ambiguity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-white/5 z-0">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 bg-black"
                        >
                            <div className="flex flex-col items-start md:items-center md:text-center">
                                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-bold font-heading mb-6 group hover:border-primary/50 hover:bg-primary/10 transition-colors duration-300">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 group-hover:from-primary group-hover:to-blue-400 transition-all">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
