"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const values = [
    { title: "Precision", text: "Over hype." },
    { title: "Stability", text: "Over shortcuts." },
    { title: "Transparency", text: "Over ambiguity." },
    { title: "Long-term", text: "Partnerships." },
];

export function OurValues() {
    return (
        <Section className="bg-zinc-950/50 py-24 md:py-32">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {values.map((v, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center space-y-2"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white">{v.title}</h3>
                            <p className="text-white/40 uppercase tracking-widest text-xs">{v.text}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
