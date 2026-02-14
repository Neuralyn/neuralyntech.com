"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Landmark, GraduationCap, Utensils, ArrowRight, BarChart3, ShieldCheck, Users, Clock } from "lucide-react";

const industries = [
    {
        id: "retail",
        label: "Small Business",
        icon: ShoppingBag,
        color: "blue",
        title: "Autonomous Inventory Management",
        description: "Nexus AI predicts demand spikes and automates restocking orders 48 hours before stockouts occur.",
    },
    {
        id: "banking",
        label: "Banking",
        icon: Landmark,
        color: "green",
        title: "Real-time Fraud Detection",
        description: "Analyzing 50,000+ transactions per second to block fraudulent activities with 99.9% accuracy.",
    },
    {
        id: "education",
        label: "Education",
        icon: GraduationCap,
        color: "amber",
        title: "Adaptive Learning Paths",
        description: "Dynamic curriculum adjustment based on student performance and engagement metrics in real-time.",
    },
    {
        id: "dining",
        label: "Dining",
        icon: Utensils,
        color: "rose",
        title: "Predictive Table Turnover",
        description: "Optimizing reservation slots and staff allocation by forecasting Friday night rush hours.",
    },
];

const colorMap = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
    green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
    rose: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20" },
};

export function IndustryModules() {
    const [activeTab, setActiveTab] = useState(0);
    const activeIndustry = industries[activeTab];
    const activeColors = colorMap[activeIndustry.color as keyof typeof colorMap];

    return (
        <section className="py-32 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
                        Industry Applications
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Tailored neural networks for specific sector challenges.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {industries.map((industry, index) => (
                        <button
                            key={industry.id}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${activeTab === index
                                ? "bg-white text-black border-white"
                                : "bg-zinc-900 text-zinc-400 border-white/10 hover:border-white/30"
                                }`}
                        >
                            <industry.icon size={18} />
                            <span className="font-medium">{industry.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="max-w-6xl mx-auto bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 min-h-[500px] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid md:grid-cols-2 gap-12 items-center h-full"
                        >
                            {/* Text Content */}
                            <div>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${activeColors.bg} ${activeColors.text} text-xs font-bold uppercase tracking-widest mb-6 border ${activeColors.border}`}>
                                    <activeIndustry.icon size={14} />
                                    {activeIndustry.label} Architecture
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    {activeIndustry.title}
                                </h3>
                                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                                    {activeIndustry.description}
                                </p>
                                <ul className="space-y-4">
                                    {activeTab === 0 && <RetailFeatures />}
                                    {activeTab === 1 && <BankingFeatures />}
                                    {activeTab === 2 && <EducationFeatures />}
                                    {activeTab === 3 && <DiningFeatures />}
                                </ul>
                            </div>

                            {/* Visual/Diagram Area */}
                            <div className="relative h-[400px] bg-black rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center perspective-1000">
                                {/* Background Grid */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                                {activeTab === 0 && <RetailVisual />}
                                {activeTab === 1 && <BankingVisual />}
                                {activeTab === 2 && <EducationVisual />}
                                {activeTab === 3 && <DiningVisual />}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

// --- Feature Lists ---

function RetailFeatures() {
    return (
        <>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> SKU-level demand forecasting</li>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Automatic supplier PO generation</li>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Shrinkage detection algorithms</li>
        </>
    )
}

function BankingFeatures() {
    return (
        <>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> <span className="font-mono">iso8583</span> transaction parsing</li>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Behavioral biometrics analysis</li>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Cross-border sanctions screening</li>
        </>
    )
}

function EducationFeatures() {
    return (
        <>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Real-time attention tracking</li>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Knowledge gap identification</li>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Personalized assignment generation</li>
        </>
    )
}

function DiningFeatures() {
    return (
        <>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full" /> Kitchen load balancing</li>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full" /> Ingredient spoilage prediction</li>
            <li className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full" /> Dynamic seating optimization</li>
        </>
    )
}

// --- Visualizations ---

function RetailVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* 3D Representation of Shelves */}
            <div className="relative w-48 h-64 bg-zinc-900 border border-white/20 rounded-lg transform rotate-y-12 rotate-x-6 shadow-2xl flex flex-col justify-end p-2 gap-2">
                <div className="h-2 w-full bg-zinc-800 rounded-sm" />
                <div className="h-2 w-full bg-zinc-800 rounded-sm" />
                <div className="h-2 w-full bg-zinc-800 rounded-sm" />

                {/* Product Boxes */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                    className="absolute bottom-4 left-4 w-8 h-8 bg-blue-500 rounded-md shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10"
                />
            </div>
            <div className="absolute top-1/2 left-[60%] -translate-y-1/2 bg-black border border-blue-500/50 p-3 rounded-lg z-20 shadow-xl">
                <div className="text-xs text-blue-400 font-mono mb-1">STOCK_LOW_ALERT</div>
                <div className="text-[10px] text-zinc-400">Reordering 50 units...</div>
            </div>
        </div>
    )
}

function BankingVisual() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
            <div className="flex gap-16">
                {/* Transaction Nodes */}
                {[1, 2, 3].map(i => (
                    <motion.div
                        key={i}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="w-12 h-12 bg-zinc-900 rounded-full border border-white/10 flex items-center justify-center"
                    >
                        <div className={`w-3 h-3 rounded-full ${i === 2 ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'bg-green-500'}`} />
                    </motion.div>
                ))}
            </div>
            {/* Analysis Beam */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent relative">
                <motion.div
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute top-1/2 -translate-y-1/2 w-32 h-8 bg-green-500/20 blur-xl rounded-full"
                />
            </div>
            <div className="px-4 py-2 bg-red-500/10 border border-red-500/50 rounded text-red-400 text-xs font-bold uppercase tracking-widest">
                Threat Blocked
            </div>
        </div>
    )
}

function EducationVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Student Progress Graph */}
            <div className="w-64 h-40 border-l border-b border-white/10 relative">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "60%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-0 left-4 w-8 bg-zinc-800 rounded-t-sm"
                />
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "40%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute bottom-0 left-16 w-8 bg-zinc-800 rounded-t-sm"
                />
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "85%" }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="absolute bottom-0 left-28 w-8 bg-amber-500 rounded-t-sm shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                />
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "70%" }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="absolute bottom-0 left-40 w-8 bg-zinc-800 rounded-t-sm"
                />
            </div>
            <div className="absolute top-10 right-10 flex gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-xs text-amber-400">Learning Curve Optimized</span>
            </div>
        </div>
    )
}

function DiningVisual() {
    return (
        <div className="relative w-full h-full grid grid-cols-2 gap-4 p-12">
            {[1, 2, 3, 4].map(i => (
                <motion.div
                    key={i}
                    animate={{
                        backgroundColor: i === 2 ? "rgba(225, 29, 72, 0.2)" : "rgba(39, 39, 42, 0.5)",
                        borderColor: i === 2 ? "rgba(225, 29, 72, 0.5)" : "rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="rounded-xl border flex items-center justify-center relative"
                >
                    <div className="text-xs font-mono text-zinc-500">Table {i}</div>
                    {i === 2 && (
                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-lg">
                            BUSY
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    )
}
