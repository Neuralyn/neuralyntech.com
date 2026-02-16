"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { GlobeVisualization } from "@/components/ui/globe-visualization";

const regions = [
    { name: "United States", nodes: "1,240 Nodes", latency: "12ms" },
    { name: "United Kingdom", nodes: "850 Nodes", latency: "18ms" },
    { name: "India", nodes: "2,100 Nodes", latency: "22ms" },
    { name: "Canada", nodes: "420 Nodes", latency: "15ms" },
    { name: "Mexico", nodes: "310 Nodes", latency: "24ms" },
];

export function GlobalNetwork() {
    return (
        <section className="py-32 px-4 md:px-12 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                                Global Neural Network
                            </h2>
                            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                Nexus AI operates on a decentralized mesh of high-performance compute nodes, ensuring ultra-low latency decision banking across continents.
                            </p>

                            <div className="space-y-4">
                                {regions.map((region, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="font-bold">{region.name}</span>
                                        </div>
                                        <div className="flex gap-8 text-sm text-zinc-500">
                                            <span>{region.nodes}</span>
                                            <span className="font-mono">{region.latency}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative h-[400px] md:h-[600px] bg-zinc-900/30 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                        <GlobeVisualization />
                    </div>
                </div>
            </div>
        </section>
    );
}
