"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    delay?: number;
}

export function ServiceCard({ title, description, icon, href, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Link href={href} className="block h-full">
                <Card className="h-full flex flex-col group relative overflow-hidden border-white/5 bg-white/[0.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 mb-6 p-3 w-fit rounded-lg bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {icon}
                    </div>

                    <h3 className="relative z-10 text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="relative z-10 text-muted-foreground mb-6 flex-grow leading-relaxed">
                        {description}
                    </p>

                    <div className="relative z-10 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}
