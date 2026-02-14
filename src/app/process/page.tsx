import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Search, Code2, Rocket, RefreshCw } from "lucide-react";

const steps = [
    {
        id: "discovery",
        title: "Discovery & Architecture",
        description: "We deep dive into your requirements, threat models, and success metrics. No code is written until we have a clear blueprint.",
        icon: <Search className="h-6 w-6" />,
        items: ["Requirements Gathering", "Threat Modeling", "Architecture Diagram", "Scope Definition"]
    },
    {
        id: "build",
        title: "Build Sprints",
        description: "Rapid, iterative development with weekly checkpoints. You see progress every step of the way.",
        icon: <Code2 className="h-6 w-6" />,
        items: ["Weekly Demos", "CI/CD Setup", "Code Reviews", "Unit Testing"]
    },
    {
        id: "launch",
        title: "Launch & QA",
        description: " rigorous testing, security auditing, and a smooth deployment to production.",
        icon: <Rocket className="h-6 w-6" />,
        items: ["Performance Audits", "Security Scanning", "UAT", "Go-Live Support"]
    },
    {
        id: "iterate",
        title: "Iterate & Support",
        description: "We don't disappear after launch. We provide ongoing monitoring and improvements via retainer.",
        icon: <RefreshCw className="h-6 w-6" />,
        items: ["24/7 Monitoring", "Feature Enhancements", "Security Updates", "Scale Management"]
    }
];

export default function ProcessPage() {
    return (
        <>
            <Section className="pt-32 pb-0">
                <Container>
                    <div className="max-w-3xl mb-16 text-center mx-auto">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Our <span className="text-primary">Process</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Transparent, rigorous, and designed for speed. We treat your infrastructure with the engineering discipline it deserves.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-16 md:space-y-24 pb-16">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative pl-8 md:pl-0">
                                {/* Timeline Connector */}
                                <div className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-primary ring-4 ring-black" />

                                <div className={`md:flex items-start justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="hidden md:block w-1/2" /> {/* Spacer for alternating layout */}

                                    <div className="w-full md:w-1/2 relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors">
                                        <div className="absolute -top-6 -left-6 md:-left-8 bg-black/50 p-4 rounded-xl border border-white/10 backdrop-blur-md text-primary">
                                            {step.icon}
                                        </div>
                                        <h2 className="text-2xl font-bold mb-4 mt-4">{step.title}</h2>
                                        <p className="text-muted-foreground mb-6">{step.description}</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {step.items.map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
