import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Team Starfall",
    description: "Team Starfall's home page!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
