export function PageTransition({ children }: { children: React.ReactNode }) {
    // Disabled page transition to prevent "blinking" / double-load effect
    return (
        <div className="w-full h-full">
            {children}
        </div>
    );
}
