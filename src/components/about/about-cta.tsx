"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
    return (
        <Section className="bg-black py-24 md:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none" />

            <Container className="relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 tracking-tight"
                >
                    Ready to Build
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400">
                        Intelligent Systems?
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
                >
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-gray-200 transition-all font-medium" asChild>
                        <Link href="/contact" className="flex items-center gap-2">
                            Book a Strategy Call
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/10 transition-all" asChild>
                        <Link href="/services">View Services</Link>
                    </Button>
                </motion.div>
            </Container>
        </Section>
    );
}
