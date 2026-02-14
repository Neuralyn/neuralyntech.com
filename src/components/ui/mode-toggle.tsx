"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [showComingSoon, setShowComingSoon] = React.useState(false)

    const handleClick = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setShowComingSoon(true)
        }
    }

    const closeModal = () => setShowComingSoon(false)

    React.useEffect(() => {
        if (!showComingSoon) return
        const onEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal()
        }
        window.addEventListener("keydown", onEscape)
        return () => window.removeEventListener("keydown", onEscape)
    }, [showComingSoon])

    const modal = showComingSoon && typeof document !== "undefined" && (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={closeModal}
                onKeyDown={(e) => e.key === "Escape" && closeModal()}
            />
            {/* Card — matches app theme */}
            <div className="relative w-full max-w-sm rounded-[2rem] border border-white/10 bg-zinc-900 p-8 shadow-xl">
                <button
                    type="button"
                    onClick={closeModal}
                    className="absolute right-4 top-4 rounded-full p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <X className="h-5 w-5" />
                </button>
                <h2 id="coming-soon-title" className="text-xl font-bold font-heading text-white pr-10">
                    Coming soon
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                    Light mode is in the works. Stay in dark mode for now.
                </p>
                <Button
                    onClick={closeModal}
                    className="mt-6 w-full rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-colors font-bold uppercase tracking-widest text-sm"
                >
                    Got it
                </Button>
            </div>
        </div>
    )

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                onClick={handleClick}
                className="rounded-full w-9 h-9 bg-white/5 hover:bg-white/10 dark:hover:bg-white/20 border border-white/10 transition-colors"
            >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
                <span className="sr-only">Toggle theme</span>
            </Button>
            {modal && createPortal(modal, document.body)}
        </>
    )
}
