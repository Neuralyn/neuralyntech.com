"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export function ImpactHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background selection:bg-primary/30 pt-20">
            {/* Subtle Grid Background - Inverted for light mode visibility */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-foreground"
                    >
                        Systems We’ve
                        <br />
                        <span className="text-muted-foreground">Engineered.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        From AI-powered healthcare operations to intelligent automation and infrastructure engineering — we design systems that solve real operational problems.
                    </motion.p>
                </div>
            </Container>

            <ScrollIndicator />
        </section>
    );
}
