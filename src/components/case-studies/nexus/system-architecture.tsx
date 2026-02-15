"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Zap, ArrowRight, Lock, Server, Share2 } from "lucide-react";

export function SystemArchitecture() {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
                        The Neural Architecture
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        A real-time, self-optimizing flow that transforms raw data into intelligent action with millisecond latency.
                    </p>
                </div>

                {/* Flow Diagram */}
                <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

                    {/* Step 1: Ingest */}
                    <div className="relative group">
                        <div className="relative bg-black border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Database size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">1. Ingest</h3>
                            </div>
                            <ul className="space-y-3 text-zinc-400 text-sm">
                                <li className="flex items-center gap-2">
                                    <Server size={14} /> Multi-source Aggregation
                                </li>
                                <li className="flex items-center gap-2">
                                    <Lock size={14} /> End-to-End Encryption
                                </li>
                                <li className="flex items-center gap-2">
                                    <Share2 size={14} /> Real-time Stream APIs
                                </li>
                            </ul>

                            {/* Animated Connection Line (Mobile: Down, Desktop: Right) */}
                            <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 z-20">
                                <ArrowRight className="text-zinc-600 animate-pulse" />
                            </div>
                            <div className="lg:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 z-20">
                                <ArrowDownMobile />
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Process (The Core) */}
                    <div className="relative group scale-105">
                        <div className="relative bg-zinc-900 border border-white/20 rounded-2xl p-10 shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 border border-white/10 px-4 py-1 rounded-full text-xs font-mono text-zinc-400 uppercase tracking-widest">
                                Processing
                            </div>
                            <div className="flex flex-col items-center text-center gap-6">
                                <div className="relative w-24 h-24 flex items-center justify-center">
                                    <div className="absolute inset-0 border-t-4 border-l-4 border-white/80 rounded-full animate-[spin_3s_linear_infinite]" />
                                    <div className="absolute inset-2 border-b-4 border-r-4 border-zinc-500 rounded-full animate-[spin_3s_linear_infinite_reverse]" />
                                    <Cpu size={40} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Neural Core</h3>
                                    <p className="text-zinc-400 text-sm">
                                        Pattern Recognition <br />
                                        Anomaly Detection <br />
                                        Predictive Modeling
                                    </p>
                                </div>
                            </div>

                            {/* Animated Connection Line */}
                            <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 z-20">
                                <ArrowRight className="text-zinc-600 animate-pulse" />
                            </div>
                            <div className="lg:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 z-20">
                                <ArrowDownMobile />
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Act */}
                    <div className="relative group">
                        <div className="relative bg-black border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">3. Action</h3>
                            </div>
                            <ul className="space-y-3 text-zinc-400 text-sm">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Automated Triggers
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Smart Alerts
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> API Webhooks
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ArrowDownMobile() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 animate-bounce">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
        </svg>
    )
}
