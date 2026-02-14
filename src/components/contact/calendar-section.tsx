"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";

export function CalendarSection() {
    return (
        <section className="py-24 bg-zinc-950/50 border-t border-white/5">
            <Container className="text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold text-white">Prefer to Book Directly?</h2>

                    <Button size="lg" className="h-16 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all" asChild>
                        <Link href="https://calendly.com/neuralyn-ai/investor-meeting" target="_blank">
                            <Calendar className="mr-2 w-5 h-5" />
                            Book a Strategy Call
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
