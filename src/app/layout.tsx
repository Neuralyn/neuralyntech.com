import type { Metadata } from "next";
import { Inter, Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { PageTransition } from "@/components/ui/page-transition";
import { PremiumChatbot } from "@/components/ui/premium-chatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-display",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Neuralyn Tech | AI Infrastructure & Automation",
    description: "We engineer AI-powered systems - automation, internal copilots, and modern web infrastructure - so businesses run faster, smarter, and more securely.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${space.variable} ${dmSans.variable}`}>
            <body className="font-[var(--font-inter)] bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SmoothScroll>
                        <Navbar />
                        <main className="min-h-screen">
                            <PageTransition>
                                {children}
                            </PageTransition>
                        </main>
                        <PremiumChatbot />
                        <Footer />
                    </SmoothScroll>
                </ThemeProvider>
            </body>
        </html>
    );
}
