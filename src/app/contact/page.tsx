import { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { DirectContact } from "@/components/contact/direct-contact";
import { ProcessTimeline } from "@/components/contact/process-timeline";
import { CalendarSection } from "@/components/contact/calendar-section";

export const metadata: Metadata = {
    title: "Contact | Neuralyn Tech",
    description: "Start a conversation about engineering your intelligent systems.",
};

export default function ContactPage() {
    return (
        <main className="bg-black min-h-screen">
            <ContactHero />
            <ContactForm />
            <DirectContact />
            <ProcessTimeline />
        </main>
    );
}
