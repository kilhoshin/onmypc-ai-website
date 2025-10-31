import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnMyPC.ai - Your Personal AI Assistant on Your PC",
  description: "Run powerful AI models directly on your PC. Privacy-first, offline-capable AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
