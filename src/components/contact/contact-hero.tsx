"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export function ContactHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <Container className="relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white mb-6"
                >
                    Let&#39;s Engineer <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Your Systems.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
                >
                    Tell us about your goals, current infrastructure, and operational challenges. We&#39;ll evaluate how automation and intelligent systems can support your growth.
                </motion.p>
            </Container>
        </section>
    );
}
