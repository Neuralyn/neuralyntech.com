"use client";

import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ChevronDown } from "lucide-react";

// Custom Glossy Select Component
function CustomSelect({
    label,
    value,
    onChange,
    options,
    placeholder
}: {
    label: string,
    value: string,
    onChange: (value: string) => void,
    options: string[],
    placeholder: string
}) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            <label className="block text-sm font-medium text-white/70 mb-2">{label}</label>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white cursor-pointer flex justify-between items-center transition-all ${isOpen ? 'ring-1 ring-blue-500/50 border-blue-500/50' : 'hover:border-white/20'}`}
            >
                <span className={value ? "text-white" : "text-white/30"}>
                    {value || placeholder}
                </span>
                <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 top-full left-0 right-0 mt-2 rounded-xl border border-white/10 bg-zinc-950 shadow-2xl overflow-hidden max-h-60 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
                    >
                        {options.map((option) => (
                            <div
                                key={option}
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                                className="px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white cursor-pointer transition-colors text-sm"
                            >
                                {option}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        workEmail: "",
        role: "",
        interest: "",
        budget: "",
        timeline: "",
        details: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/neuralyntech@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Lead: ${formData.companyName}`,
                    _template: "table",
                    _captcha: "false",
                    ...formData
                })
            });

            if (response.ok) {
                console.log("Form Submitted Successfully");
                setIsSuccess(true);
            } else {
                console.error("Form Submission Failed");
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all";
    const labelClasses = "block text-sm font-medium text-white/70 mb-2";

    const interestOptions = [
        "AI Automation",
        "AI Assistants",
        "Web Systems",
        "Data Pipelines",
        "Cloud Architecture",
        "System Integration",
        "Full Infrastructure Build"
    ];

    const budgetOptions = [
        "$3,000 – $10,000",
        "$10,000 – $25,000",
        "$25,000 – $50,000",
        "$50,000+"
    ];

    const timelineOptions = [
        "Immediate (0–1 month)",
        "1–3 months",
        "3+ months"
    ];

    if (isSuccess) {
        return (
            <section className="pb-24">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-12 text-center shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                                    <ChevronDown className="w-10 h-10 text-green-500" />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
                                <p className="text-white/60 mb-8 max-w-lg">
                                    Thank you for reaching out. We have received your project details and will be in touch shortly to schedule your strategy call.
                                </p>
                                <Button
                                    onClick={() => setIsSuccess(false)}
                                    className="bg-white text-black hover:bg-neutral-200 rounded-full px-8"
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>
        );
    }

    return (
        <section className="pb-24">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 shadow-2xl relative overflow-visible">
                        {/* Soft Glow */}


                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Start a Conversation</h2>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Basic Information */}
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-white/90 border-b border-white/10 pb-2">Basic Information</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="companyName" className={labelClasses}>Company Name *</label>
                                            <input
                                                type="text"
                                                id="companyName"
                                                name="companyName"
                                                required
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="Acme Corp"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="workEmail" className={labelClasses}>Work Email *</label>
                                            <input
                                                type="email"
                                                id="workEmail"
                                                name="workEmail"
                                                required
                                                value={formData.workEmail}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="role" className={labelClasses}>Role / Title *</label>
                                            <input
                                                type="text"
                                                id="role"
                                                name="role"
                                                required
                                                value={formData.role}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="CTO / Product Manager"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Information */}
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-white/90 border-b border-white/10 pb-2">Project Information</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <CustomSelect
                                                label="What are you interested in?"
                                                placeholder="Select an option"
                                                value={formData.interest}
                                                options={interestOptions}
                                                onChange={(val) => handleSelectChange('interest', val)}
                                            />
                                        </div>
                                        <div>
                                            <CustomSelect
                                                label="Budget Range"
                                                placeholder="Select a range"
                                                value={formData.budget}
                                                options={budgetOptions}
                                                onChange={(val) => handleSelectChange('budget', val)}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <CustomSelect
                                                label="Timeline"
                                                placeholder="Select a timeline"
                                                value={formData.timeline}
                                                options={timelineOptions}
                                                onChange={(val) => handleSelectChange('timeline', val)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="details" className={labelClasses}>Project Details</label>
                                        <textarea
                                            id="details"
                                            name="details"
                                            rows={5}
                                            value={formData.details}
                                            onChange={handleChange}
                                            className={inputClasses}
                                            placeholder="Describe your current systems, tools, and what you're trying to improve..."
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto px-8 py-6 text-lg rounded-full bg-white text-black hover:bg-neutral-200 shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Scheduling..." : "Schedule Strategy Call"}
                                    </Button>

                                    <div className="flex items-center gap-2 text-xs text-white/40">
                                        <Lock className="w-3 h-3" />
                                        <span>We treat all project discussions as confidential. NDAs available upon request.</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
