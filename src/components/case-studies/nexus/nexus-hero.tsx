"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function NexusHero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_100%)]" />

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest">
                        Case Study 01
                    </span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                        NEXUS AI
                    </h1>
                    <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        The nervous system of modern enterprise. <br className="hidden md:block" />
                        Predictive intelligence for a connected world.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.div>
        </section>
    );
}
