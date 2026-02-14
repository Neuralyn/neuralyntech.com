import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm",
                hoverEffect && "transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
