"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Calendar, FileText, Globe, MessageSquare, ShieldCheck, Database, BrainCircuit, HeartPulse } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const platforms = [
    {
        name: "Neuralyn Health",
        url: "https://www.neuralyn.health/",
        category: "AI Healthcare Infrastructure",
        status: "Active Platform",
        description: "An AI-driven healthcare support platform designed to improve patient coordination, streamline clinic operations, and enhance engagement — without performing medical diagnosis.",
        color: "from-blue-500/20 to-cyan-500/20",
        capabilities: [
            { icon: Calendar, text: "AI Appointment Automation" },
            { icon: MessageSquare, text: "Multilingual Engagement" },
            { icon: FileText, text: "Document Organization" },
            { icon: Activity, text: "Structured Reporting" }
        ],
        impact: "Reducing administrative load in healthcare while improving patient follow-through."
    },
    {
        name: "HealMind",
        url: "https://healmind.neuralyn.health/",
        category: "AI Mental Wellness Platform",
        status: "Active Platform",
        description: "An AI-powered mental wellness and therapy companion providing 24/7 emotional support, CBT-based therapy modules, and personalized guidance for anxiety, stress, and sleep improvement.",
        color: "from-indigo-500/20 to-purple-500/20",
        capabilities: [
            { icon: BrainCircuit, text: "CBT-Based Therapy" },
            { icon: HeartPulse, text: "24/7 Emotional Support" },
            { icon: Activity, text: "Mood Tracking & Insights" },
            { icon: ShieldCheck, text: "Privacy-First Architecture" }
        ],
        impact: "Democratizing access to mental health support with scalable, always-on AI companionship."
    }
];

export function FeaturedPlatforms() {
    return (
        <Section className="bg-background py-24 md:py-32">
            <Container>
                <div className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Primary Platforms</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Featured Engineering</h3>
                </div>

                <div className="space-y-32">
                    {platforms.map((platform, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="group relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                        >
                            {/* Visual Side */}
                            <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-gradient-to-br ${platform.color} group-hover:border-primary/20 transition-colors`}>
                                <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

                                {/* Abstract UI Representation */}
                                <div className="absolute inset-8 border border-border rounded-xl bg-card/50 backdrop-blur-md p-6 flex flex-col gap-4 shadow-lg">
                                    <div className="w-1/3 h-4 rounded-full bg-foreground/10" />
                                    <div className="flex gap-4">
                                        <div className="w-1/4 h-24 rounded-lg bg-foreground/5" />
                                        <div className="flex-1 space-y-3">
                                            <div className="w-full h-2 rounded bg-foreground/5" />
                                            <div className="w-full h-2 rounded bg-foreground/5" />
                                            <div className="w-2/3 h-2 rounded bg-foreground/5" />
                                        </div>
                                    </div>
                                    <div className="mt-auto flex justify-between items-center">
                                        <div className="w-8 h-8 rounded-full bg-foreground/10" />
                                        <div className="w-24 h-8 rounded-full bg-foreground/5" />
                                    </div>
                                </div>

                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div className="px-3 py-1 rounded-full bg-background/50 backdrop-blur text-xs font-mono text-muted-foreground border border-border">
                                        {platform.status}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="space-y-8">
                                <div>
                                    <div className="text-primary font-mono text-sm mb-2">{platform.category}</div>
                                    <h4 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">{platform.name}</h4>
                                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                                        {platform.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {platform.capabilities.map((cap, i) => (
                                        <div key={i} className="flex items-center gap-3 text-foreground/80">
                                            <div className="p-2 rounded-lg bg-secondary border border-border">
                                                <cap.icon className="w-4 h-4 text-foreground" />
                                            </div>
                                            <span className="text-sm font-medium">{cap.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-border">
                                    <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Operational Impact</h5>
                                    <p className="text-foreground/90">{platform.impact}</p>
                                </div>

                                <Button asChild variant="outline" className="rounded-full border-border hover:bg-foreground hover:text-background transition-all group/btn">
                                    <Link href={platform.url} target="_blank">
                                        Visit Platform <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </Button>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
