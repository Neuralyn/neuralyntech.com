"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const tiers = [
    {
        name: "Automation Sprint",
        description: "Best for small businesses & teams starting automation.",
        price: "Starting at $4,500",
        timeline: "2–4 weeks",
        features: [
            "Process analysis",
            "1–3 workflow automations",
            "Tool integrations",
            "Deployment & testing",
            "Basic documentation"
        ],
        cta: "Start Sprint",
        highlight: false
    },
    {
        name: "AI Systems Build",
        description: "Best for growing companies building internal AI & infrastructure.",
        price: "Starting at $12,000",
        timeline: "4–8 weeks",
        features: [
            "AI assistant development",
            "Data pipelines",
            "Web system components",
            "Cloud deployment",
            "Security setup",
            "Monitoring configuration"
        ],
        cta: "Build System",
        highlight: true,
        tag: "Most Popular"
    },
    {
        name: "Intelligent Infrastructure",
        description: "Best for organizations transforming operations.",
        price: "Starting at $30,000+",
        timeline: "8–16 weeks",
        features: [
            "Full system audit",
            "Multi-layer automation",
            "AI copilots",
            "Data architecture",
            "Cloud infrastructure",
            "System integrations",
            "Performance monitoring",
            "Ongoing optimization"
        ],
        cta: "Transform Now",
        highlight: false,
        tag: "Flagship"
    }
];

export function EngagementModels() {
    return (
        <Section className="bg-black/95 py-24 md:py-32" id="engagement-models">
            <Container>
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
                        Engagement Models
                    </h2>
                    <p className="text-lg text-white/60 leading-relaxed">
                        Choose the right engagement level for your organization's maturity and goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-2xl border transition-all duration-300 relative flex flex-col ${tier.highlight
                                ? "bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                                : "bg-white/[0.02] border-white/10 hover:border-white/20"
                                }`}
                        >
                            {tier.tag && (
                                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full backdrop-blur-md uppercase tracking-wider ${tier.highlight
                                        ? "bg-blue-500/20 border border-blue-500/30 text-blue-200"
                                        : "bg-purple-500/20 border border-purple-500/30 text-purple-200"
                                    }`}>
                                    {tier.tag}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                <p className="text-white/60 text-sm h-10">{tier.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="text-sm text-white/40 uppercase tracking-widest mb-1">Timeline</div>
                                <div className="text-white font-medium">{tier.timeline}</div>
                            </div>

                            <div className="mb-8">
                                <div className="text-sm text-white/40 uppercase tracking-widest mb-1">Investment</div>
                                <div className="text-2xl font-bold text-white">{tier.price}</div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/80">
                                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full py-6 text-lg group mt-auto ${!tier.highlight && "bg-white/5 hover:bg-white hover:text-black border border-white/10"}`}
                                variant={tier.highlight ? "default" : "outline"}
                                asChild
                            >
                                <Link href="/contact" className="flex items-center justify-center gap-2">
                                    {tier.cta}
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
