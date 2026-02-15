"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do you work with small businesses?",
        answer: "Yes, if the project aligns with automation and long-term system improvement. We look for partners who value engineering quality over quick fixes."
    },
    {
        question: "Do you offer fixed pricing?",
        answer: "We scope fixed pricing after initial discovery. This ensures transparency and prevents budget creep."
    },
    {
        question: "How quickly can we start?",
        answer: "Typically within 1-2 weeks after agreement. We maintain a focused client list to ensure quality."
    },
    {
        question: "Do you sign NDAs?",
        answer: "Yes. Security and confidentiality are core to our operations."
    },
    {
        question: "Do you provide hosting?",
        answer: "Yes, we can manage hosting for you, or we can deploy directly within your own cloud environment (AWS, GCP, Azure)."
    }
];

export function PricingFAQ() {
    return (
        <Section className="bg-black pt-20">
            <Container className="max-w-3xl">
                <h2 className="text-3xl font-bold font-heading mb-12 text-center">
                    Common Questions
                </h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 rounded-xl bg-white/5 px-6">
                            <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary transition-colors py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-white/70 leading-relaxed pb-6 text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </Section>
    );
}
