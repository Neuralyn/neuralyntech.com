"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Search, Phone, FileCode, Rocket, ArrowRight } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "System Analysis",
        subtitle: "Requirements Review",
        description: "We ingest your requirements and analyze fit against our capabilities.",
        icon: Search,
        status: "Input"
    },
    {
        id: "02",
        title: "Strategy API",
        subtitle: "Consultation Call",
        description: "A synchronous data exchange to align on goals and infrastructure.",
        icon: Phone,
        status: "Process"
    },
    {
        id: "03",
        title: "Architecture Map",
        subtitle: "Scope Assessment",
        description: "We compile the technical specifications and system design.",
        icon: FileCode,
        status: "Compute"
    },
    {
        id: "04",
        title: "Execution Plan",
        subtitle: "Proposal Delivery",
        description: "Output: Clear deliverables, timeline, and investment structure.",
        icon: Rocket,
        status: "Output"
    }
];

export function ProcessTimeline() {
    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        Engagement Protocol
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        System Activation Flow
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        From initial signal to full system deployment.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[47px] left-0 right-0 h-2 overflow-hidden pointer-events-none">
                        {/* Static Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-1/2 mx-auto" />
                        </div>

                        {/* Moving Data Packet */}
                        <motion.div
                            initial={{ left: "-20%" }}
                            animate={{ left: "120%" }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 -translate-y-1/2 w-48 h-[2px] bg-blue-500 shadow-[0_0_10px_#3b82f6] blur-[0.5px]"
                        />
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="group relative"
                            >
                                {/* Connector Dot (Desktop) */}
                                <div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 items-center justify-center z-20">
                                    <div className="w-3 h-3 bg-black border-2 border-white/20 rounded-full group-hover:border-blue-500 transition-colors" />
                                </div>

                                {/* Card */}
                                <div className="pt-0 md:pt-24 relative h-full">
                                    {/* Mobile Connector Line */}
                                    <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-white/10 -z-10 last:bottom-auto last:h-1/2" />

                                    <div className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 p-6 md:p-0 rounded-2xl md:rounded-none bg-white/5 md:bg-transparent border md:border-none border-white/10 md:text-center md:hover:bg-transparent hover:bg-white/[0.08] transition-colors duration-300">

                                        {/* Icon Node */}
                                        <div className="relative shrink-0">
                                            <div className="w-16 h-16 rounded-xl bg-black border border-white/10 flex items-center justify-center shadow-2xl relative z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500">
                                                <step.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />

                                                {/* Corner Accents */}
                                                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 group-hover:border-blue-500/50 transition-colors" />
                                                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 group-hover:border-blue-500/50 transition-colors" />
                                                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 group-hover:border-blue-500/50 transition-colors" />
                                                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-blue-500/50 transition-colors" />
                                            </div>
                                        </div>

                                        <div className="pt-2 md:mt-8">
                                            <div className="flex items-center gap-2 mb-2 md:justify-center">
                                                <span className="text-xs font-mono text-blue-400">0{index + 1}</span>
                                                <span className="text-[10px] uppercase tracking-wider text-white/30 border border-white/10 px-1.5 rounded bg-white/5">{step.status}</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                                            <div className="text-sm font-medium text-white/50 mb-3 uppercase tracking-wide">{step.subtitle}</div>

                                            <p className="text-sm text-white/60 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Tech Decoration */}
                    <div className="mt-20 border-t border-white/5 pt-8 flex justify-between items-center text-[10px] text-white/20 font-mono uppercase tracking-widest hidden md:flex">
                        <span>SYS_READY</span>
                        <div className="flex gap-1">
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className={`w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-blue-500/50' : 'bg-white/10'}`} />
                            ))}
                        </div>
                        <span>V.2.0.4</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}
