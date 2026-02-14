"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ImpactCTA() {
    return (
        <Section className="bg-background py-32 border-t border-border">
            <Container className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-12"
                >
                    Let’s Build <span className="text-muted-foreground">Your Next System.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Button size="lg" className="rounded-full px-10 py-8 text-xl bg-foreground text-background hover:bg-foreground/90" asChild>
                        <Link href="/contact" className="flex items-center gap-3">
                            Start a Conversation
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </Button>
                </motion.div>
            </Container>
        </Section>
    );
}
