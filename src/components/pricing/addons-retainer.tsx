"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CheckCircle2, Plus } from "lucide-react";

const addOns = [
    "Ongoing Support & Monitoring",
    "Advanced Security Hardening",
    "Custom API Development",
    "Data Migration",
    "Infrastructure Scaling"
];

const retainers = [
    {
        name: "Growth Support",
        price: "$1,500/month",
        includes: "Monitoring, updates, minor automation adjustments"
    },
    {
        name: "Engineering Partner",
        price: "$3,500/month",
        includes: "Dedicated monthly build hours, optimization, system evolution",
        popular: true
    },
    {
        name: "Enterprise Support",
        price: "Custom",
        includes: "Full SLA, 24/7 dedicated response, on-premise deployment support"
    }
];

export function AddonsRetainer() {
    return (
        <Section className="bg-black/95 pb-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Add-ons Column */}
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                            <Plus className="w-6 h-6 text-primary" />
                            Optional Add-ons
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {addOns.map((addon) => (
                                <div key={addon} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-lg font-medium text-white/90">{addon}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Retainer Column */}
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-8">
                            Ongoing Partnership
                        </h3>
                        <div className="space-y-6">
                            {retainers.map((item) => (
                                <div
                                    key={item.name}
                                    className={`p-6 rounded-2xl border ${item.popular ? 'bg-primary/5 border-primary/20 relative overflow-hidden' : 'bg-white/5 border-white/10'}`}
                                >
                                    {item.popular && (
                                        <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-black text-xs font-bold rounded-bl-lg">
                                            Popular
                                        </div>
                                    )}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                        <h4 className="text-xl font-bold">{item.name}</h4>
                                        <span className="text-xl font-bold font-heading text-primary">{item.price}</span>
                                    </div>
                                    <p className="text-white/60 text-sm">
                                        {item.includes}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
