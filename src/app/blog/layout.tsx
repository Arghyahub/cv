import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog | Arghya Das",
  description:
    "Read blogs about technology, programming, their implementation and interesting concepts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={montserrat.className}>{children}</main>
    </>
  );
}
