"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export function AboutHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-white/30">
            {/* Subtle Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <Container className="relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white"
                    >
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Systems</span>
                        <br />
                        <span className="text-white/50">That Think.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Neuralyn Tech is an AI infrastructure and automation studio focused on building intelligent, scalable, and secure digital systems for modern organizations.
                    </motion.p>
                </div>
            </Container>

            <ScrollIndicator />
        </section>
    );
}
