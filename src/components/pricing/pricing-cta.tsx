"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PricingCTA() {
    return (
        <Section className="bg-black py-32 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

            <Container className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 tracking-tight">
                    Let’s Engineer Your Systems.
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button size="lg" className="rounded-full px-8 py-7 text-lg bg-white text-black hover:bg-white/90" asChild>
                        <Link href="/contact" className="flex items-center gap-2">
                            Book a Strategy Call
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-lg border-white/20 hover:bg-white/10" asChild>
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
