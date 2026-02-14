"use client";

import Link from "next/link";
import { NavLink } from "@/components/ui/nav-link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { ModeToggle } from "@/components/ui/mode-toggle";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 pt-6 md:pt-8 px-6 md:px-12 lg:px-16 pointer-events-none">
                <div className="relative flex items-center justify-between md:justify-center max-w-[1400px] mx-auto">
                    {/* Top-left logo */}
                    <Link
                        href="/"
                        className="pointer-events-auto flex items-center gap-2.5 group md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2"
                    >
                        <div className="relative w-10 h-10 overflow-hidden">
                            <img
                                src="/logo.svg"
                                alt="Neuralyn Tech Logo"
                                className="w-full h-full object-contain dark:invert-0 invert"
                            />
                        </div>
                        {/* Wordmark - Visible on all screens now */}
                        <span
                            className="block text-[20px] font-heading font-bold tracking-[-0.02em] text-foreground"
                        >
                            NeuralynTech
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-3 py-3 rounded-full bg-background/50 backdrop-blur-2xl border border-border shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] ring-1 ring-border">
                        <NavLink href="/services">Services</NavLink>
                        <NavLink href="/pricing">Pricing</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground px-5 py-2 rounded-full hover:bg-foreground/5 transition-all duration-300"
                        >
                            Contact us
                        </Link>
                        <div className="pl-2 ml-2 border-l border-border">
                            <ModeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="pointer-events-auto md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-2xl font-heading font-bold text-center">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white py-2">Home</Link>
                            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white py-2">Services</Link>
                            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white py-2">Pricing</Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white py-2">About</Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-primary py-2">Contact Us</Link>
                            <div className="pt-4 mt-4 border-t border-white/10 flex justify-center">
                                <ModeToggle />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
