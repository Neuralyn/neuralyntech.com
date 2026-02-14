"use client";

import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
}

export function ComingSoonModal({
    isOpen,
    onClose,
    title = "Coming Soon",
    description = "This case study is currently being documented. Check back soon for the full reveal."
}: ComingSoonModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const onEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onEscape);
        document.body.style.overflow = "hidden"; // Prevent scrolling
        return () => {
            window.removeEventListener("keydown", onEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />
            {/* Card */}
            <div className="relative w-full max-w-sm rounded-[2rem] border border-white/10 bg-zinc-900 p-8 shadow-xl animate-in zoom-in-95 slide-in-from-bottom-5 duration-300">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <X className="h-5 w-5" />
                </button>
                <h2 id="coming-soon-title" className="text-xl font-bold font-heading text-white pr-10">
                    {title}
                </h2>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {description}
                </p>
                <Button
                    onClick={onClose}
                    className="mt-6 w-full rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-colors font-bold uppercase tracking-widest text-sm"
                >
                    Got it
                </Button>
            </div>
        </div>,
        document.body
    );
}
