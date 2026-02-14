"use client";

import { Container } from "@/components/ui/container";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export function DirectContact() {
    return (
        <section className="py-20 border-t border-white/5 bg-white/[0.02]">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white mb-12">Other Ways to Reach Us</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <Link
                            href="mailto:neuralyntech@gmail.com"
                            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all min-w-[280px]"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm font-medium text-white/50 mb-1">Email Us</h3>
                                <p className="text-lg font-medium text-white">neuralyntech@gmail.com</p>
                            </div>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/nithin-rajulapati-69133a1aa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all min-w-[280px]"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#0077b5]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Linkedin className="w-5 h-5 text-[#0077b5]" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm font-medium text-white/50 mb-1">Connect on LinkedIn</h3>
                                <p className="text-lg font-medium text-white">Nithin Rajulapati</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
