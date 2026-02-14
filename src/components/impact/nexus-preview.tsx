"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    Activity,
    Bot,
    Cloud,
    Cpu,
    Database,
    Globe,
    Lock,
    ToyBrick,
    Zap,
} from "lucide-react";

const spring = { type: "spring" as const, stiffness: 120, damping: 24 };

// CSS-only hover: smooth, GPU-accelerated transform so animation never feels stuck
const cardHoverClass =
    "h-full w-full origin-center will-change-transform transition-[transform] duration-500 [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:scale-[1.015]";

export function NexusPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0.05, 0.5], [0.96, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [0.85, 1]);
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
    const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

    // Entrance: opacity + scale only (no y) so scroll-based parallax doesn't conflict and cause flicker
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.97 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                ...spring,
                delay: i * 0.06,
            },
        }),
    };

    return (
        <motion.div
            ref={containerRef}
            style={{ scale, opacity }}
            className="w-full max-w-6xl mx-auto"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-4 gap-4 md:gap-6 aspect-[4/5] md:aspect-[16/12]">

                {/* 1. Main Feature - Nexus Intelligence */}
                <motion.div
                    style={{ y: y1 }}
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-2 row-span-2 bg-black rounded-[2rem] border border-white/10 relative overflow-hidden group/card-nexus hover:border-white/15 transition-colors duration-500"
                >
                    <div className={cardHoverClass + " relative p-8"}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent opacity-50 group-hover/card-nexus:opacity-100 transition-opacity duration-700" />
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="space-y-2">
                            <h3 className="text-3xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                                Nexus Intelligence
                            </h3>
                            <p className="text-zinc-400 font-medium">Predictive Operations Model</p>
                        </div>
                        <div className="w-full h-32 md:h-48 flex items-end gap-1">
                            {[40, 70, 50, 90, 60, 80, 95, 85, 65, 75, 55, 80, 90, 60, 100].map((h, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-400 rounded-t-sm"
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                    </div>
                    </div>
                </motion.div>

                {/* 2. Stat Card - Processing Speed */}
                <motion.div
                    style={{ y: y2 }}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-1 row-span-1 h-full bg-zinc-900 rounded-[2rem] border border-white/10 flex flex-col justify-center items-center text-center relative overflow-hidden group/card-latency hover:border-white/15 transition-colors duration-500"
                >
                    <div className={cardHoverClass + " relative p-6 flex flex-col justify-center items-center"}>
                    <div
                        className="absolute top-0 right-0 w-24 h-24 bg-green-500/20 rounded-full blur-2xl -mr-10 -mt-10 group-hover/card-latency:scale-110 group-hover/card-latency:opacity-40 transition-transform duration-500"
                    />
                    <Zap className="w-10 h-10 text-green-400 mb-2" />
                    <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter">0.4ms</div>
                    <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-1">Latency</div>
                    </div>
                </motion.div>

                {/* 3. Security Module */}
                <motion.div
                    style={{ y: y3 }}
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-1 row-span-1 bg-zinc-900 rounded-[2rem] border border-white/10 flex flex-col justify-between relative overflow-hidden group/card-encrypted hover:border-white/15 transition-colors duration-500 h-full"
                >
                    <div className={cardHoverClass + " relative p-6 flex flex-col justify-between"}>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover/card-encrypted:opacity-100 transition-opacity duration-500" />
                    <div className="flex justify-between items-start relative z-10">
                        <Lock className="w-8 h-8 text-indigo-400" />
                        <span className="px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">
                            L4 SECURITY
                        </span>
                    </div>
                    <div className="relative z-10">
                        <div className="text-xl font-bold text-white mb-1">Encrypted</div>
                        <div className="text-xs text-zinc-400">End-to-End Protection</div>
                    </div>
                    </div>
                </motion.div>

                {/* 4. AI Core Visualization */}
                <motion.div
                    style={{ y: y2 }}
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-1 row-span-2 bg-black rounded-[2rem] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center text-center group/card-neural hover:border-white/15 transition-colors duration-500"
                >
                    <div className={cardHoverClass + " relative p-6 flex flex-col items-center justify-center"}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover/card-neural:opacity-100 duration-700 transition-opacity" />
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/5 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-blue-500 animate-[spin_3s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border-b-4 border-r-4 border-violet-500 animate-[spin_4s_linear_infinite_reverse]" />
                        <Cpu className="w-12 h-12 text-white/80" />
                    </div>
                    <h4 className="mt-6 text-xl font-bold text-white">Neural Core</h4>
                    <p className="text-xs text-zinc-500 mt-1">Self-Optimizing</p>
                    </div>
                </motion.div>

                {/* 5. Data throughput */}
                <motion.div
                    style={{ y: y1 }}
                    custom={4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-1 row-span-1 bg-zinc-900 rounded-[2rem] border border-white/10 flex flex-col justify-center items-center text-center group/card-throughput hover:border-white/15 transition-colors duration-500"
                >
                    <div className={cardHoverClass + " relative p-6 flex flex-col justify-center items-center"}>
                    <h3 className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-1">Throughput</h3>
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
                        10TB+
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">Daily Processing</p>
                    </div>
                </motion.div>

                {/* 6. Global Nodes */}
                <motion.div
                    style={{ y: y3 }}
                    custom={5}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-2 md:col-span-1 row-span-1 h-full bg-zinc-900 rounded-[2rem] border border-white/10 flex flex-col justify-center relative overflow-hidden group/card-nodes hover:border-white/15 transition-colors duration-500"
                >
                    <div className={cardHoverClass + " relative p-6 flex flex-col justify-center"}>
                    <div className="absolute right-0 bottom-0 opacity-10 group-hover/card-nodes:opacity-20 transition-opacity pointer-events-none">
                        <Globe size={120} />
                    </div>
                    <div className="z-10">
                        <div className="text-5xl font-bold text-white">42</div>
                        <div className="text-sm text-zinc-400 font-medium">Global Nodes</div>
                    </div>
                    </div>
                </motion.div>

                {/* 7. Uptime */}
                <motion.div
                    style={{ y: y2 }}
                    custom={6}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-2 md:col-span-1 row-span-1 h-full bg-zinc-900 rounded-[2rem] border border-white/10 hidden lg:flex flex-col justify-center group/card-uptime hover:border-white/15 transition-colors duration-500"
                >
                    <div className={cardHoverClass + " relative p-6 flex flex-col justify-center w-full"}>
                    <div className="flex items-center gap-3 mb-2">
                        <Activity className="text-green-400" size={24} />
                        <span className="text-2xl font-bold text-white">99.99%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <motion.div
                            className="bg-green-500 h-full rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "99.9%" }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.2, ...spring }}
                        />
                    </div>
                    <div className="text-xs text-zinc-500 mt-2 font-bold uppercase">System Uptime</div>
                    </div>
                </motion.div>

                {/* 8. AI Assistants */}
                <motion.div
                    style={{ y: y4 }}
                    custom={7}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-1 row-span-1 bg-zinc-900 rounded-[2rem] border border-white/10 flex flex-col justify-between relative overflow-hidden group/card-assistants hover:border-white/15 transition-colors duration-500 h-full"
                >
                    <div className={cardHoverClass + " relative p-6 flex flex-col justify-between"}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 opacity-0 group-hover/card-assistants:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex justify-between items-start">
                        <Bot className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="relative z-10 mt-auto">
                        <div className="text-lg font-bold text-white mb-1">AI Assistants</div>
                        <div className="text-xs text-zinc-400">Internal Copilots & Knowledge Base</div>
                    </div>
                    </div>
                </motion.div>

                {/* 9. Data Pipelines */}
                <motion.div
                    style={{ y: y4 }}
                    custom={8}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-1 row-span-1 bg-zinc-900 rounded-[2rem] border border-white/10 flex flex-col justify-between relative overflow-hidden group/card-pipelines hover:border-white/15 transition-colors duration-500 h-full"
                >
                    <div className={cardHoverClass + " relative p-6 flex flex-col justify-between"}>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 opacity-0 group-hover/card-pipelines:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex justify-between items-start">
                        <Database className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="relative z-10 mt-auto">
                        <div className="text-lg font-bold text-white mb-1">Data Pipelines</div>
                        <div className="text-xs text-zinc-400">ETL, APIs & Analytics</div>
                    </div>
                    </div>
                </motion.div>

                {/* 10. Cloud Architecture */}
                <motion.div
                    style={{ y: y4 }}
                    custom={9}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-1 row-span-1 bg-zinc-900 rounded-[2rem] border border-white/10 flex flex-col justify-between relative overflow-hidden group/card-cloud hover:border-white/15 transition-colors duration-500 h-full"
                >
                    <div className={cardHoverClass + " relative p-6 flex flex-col justify-between"}>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/5 opacity-0 group-hover/card-cloud:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex justify-between items-start">
                        <Cloud className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div className="relative z-10 mt-auto">
                        <div className="text-lg font-bold text-white mb-1">Cloud</div>
                        <div className="text-xs text-zinc-400">AWS / GCP / Azure</div>
                    </div>
                    </div>
                </motion.div>

                {/* 11. System Integration */}
                <motion.div
                    style={{ y: y4 }}
                    custom={10}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px" }}
                    variants={cardVariants}
                    className="col-span-1 row-span-1 bg-zinc-900 rounded-[2rem] border border-white/10 flex flex-col justify-between relative overflow-hidden group/card-integration hover:border-white/15 transition-colors duration-500 h-full"
                >
                    <div className={cardHoverClass + " relative p-6 flex flex-col justify-between"}>
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-red-500/5 opacity-0 group-hover/card-integration:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex justify-between items-start">
                        <ToyBrick className="w-8 h-8 text-rose-400" />
                    </div>
                    <div className="relative z-10 mt-auto">
                        <div className="text-lg font-bold text-white mb-1">Integration</div>
                        <div className="text-xs text-zinc-400">CRM, ERP & APIs</div>
                    </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
}
