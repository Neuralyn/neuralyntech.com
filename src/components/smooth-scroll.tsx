"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ScrollRestoration() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            lerp: 0.05,
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1.2
        }}>
            <ScrollRestoration />
            {children}
        </ReactLenis>
    );
}
