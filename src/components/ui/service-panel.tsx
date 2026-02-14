"use client";

import { motion } from "framer-motion";

const services = [
    {
        name: "AI Automation",
        gradient: "from-rose-400 to-orange-300",
        glowColor: "rgba(251,113,133,0.5)",
    },
    {
        name: "AI Assistants",
        gradient: "from-blue-400 to-purple-400",
        glowColor: "rgba(96,165,250,0.5)",
    },
    {
        name: "Web Systems",
        gradient: "from-pink-400 to-rose-300",
        glowColor: "rgba(244,114,182,0.5)",
    },
    {
        name: "Data Pipelines",
        gradient: "from-cyan-400 to-blue-300",
        glowColor: "rgba(34,211,238,0.5)",
    },
];

export function ServicePanel() {
    return (
        <div className="flex flex-col gap-5">
            {services.map((service, i) => (
                <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4"
                >
                    {/* Vertical gradient pill bar with unique color */}
                    <motion.div
                        animate={{
                            opacity: [0.7, 1, 0.7],
                            boxShadow: [
                                `0 0 8px ${service.glowColor}`,
                                `0 0 16px ${service.glowColor}`,
                                `0 0 8px ${service.glowColor}`,
                            ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                        className={`w-1.5 h-10 rounded-full bg-gradient-to-b ${service.gradient} flex-shrink-0`}
                    />
                    {/* Horizontal glass pill button */}
                    <motion.div
                        whileHover={{
                            scale: 1.02,
                            backgroundColor: "rgba(255,255,255,0.08)",
                        }}
                        className="rounded-2xl bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.08] px-8 py-4 min-w-[220px] cursor-pointer transition-colors shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
                    >
                        <span className="text-white font-medium text-base tracking-wide">{service.name}</span>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
