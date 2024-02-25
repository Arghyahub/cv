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
  home,
  about,
}: Readonly<{
  children: React.ReactNode;
  home: React.ReactNode;
  about: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {home}
      </body>
    </html>
  );
}
