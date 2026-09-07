import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog | Arghya Das",
  description:
    "Technical articles by Arghya Das covering React, frontend development, backend engineering, APIs, databases, and modern software development.",
  openGraph: {
    title: "Blog | Arghya Das",
    description:
      "Practical articles on frontend, backend, APIs, databases, and software engineering.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={montserrat.className}>{children}</main>
    </>
  );
}
