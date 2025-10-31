import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnMyPC AI - Local AI Tools for Everyone",
  description: "All your language tools, right inside your PC. No cloud. No delay. Just your AI. Download free offline AI-powered grammar correction, translation, summarization, and email rewriting tools.",
  keywords: ["AI", "offline", "local", "privacy", "grammar", "translation", "summarization", "email", "desktop app"],
  authors: [{ name: "OnMyPC AI" }],
  openGraph: {
    title: "OnMyPC AI - Local AI Tools for Everyone",
    description: "All your language tools, right inside your PC. No cloud. No delay. Just your AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
