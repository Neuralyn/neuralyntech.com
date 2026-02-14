"use client";

import { ImpactHero } from "@/components/impact/impact-hero";
import { FeaturedPlatforms } from "@/components/impact/featured-platforms";
import { ProjectGrid } from "@/components/impact/project-grid";
import { EngineeringApproach } from "@/components/impact/engineering-approach";
import { ImpactCTA } from "@/components/impact/impact-cta";

export default function EngineeringImpactPage() {
    return (
        <div className="bg-black min-h-screen">
            <ImpactHero />
            <FeaturedPlatforms />
            <ProjectGrid />
            <EngineeringApproach />
            <ImpactCTA />
        </div>
    );
}
