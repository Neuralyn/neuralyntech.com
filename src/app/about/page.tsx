import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { OurMission } from "@/components/about/our-mission";
import { Differentiation } from "@/components/about/differentiation";
import { OurPhilosophy } from "@/components/about/our-philosophy";
import { TargetAudience } from "@/components/about/target-audience";
import { Leadership } from "@/components/about/leadership";
import { OurValues } from "@/components/about/our-values";
import { AboutCTA } from "@/components/about/about-cta";

export const metadata: Metadata = {
    title: "About | Neuralyn Tech",
    description: "Neuralyn Tech is an AI infrastructure and automation studio building intelligent systems for modern organizations.",
};

export default function AboutPage() {
    return (
        <main className="bg-black min-h-screen">
            <AboutHero />
            <OurMission />
            <Differentiation />
            <OurPhilosophy />
            <TargetAudience />
            <Leadership />
            <OurValues />
            <AboutCTA />
        </main>
    );
}
