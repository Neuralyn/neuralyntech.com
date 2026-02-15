"use client";

export const dynamic = "force-dynamic";

import { NexusPreview } from "@/components/impact/nexus-preview";
import { Hero } from "@/components/ui/hero";
import { Navbar } from "@/components/layout/navbar";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ComingSoonModal } from "@/components/ui/coming-soon-modal";
import { useState } from "react";

export default function Home() {
    const [showLuminaModal, setShowLuminaModal] = useState(false);

    return (
        <div className="page-bg min-h-screen">
            <Navbar />
            <Hero />

            {/* Selected Work Section */}
            <section className="px-4 md:px-12 py-24 relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16 w-full">
                    <h2 className="text-[8vw] leading-[0.8] font-bold font-heading uppercase">
                        Selected <br /> Work
                    </h2>
                    <div className="md:ml-auto md:text-right max-w-xs">
                        <p className="text-neutral-400 mb-8">
                            We partner with forward-thinking companies to build digital products that shape the future.
                        </p>
                        <MagneticButton>
                            <Link href="/case-studies" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm font-bold">
                                View All Projects <ArrowUpRight size={16} />
                            </Link>
                        </MagneticButton>
                    </div>
                </div>

                <div className="space-y-32">
                    {/* Project 1 */}
                    <div className="group relative">
                        <NexusPreview />
                        <div className="flex justify-between items-start mt-8 border-t border-white/10 pt-6">
                            <div>
                                <h3 className="text-4xl font-bold font-heading mb-2">Nexus AI</h3>
                                <p className="text-neutral-400">Interface Design / Development</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <MagneticButton>
                                    <Link href="/case-studies/nexus-ai">
                                        <span className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm uppercase">
                                            View Case
                                        </span>
                                    </Link>
                                </MagneticButton>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: Lumina Logic */}
                    <div className="group relative md:pl-[20%]">
                        <ParallaxImage
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
                            alt="E-commerce Platform"
                            aspectRatio="aspect-[16/9]"
                        />
                        <div className="flex justify-between items-start mt-8 border-t border-white/10 pt-6">
                            <div>
                                <h3 className="text-4xl font-bold font-heading mb-2">Lumina Logic</h3>
                                <p className="text-neutral-400">Web App / Branding</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <MagneticButton>
                                    <button
                                        onClick={() => setShowLuminaModal(true)}
                                        className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm uppercase cursor-pointer"
                                    >
                                        View Case
                                    </button>
                                </MagneticButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="px-4 md:px-12 py-24 relative z-10">
                <h2 className="text-sm font-bold uppercase tracking-widest mb-16 text-neutral-400">Our Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {[
                        { title: "Strategy", desc: "Digital Strategy, UX Research, Product Roadmap" },
                        { title: "Design", desc: "UI/UX Design, Design Systems, Motion Graphics" },
                        { title: "Development", desc: "Web Development, App Development, CMS Integration" }
                    ].map((service, i) => (
                        <div key={i} className="border-t border-white/10 pt-8 group hover:border-white transition-colors duration-500">
                            <span className="block text-xs text-neutral-500 mb-4">0{i + 1}</span>
                            <h3 className="text-3xl font-bold font-heading mb-4">{service.title}</h3>
                            <p className="text-neutral-400 max-w-xs">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <ComingSoonModal
                isOpen={showLuminaModal}
                onClose={() => setShowLuminaModal(false)}
                title="Lumina Logic"
                description="We're currently compiling the case study for Lumina Logic. Stay tuned for a deep dive into this branding and web app project."
            />

        </div>
    );
}
