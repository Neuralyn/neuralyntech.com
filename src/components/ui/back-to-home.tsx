"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function BackToHome() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    if (isHome) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-8 left-8 z-50 mix-blend-difference"
        >
            <Link
                href="/"
                className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300"
            >
                <div className="p-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm group-hover:border-white/50 group-hover:bg-white/10 transition-all">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <span className="text-sm font-medium font-heading tracking-wide opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Back to Home
                </span>
            </Link>
        </motion.div>
    );
}
