"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export function PricingHero() {
    return (
        <Section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 pb-20">
            {/* Background Effects */}
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 w-full h-full bg-black" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight"
                    >
                        Transparent Pricing.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-[200%_auto] animate-shine">
                            Engineered Value.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        Our pricing reflects the complexity, reliability, and long-term performance of the systems we build.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        <Button className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-blue-200 to-white text-black hover:from-white hover:to-blue-200 transition-all font-medium shadow-[0_0_20px_rgba(191,219,254,0.5)] hover:shadow-[0_0_30px_rgba(191,219,254,0.7)]" asChild>
                            <Link href="/contact" className="flex items-center gap-2">
                                Book a Strategy Call
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </Container>

            <ScrollIndicator />
        </Section>
    );
}
