"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Layers, GitMerge, Server, Cog, ShieldCheck } from "lucide-react";

const factors = [
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Scope Complexity",
        description: "The depth of the problem we're solving and the intricacies of the workflow."
    },
    {
        icon: <GitMerge className="w-6 h-6" />,
        title: "Integration Depth",
        description: "Number of systems, APIs, and data sources that need to communicate seamlessly."
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: "Infrastructure Requirements",
        description: "Cloud architecture, database design, and scalability needs."
    },
    {
        icon: <Cog className="w-6 h-6" />,
        title: "Automation Level",
        description: "From simple triggers to multi-agent autonomous systems."
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Ongoing Support",
        description: "Level of maintenance, monitoring, and evolution required."
    }
];

export function PricingStructure() {
    return (
        <Section className="bg-black/95 relative overflow-hidden">
            <Container>
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                        How Our Pricing Works
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed">
                        We don't sell template packages. We sell engineering engagements tailored to your operational goals.
                        Our pricing is transparent and based on five core factors:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
                    {factors.map((factor, index) => (
                        <motion.div
                            key={factor.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                                {factor.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-2 text-white">
                                {factor.title}
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {factor.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
