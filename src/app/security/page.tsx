import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Lock, Eye, Server, FileText } from "lucide-react";

export default function SecurityPage() {
    return (
        <>
            <Section className="pt-32 pb-0">
                <Container>
                    <div className="max-w-3xl mb-16">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Security & <span className="text-primary">Compliance</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We build systems that handle sensitive data. Security is not an afterthought - it's the foundation of our architecture.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <Card className="p-8 bg-white/5 border-white/10">
                            <ShieldCheck className="h-10 w-10 text-primary mb-6" />
                            <h2 className="text-2xl font-bold mb-4">Core Principles</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Least Privilege Access:</strong> Every service and user has only the permissions necessary for their function.</span>
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Encryption Everywhere:</strong> TLS 1.3 for data in transit and AES-256 for data at rest.</span>
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span><strong>Defense in Depth:</strong> Multiple layers of security controls throughout the system architecture.</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-8 bg-white/5 border-white/10">
                            <Server className="h-10 w-10 text-blue-400 mb-6" />
                            <h2 className="text-2xl font-bold mb-4">Data Boundaries</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                    <span><strong>Client Ownership:</strong> You own your data. We facilitate the infrastructure but do not claim rights to your IP.</span>
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                    <span><strong>Deployment Flexibility:</strong> We can deploy directly into your cloud environment (AWS/GCP/Azure) for maximum control.</span>
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                    <span><strong>No Vendor Lock-in:</strong> We use standard, open-source technologies so you aren't tied to a proprietary platform.</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <div className="bg-gradient-to-r from-red-900/10 to-transparent border-l-4 border-red-500 p-8 rounded-r-xl">
                        <h3 className="text-xl font-bold text-red-100 flex items-center gap-2 mb-2">
                            <FileText className="h-5 w-5" /> Important Disclaimer
                        </h3>
                        <p className="text-red-200/80">
                            We do not provide medical advice or clinical decision-making support. We build non-clinical software systems and automations designed to improve operational efficiency. All medical decisions must be made by qualified healthcare professionals.
                        </p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
