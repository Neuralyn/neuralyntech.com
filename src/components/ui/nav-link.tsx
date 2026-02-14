"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "text-sm font-medium text-neutral-300 hover:text-white px-5 py-2 rounded-full hover:bg-white/[0.06] transition-all duration-300",
                isActive && "text-white bg-white/[0.08]"
            )}
        >
            {children}
        </Link>
    );
}
