"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Bot, Sparkles, Loader2 } from "lucide-react";

export function PremiumChatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end pointer-events-none">

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="pointer-events-auto w-[340px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/60 backdrop-blur-xl flex flex-col origin-bottom-right mb-6"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Neuralyn AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                                        <span className="text-xs text-neutral-400">System Training</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 flex flex-col items-center text-center space-y-6">
                            <div className="relative w-24 h-24 flex items-center justify-center">
                                {/* Outer rotating ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-dashed border-white/20"
                                />

                                {/* Inner rotating ring (reverse) */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 rounded-full border border-dotted border-purple-500/30"
                                />

                                {/* Central Pulse */}
                                <div className="relative z-10">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                        className="absolute inset-0 bg-purple-500 rounded-full"
                                    />
                                </div>

                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-purple-500/10 blur-2xl rounded-full animate-pulse" />
                            </div>

                            <div>
                                <h4 className="text-lg font-bold font-heading mb-2">Coming Soon</h4>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    Our advanced AI assistant is currently undergoing final training on our proprietary datasets.
                                </p>
                            </div>

                            <div className="w-full p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-500">
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <Sparkles className="w-3 h-3 text-purple-400" />
                                    <span className="font-medium text-neutral-300">Expected Capabilities</span>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <span className="px-2 py-1 rounded bg-black/40">Instant Quotes</span>
                                    <span className="px-2 py-1 rounded bg-black/40">Tech Support</span>
                                    <span className="px-2 py-1 rounded bg-black/40">Project Scoping</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto relative group"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-violet-400 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-neutral-900 border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                    {/* Inner sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-7 h-7 text-white" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MessageSquare className="w-7 h-7 text-white fill-white/20" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.button>
        </div>
    );
}
