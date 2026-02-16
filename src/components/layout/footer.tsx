"use client";

import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="bg-background py-24 border-t border-border">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div>
                        <h2 className="text-[10vw] leading-[0.8] font-bold font-heading uppercase text-foreground mb-8">
                            LET'S WORK <br /> <span className="text-muted-foreground">TOGETHER</span>
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 text-muted-foreground">
                        <a href="mailto:neuralyntech@gmail.com" className="text-2xl hover:text-foreground transition-colors">neuralyntech@gmail.com</a>
                        <p>Chicago, USA</p>
                    </div>
                </div>
                <div className="mt-24 flex justify-between text-xs text-muted-foreground uppercase tracking-widest border-t border-border pt-8">
                    <p>&copy; 2026 Neuralyn Tech. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                        <span className="text-white/20 ml-4">v1.1.0</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
