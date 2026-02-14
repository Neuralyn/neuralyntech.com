"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const leaders = [
    {
        name: "Nithin Rajulapati",
        role: "Founder & CEO",
        bio: "Specializing in AI infrastructure, distributed systems, and scalable automation architecture."
    }
];

export function Leadership() {
    return (
        <Section className="bg-black py-24 md:py-32">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-bold text-white mb-12"
                    >
                        Leadership
                    </motion.h2>

                    <div className="grid gap-12">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="border-l-4 border-white/20 pl-8 py-2"
                            >
                                <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                                <p className="text-blue-400 font-medium mb-4">{leader.role}</p>
                                <p className="text-white/70 max-w-2xl leading-relaxed">
                                    {leader.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
