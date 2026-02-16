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

                    <div className="mt-16 pt-12 border-t border-white/5">
                        <h3 className="text-xl font-bold text-white mb-8">Prefer to Book Directly?</h3>
                        <div className="flex justify-center">
                            <Link
                                href="https://calendly.com/neuralyn-ai/investor-meeting"
                                target="_blank"
                                className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600/20 hover:border-blue-500/40 transition-all min-w-[280px]"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-400"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-medium text-blue-200/50 mb-1">Schedule Now</h3>
                                    <p className="text-lg font-medium text-white">Book a Strategy Call</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
