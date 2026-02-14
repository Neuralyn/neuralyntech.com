import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingStructure } from "@/components/pricing/pricing-structure";
import { EngagementModels } from "@/components/pricing/engagement-models";
import { AddonsRetainer } from "@/components/pricing/addons-retainer";
import { PricingFAQ } from "@/components/pricing/pricing-faq";
import { PricingCTA } from "@/components/pricing/pricing-cta";

export const metadata = {
    title: "Pricing - Neuralyn Tech",
    description: "Transparent pricing for engineering engagements. No hidden fees, just engineered value.",
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black text-white font-heading">
            <PricingHero />
            <PricingStructure />
            <EngagementModels />
            <AddonsRetainer />
            <PricingFAQ />
            <PricingCTA />
        </main>
    );
}
