"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Workflow, FileSearch, Languages, Cloud, Bot, ArrowRight, Activity } from "lucide-react";

/**
 * Project Data
 */
const projects = [
    {
        title: "AI Automation Framework",
        category: "Workflow Engineering",
        icon: Workflow,
        overview: "A modular automation engine designed to connect CRM systems, intake forms, and internal databases into unified operational pipelines.",
        tags: ["Lead Routing", "Email Automation", "Task Orchestration"],
        positioning: "Reusable Internal Architecture",
        hoverColor: "hover:bg-blue-400/10 hover:border-blue-400/20"
    },
    {
        title: "Intelligent Document Digest",
        category: "AI Data Processing",
        icon: FileSearch,
        overview: "An AI-powered document analysis engine that extracts structured summaries from large PDF reports while preserving source references and context.",
        tags: ["Structured Digests", "Timeline Reconstruction", "Source Linking"],
        positioning: "Legal & Healthcare Compliance",
        hoverColor: "hover:bg-emerald-400/10 hover:border-emerald-400/20"
    },
    {
        title: "Multilingual Communication Layer",
        category: "AI Communication Systems",
        icon: Languages,
        overview: "A multilingual messaging infrastructure designed for organizations serving diverse populations, ensuring clarity and compliance in communication.",
        tags: ["Language Detection", "Simplified Explanation Mode", "Secure Routing"],
        positioning: "Inclusive Service Delivery",
        hoverColor: "hover:bg-violet-400/10 hover:border-violet-400/20"
    },
    {
        title: "Cloud Infrastructure Blueprint",
        category: "Cloud Architecture",
        icon: Cloud,
        overview: "A secure, scalable cloud deployment architecture designed specifically for high-load AI systems and operational dashboard hosting.",
        tags: ["Serverless Backend", "Secure API Gateway", "Cost-Optimized Scaling"],
        positioning: "Engineering Maturity",
        hoverColor: "hover:bg-cyan-400/10 hover:border-cyan-400/20"
    },
    {
        title: "AI Internal Copilot Framework",
        category: "AI Assistants",
        icon: Bot,
        overview: "A secure internal knowledge assistant framework that allows organizations to query SOPs, policies, and structured internal documentation safely.",
        tags: ["RAG Architecture", "Permission-Based Access", "Audit Logging"],
        positioning: "Enterprise Knowledge Management",
        hoverColor: "hover:bg-fuchsia-400/10 hover:border-fuchsia-400/20"
    },
    {
        title: "Predictive Operational Twin",
        category: "System Intelligence",
        icon: Activity,
        overview: "A digital twin ecosystem that uses real-time data to simulate, predict, and optimize operational workflows before execution.",
        tags: ["Simulation Engine", "Predictive Analytics", "Risk Modeling"],
        positioning: "Proactive Decision Making",
        hoverColor: "hover:bg-rose-400/10 hover:border-rose-400/20"
    }
];

export function ProjectGrid() {
    return (
        <Section className="bg-background py-24 md:py-32 border-t border-border">
            <Container>
                <div className="mb-16 md:mb-24">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Expanded Portfolio</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Strategic Infrastructure</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-8 rounded-2xl bg-card border border-border transition-all duration-300 flex flex-col h-full ${project.hoverColor}`}
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 rounded-lg bg-secondary group-hover:bg-background transition-colors border border-border">
                                    <project.icon className="w-6 h-6 text-foreground" />
                                </div>
                                <span className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-1">
                                    {project.category}
                                </span>
                            </div>

                            <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
                                {project.title}
                            </h4>

                            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                                {project.overview}
                            </p>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                                    <span>{project.positioning}</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-foreground" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
