"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bot,
    Workflow,
    Globe,
    Database,
    Cloud,
    ToyBrick,
    Cpu
} from "lucide-react";
import { useState } from "react";

const capabilities = [
    {
        id: "automation",
        title: "AI Automation",
        description: "Design and deployment of intelligent workflow automation systems that reduce manual work and increase operational efficiency.",
        icon: <Workflow className="w-6 h-6" />,
        details: {
            build: [
                "Intake automation",
                "CRM automation",
                "Email & communication workflows",
                "Lead routing",
                "Document automation",
                "Internal process automation"
            ],
            useCases: ["Clinics", "SaaS", "SMB operations", "Professional services"]
        },
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        id: "assistants",
        title: "AI Assistants",
        description: "Secure internal copilots trained on company knowledge to assist teams in real-time.",
        icon: <Bot className="w-6 h-6" />,
        details: {
            build: [
                "Knowledge base assistants",
                "SOP assistants",
                "Support copilots",
                "Sales support copilots",
                "Internal data querying assistants"
            ],
            note: "Internal AI, privacy-focused."
        },
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        id: "web-systems",
        title: "Web Systems Engineering",
        description: "High-performance, scalable web infrastructure engineered for growth.",
        icon: <Globe className="w-6 h-6" />,
        details: {
            build: [
                "Production-grade websites",
                "SaaS platforms",
                "Custom dashboards",
                "Admin panels",
                "Secure authentication systems"
            ],
            note: "Engineering-first approach, not just 'web dev'."
        },
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        id: "data-pipelines",
        title: "Data Pipelines",
        description: "Reliable data architecture for automation, reporting, and AI training.",
        icon: <Database className="w-6 h-6" />,
        details: {
            build: [
                "ETL pipelines",
                "Data synchronization",
                "API integrations",
                "Analytics pipelines",
                "Event tracking architecture"
            ],
            note: "Enterprise-grade reliability."
        },
        color: "from-yellow-500/20 to-orange-500/20"
    },
    {
        id: "cloud",
        title: "Cloud Architecture",
        description: "Secure and scalable cloud infrastructure designed for reliability and growth.",
        icon: <Cloud className="w-6 h-6" />,
        details: {
            build: [
                "AWS / GCP / Azure deployments",
                "Serverless systems",
                "Monitoring & logging",
                "Infrastructure as code",
                "Cost optimization"
            ]
        },
        color: "from-indigo-500/20 to-blue-500/20"
    },
    {
        id: "integration",
        title: "System Integration",
        description: "Seamless integration between your existing tools, platforms, and data environments.",
        icon: <ToyBrick className="w-6 h-6" />,
        details: {
            build: [
                "CRM integrations",
                "Payment gateways",
                "ERP systems",
                "Third-party APIs",
                "Automation bridges"
            ],
            note: "Connecting your entire stack."
        },
        color: "from-red-500/20 to-rose-500/20"
    },
    {
        id: "intelligent-infra",
        title: "Intelligent Infrastructure",
        description: "Complete AI-first operational backbone combining automation, data, and system architecture.",
        icon: <Cpu className="w-6 h-6" />,
        details: {
            build: [
                "Full enterprise transformation",
                "End-to-end custom ecosystem",
                "Multi-agent orchestration",
                "Unified data layer"
            ],
            note: "Premium high-ticket offering."
        },
        isPremium: true,
        color: "from-amber-500/20 to-yellow-500/20"
    }
];

export function CapabilitiesGrid() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <Section className="bg-black/95 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

            <Container>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Our Core Capabilities
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={cap.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04] h-full ${cap.isPremium || expandedId === cap.id ? 'md:col-span-2 border-primary/20 bg-primary/[0.02]' : ''}`}
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                            <div className="relative p-8 z-10">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-24 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
                                            {cap.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold font-heading mb-2 text-white group-hover:text-primary transition-colors">
                                                {cap.title}
                                            </h3>
                                            <p className="text-white/80 leading-relaxed max-w-xl">
                                                {cap.description}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setExpandedId(expandedId === cap.id ? null : cap.id)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
                                    >
                                        <span className={`block transition-transform duration-300 ${expandedId === cap.id ? 'rotate-45' : ''}`}>
                                            +
                                        </span>
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {expandedId === cap.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                            animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden border-t border-white/5"
                                        >
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                                                <div>
                                                    <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">
                                                        What We Build
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {cap.details.build.map((item) => (
                                                            <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                                                                <div className="w-1 h-1 bg-primary rounded-full" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {(cap.details.useCases || cap.details.note) && (
                                                    <div>
                                                        {cap.details.useCases && (
                                                            <>
                                                                <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">
                                                                    Use Cases
                                                                </h4>
                                                                <ul className="space-y-2 mb-4">
                                                                    {cap.details.useCases.map((item) => (
                                                                        <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                                                                            <div className="w-1 h-1 bg-white/50 rounded-full" />
                                                                            {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                        {cap.details.note && (
                                                            <div className="text-sm text-primary/80 italic p-3 bg-primary/5 rounded border border-primary/10">
                                                                {cap.details.note}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
