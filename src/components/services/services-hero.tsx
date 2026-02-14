"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export function ServicesHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-primary/30 pb-32">


            <Container className="relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-tight text-white"
                    >
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-[200%_auto]">
                            Intelligent Systems
                        </span>
                        <br />
                        For Modern Operations
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed"
                    >
                        We design, build, and deploy AI-powered infrastructure that automates workflows, integrates systems, and enables scalable digital operations.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-blue-200 to-white text-black hover:from-white hover:to-blue-200 transition-all duration-300 shadow-[0_0_20px_rgba(191,219,254,0.5)] hover:shadow-[0_0_30px_rgba(191,219,254,0.7)]" asChild>
                            <Link href="/contact">Book a Strategy Call</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 bg-transparent backdrop-blur-sm" asChild>
                            <Link href="/services#pricing">View Pricing</Link>
                        </Button>
                    </motion.div>
                </div>
            </Container>


            <ScrollIndicator />
        </section >
    );
}
