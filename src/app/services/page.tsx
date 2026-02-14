import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { CapabilitiesGrid } from "@/components/services/capabilities-grid";
import { ProcessSteps } from "@/components/services/process-steps";
import { AudienceSection } from "@/components/services/audience-section";
import { WhyUs } from "@/components/services/why-us";
import { FinalCTA } from "@/components/services/final-cta";

export const metadata: Metadata = {
    title: "Services | Neuralyn Tech",
    description: "We design, build, and deploy AI-powered infrastructure that automates workflows and enables scalable digital operations.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white font-heading">
            <ServicesHero />
            <CapabilitiesGrid />
            <ProcessSteps />
            <AudienceSection />
            <WhyUs />
            <FinalCTA />
        </main>
    );
}
