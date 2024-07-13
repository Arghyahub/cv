import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arghya Das",
  description: "Home page of Arghya Das, a software engineer based in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-20 sm:scroll-pt-0">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
