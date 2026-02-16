"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ActionButton } from "@/components/ui/action-button";
import { FluidSphere } from "@/components/ui/fluid-sphere";
import { Phone, Mail, Linkedin, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
    const [likeCount, setLikeCount] = useState(1284);
    const [liked, setLiked] = useState(false);

    // Simulate "Real-time" updates
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                setLikeCount(prev => prev + 1);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-20">
            <Container className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1400px] gap-12 lg:gap-24 px-8 md:px-12 lg:px-20">

                {/* LEFT COLUMN: Content */}
                <div className="flex-1 flex flex-col items-start text-left z-10 max-w-[600px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <h1 className="font-[var(--font-display)] h1-tight text-[48px] md:text-[64px] font-bold leading-[0.98]">
                            <span
                                style={{
                                    background: "linear-gradient(180deg, #ffffff 0%, #e8e8e8 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Build Intelligent System
                            </span>
                            <br />
                            <span
                                style={{
                                    background: "linear-gradient(180deg, #9e95a0 0%, #7a7280 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    fontWeight: 500,
                                }}
                            >
                                For Modern Business.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-[520px] mb-12"
                    >
                        We design & deploy AI-powered systems for automation, internal copilots,
                        <br className="hidden md:block" />
                        and modern web infrastructure, so businesses run faster, smarter, and more securely
                    </motion.p>



                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-wrap items-center gap-6 mb-16"
                    >
                        <Link href="/services">
                            <ActionButton variant="primary">Get Started</ActionButton>
                        </Link>
                        <ActionButton variant="secondary">Watch Demo</ActionButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center gap-6 text-neutral-400 text-sm font-medium pl-7"
                    >
                        <div className="flex gap-5">
                            {/* Social Icons */}
                            <a href="tel:+1234567890" className="hover:text-white transition-colors"><Phone className="w-5 h-5" /></a>
                            <a href="mailto:neuralyntech@gmail.com" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>

                        <div className="h-4 w-px bg-white/20" />

                        {/* Like Button & Count */}
                        <div
                            className="flex items-center gap-2 cursor-pointer group"
                            onClick={() => {
                                setLikeCount(prev => prev + 1);
                                setLiked(true);
                            }}
                        >
                            <Heart className={`w-5 h-5 transition-all duration-300 ${liked ? "fill-red-500 stroke-red-500 scale-110" : "group-hover:text-white group-hover:scale-110"}`} />
                            <span className="font-mono text-xs tabular-nums opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {likeCount.toLocaleString()}
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: 3D Fluid Sphere */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="flex-1 flex justify-center lg:justify-end relative z-10 w-full lg:translate-x-12"
                >
                    <div className="relative w-full flex justify-center lg:justify-end scale-90 lg:scale-100 origin-center lg:origin-right">
                        <FluidSphere />
                    </div>
                </motion.div>

            </Container>

            {/* PREMIUM SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-10"
            >
                <motion.span
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold"
                >
                    Scroll
                </motion.span>

                {/* Animated Light Beam */}
                <div className="relative w-[300px] h-[2px] flex items-center justify-center overflow-hidden">
                    {/* Static base line */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Moving pulse scanning across */}
                    <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                        className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent blur-[2px]"
                    />

                    {/* Ambient Glow Pulse */}
                    <motion.div
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-md"
                    />
                </div>
            </motion.div>


        </section>
    );
}
