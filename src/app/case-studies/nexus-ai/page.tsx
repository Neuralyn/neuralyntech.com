import { NexusHero } from "@/components/case-studies/nexus/nexus-hero";
import { GlobalNetwork } from "@/components/case-studies/nexus/global-network";
import { SystemArchitecture } from "@/components/case-studies/nexus/system-architecture";
import { IndustryModules } from "@/components/case-studies/nexus/industry-modules";

export default function NexusCaseStudy() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-white/20">
            <NexusHero />
            <GlobalNetwork />
            <SystemArchitecture />
            <IndustryModules />
        </div>
    );
}
