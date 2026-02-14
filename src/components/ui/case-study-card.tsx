"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
    title: string;
    category: string;
    image: string;
    stats: string;
    href: string;
    delay?: number;
}

export function CaseStudyCard({ title, category, image, stats, href, delay = 0 }: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Link href={href} className="block group">
                <Card className="p-0 overflow-hidden border-white/5 bg-white/[0.02] hover:border-primary/50 transition-colors duration-500">
                    <div className="relative h-48 w-full overflow-hidden">
                        {/* Placeholder for real image, using a gradient for now if image fails or is abstract */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />

                        {/* 
                In a real app, use next/image. 
                For now, I'll use a colored div to simulate an image/overlay 
            */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80">
                                {category}
                            </span>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                            {title}
                        </h3>

                        <div className="flex items-center gap-2 text-green-400 mb-4 text-sm font-medium">
                            <TrendingUp className="h-4 w-4" />
                            <span>{stats}</span>
                        </div>

                        <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                            Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}
