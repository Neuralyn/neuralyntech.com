"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollIndicator() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none z-20"
        >
            <div className="w-[30px] h-[50px] rounded-full border-2 border-border flex justify-center p-2 box-border">
                <motion.div
                    animate={{
                        y: [0, 24, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="w-1 h-3 bg-gradient-to-b from-blue-400 to-foreground rounded-full"
                />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-heading">
                Scroll
            </span>
        </motion.div>
    );
}
