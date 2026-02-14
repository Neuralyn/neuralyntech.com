"use client";

import { motion } from "framer-motion";
import { Zap, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
}

export function ActionButton({ variant = "primary", children, className }: ActionButtonProps) {
    if (variant === "primary") {
        return (
            <motion.button
                whileHover={{ y: -2, boxShadow: "0 0 30px rgba(236,72,153,0.4), 0 0 40px rgba(168,85,247,0.2)" }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "relative group overflow-hidden rounded-full px-8 py-4 bg-gradient-to-r from-pink-400/90 via-purple-400/80 to-violet-400/70 text-white font-semibold text-base flex items-center gap-3 shadow-[0_0_15px_rgba(236,72,153,0.2)]",
                    className
                )}
            >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30" />
                <Zap className="w-4 h-4 fill-white" />
                <span>{children}</span>
            </motion.button>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
            transition={{ duration: 0.2 }}
            className={cn(
                "relative group rounded-full px-8 py-4 bg-transparent border border-neutral-500 text-white font-medium text-base flex items-center gap-3",
                className
            )}
        >
            <div className="w-6 h-6 rounded-full border border-neutral-400 flex items-center justify-center">
                <Play className="w-3 h-3 fill-white ml-0.5" />
            </div>
            <span>{children}</span>
        </motion.button>
    );
}
