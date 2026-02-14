"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    aspectRatio?: string;
}

export function ParallaxImage({ src, alt, className, aspectRatio = "aspect-[4/3]" }: ParallaxImageProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div ref={ref} className={cn("overflow-hidden rounded-3xl relative w-full", aspectRatio, className)}>
            <motion.div style={{ y }} className="absolute inset-0 h-[140%] w-full -top-[20%]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
}
