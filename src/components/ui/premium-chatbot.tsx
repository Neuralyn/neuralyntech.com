"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Bot } from "lucide-react";

export function PremiumChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'bot' | 'user', text: string }[]>([
        { role: 'bot', text: "Hello! I'm Neuralyn's AI Assistant. How can I help you accelerate your infrastructure today?" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        setMessages(prev => [...prev, { role: 'user', text: inputValue }]);
        const userText = inputValue;
        setInputValue("");

        // Simulate bot thinking and response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', text: `I can certainly help with "${userText}". Our team specializes in building custom AI infrastructure. Would you like to schedule a briefing?` }]);
        }, 1500);
    };

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
                        className="pointer-events-auto w-[380px] h-[500px] mb-6 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/60 backdrop-blur-xl flex flex-col origin-bottom-right"
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
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-neutral-400">Online & Ready</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4 thin-scrollbar overscroll-contain" data-lenis-prevent>
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`
                                        max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed
                                        ${msg.role === 'user'
                                            ? 'bg-white text-black rounded-tr-none'
                                            : 'bg-white/10 text-neutral-200 border border-white/5 rounded-tl-none'}
                                    `}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-md">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-full px-4 py-2 focus-within:border-white/30 transition-colors"
                            >
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-neutral-500 h-9"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-50 transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
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
