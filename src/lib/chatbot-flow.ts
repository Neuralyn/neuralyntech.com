
export type ChatOption = {
    label: string;
    nextStepId: string | null; // null ends the conversation or performs an action
    action?: 'link' | 'email';
    value?: string;
};

export type ChatStep = {
    id: string;
    text: string;
    options: ChatOption[];
};

export const chatFlow: Record<string, ChatStep> = {
    root: {
        id: "root",
        text: "Hello! I'm Neuralyn's AI Assistant. How can I help you accelerate your digital transformation today?",
        options: [
            { label: "Explore Services", nextStepId: "services" },
            { label: "View Case Studies", nextStepId: "case_studies" },
            { label: "Engagement Models", nextStepId: "pricing" },
            { label: "Contact Support", nextStepId: "contact" }
        ]
    },

    // SERVICES BRANCH
    services: {
        id: "services",
        text: "We specialize in three core pillars of digital engineering. Which one interests you?",
        options: [
            { label: "AI & Automation", nextStepId: "service_ai" },
            { label: "Web Infrastructure", nextStepId: "service_web" },
            { label: "Strategic Consulting", nextStepId: "service_consulting" },
            { label: "« Back", nextStepId: "root" }
        ]
    },
    service_ai: {
        id: "service_ai",
        text: "Our AI solutions allow you to automate workflows and build intelligent internal tools. What are you looking to build?",
        options: [
            { label: "Custom AI Agents", nextStepId: "ai_details" },
            { label: "RAG / Knowledge Bases", nextStepId: "ai_details" },
            { label: "Process Automation", nextStepId: "ai_details" },
            { label: "« Back to Services", nextStepId: "services" }
        ]
    },
    service_web: {
        id: "service_web",
        text: "We build high-performance, scalable web platforms using Next.js and modern stacks.",
        options: [
            { label: "New Web App", nextStepId: "web_details" },
            { label: "Site Redesign", nextStepId: "web_details" },
            { label: "Performance Optimization", nextStepId: "web_details" },
            { label: "« Back to Services", nextStepId: "services" }
        ]
    },
    service_consulting: {
        id: "service_consulting",
        text: "We help organizations plan their digital roadmap and technical architecture.",
        options: [
            { label: "Tech Audit", nextStepId: "consulting_details" },
            { label: "Architecture Design", nextStepId: "consulting_details" },
            { label: "« Back to Services", nextStepId: "services" }
        ]
    },

    // Generic Details Endpoints
    ai_details: {
        id: "ai_details",
        text: "Excellent choice. Our AI Systems Build typically takes 4-8 weeks. Would you like to see pricing or book a call?",
        options: [
            { label: "See Pricing", nextStepId: "pricing" },
            { label: "Book a Call", nextStepId: "contact" },
            { label: "« Back", nextStepId: "service_ai" }
        ]
    },
    web_details: {
        id: "web_details",
        text: "We craft pixel-perfect, highly responsive web experiences. Would you like to discuss your project requirements?",
        options: [
            { label: "See Engagement Models", nextStepId: "pricing" },
            { label: "Contact Us", nextStepId: "contact" },
            { label: "« Back", nextStepId: "service_web" }
        ]
    },
    consulting_details: {
        id: "consulting_details",
        text: "Our consulting engagements are tailored to your specific needs. Let's find the right strategy for you.",
        options: [
            { label: "View Retainer Options", nextStepId: "pricing_retainer" },
            { label: "Book Discovery Call", nextStepId: "contact" },
            { label: "« Back", nextStepId: "service_consulting" }
        ]
    },

    // CASE STUDIES BRANCH
    case_studies: {
        id: "case_studies",
        text: "See how we've helped other innovators. Which case study would you like to explore?",
        options: [
            { label: "Nexus AI (Interface)", nextStepId: "cs_nexus" },
            { label: "Lumina Logic (Branding)", nextStepId: "cs_lumina" },
            { label: "Neuralyn Health (Platform)", nextStepId: "cs_health" },
            { label: "« Back to Menu", nextStepId: "root" }
        ]
    },
    cs_nexus: {
        id: "cs_nexus",
        text: "Nexus AI is a next-gen interface design for managing complex neural networks. It features real-time 3D visualization.",
        options: [
            { label: "View Full Case Study", nextStepId: null, action: 'link', value: '/case-studies/nexus-ai' },
            { label: "See More Projects", nextStepId: "case_studies" }
        ]
    },
    cs_lumina: {
        id: "cs_lumina",
        text: "Lumina Logic is a comprehensive branding and web app project. (Coming Soon)",
        options: [
            { label: "See More Projects", nextStepId: "case_studies" },
            { label: "« Back", nextStepId: "root" }
        ]
    },
    cs_health: {
        id: "cs_health",
        text: "Neuralyn Health is an AI-driven healthcare support platform streamlining clinic operations.",
        options: [
            { label: "Visit Platform", nextStepId: null, action: 'link', value: 'https://www.neuralyn.health/' },
            { label: "See More Projects", nextStepId: "case_studies" }
        ]
    },

    // PRICING BRANCH
    pricing: {
        id: "pricing",
        text: "We offer transparent engagement models designed for different stages of growth.",
        options: [
            { label: "Automation Sprint ($4.5k+)", nextStepId: "price_sprint" },
            { label: "AI Systems Build ($12k+)", nextStepId: "price_build" },
            { label: "Infrastructure ($30k+)", nextStepId: "price_infra" },
            { label: "« Back to Menu", nextStepId: "root" }
        ]
    },
    price_sprint: {
        id: "price_sprint",
        text: "The Automation Sprint includes process analysis, 1-3 workflow automations, and usually takes 2-4 weeks.",
        options: [
            { label: "Get Started", nextStepId: "contact" },
            { label: "Compare Models", nextStepId: "pricing" }
        ]
    },
    price_build: {
        id: "price_build",
        text: "The AI Systems Build includes custom AI assistants, data pipelines, and a full web app. Timeline: 4-8 weeks.",
        options: [
            { label: "Get Started", nextStepId: "contact" },
            { label: "Compare Models", nextStepId: "pricing" }
        ]
    },
    price_infra: {
        id: "price_infra",
        text: "Intelligent Infrastructure is for full-scale transformation. Includes multi-layer automation and enterprise security.",
        options: [
            { label: "Contact Sales", nextStepId: "contact" },
            { label: "Compare Models", nextStepId: "pricing" }
        ]
    },
    pricing_retainer: {
        id: "pricing_retainer",
        text: "We also offer monthly retainers for ongoing support and development, starting at $5,000/mo.",
        options: [
            { label: "Book a Call", nextStepId: "contact" },
            { label: "« Back to Pricing", nextStepId: "pricing" }
        ]
    },

    // CONTACT BRANCH
    contact: {
        id: "contact",
        text: "Ready to move forward? You can reach us via email or book a discovery call directly.",
        options: [
            { label: "Book via Cal.com", nextStepId: null, action: 'link', value: 'https://cal.com/neuralyn' },
            { label: "Send Email", nextStepId: null, action: 'email', value: 'hello@neuralyn.com' },
            { label: "Go to Contact Page", nextStepId: null, action: 'link', value: '/contact' },
            { label: "« Back to Menu", nextStepId: "root" }
        ]
    }
};
