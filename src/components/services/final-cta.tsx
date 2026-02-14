"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export function FinalCTA() {
    return (
        <Section className="py-24 md:py-32 bg-gradient-to-b from-black to-blue-950/20">
            <Container>
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
                        Ready to Engineer <br />
                        <span className="text-primary">Your Infrastructure?</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Button size="lg" className="h-14 px-10 text-lg rounded-full" asChild>
                            <Link href="/contact">Book a Strategy Call</Link>
                        </Button>
                        <Button size="lg" variant="ghost" className="h-14 px-10 text-lg rounded-full hover:bg-white/5" asChild>
                            <Link href="/services#pricing">View Pricing</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
