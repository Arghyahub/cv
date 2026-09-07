import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Arghya Das | Full Stack Software Engineer",
    template: "%s | Arghya Das",
  },
  description:
    "Arghya Das is a software engineer and full stack developer building reliable frontend, backend, cloud, and product engineering solutions.",
  keywords: [
    "Arghya Das",
    "Software Engineer",
    "Full Stack Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "Software Developer",
    "Product Engineer",
  ],
  authors: [{ name: "Arghya Das" }],
  creator: "Arghya Das",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Arghya Das | Full Stack Software Engineer",
    description:
      "Software engineer and full stack developer building reliable frontend, backend, cloud, and product engineering solutions.",
    siteName: "Arghya Das",
  },
  twitter: {
    card: "summary",
    title: "Arghya Das | Full Stack Software Engineer",
    description:
      "Software engineer and full stack developer building reliable frontend, backend, cloud, and product engineering solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-20 sm:scroll-pt-0">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arghya Das",
              jobTitle: "Software Engineer",
              description:
                "Full stack software engineer specializing in frontend, backend, cloud, and product engineering.",
              knowsAbout: [
                "Software Engineering",
                "Full Stack Engineering",
                "Frontend Engineering",
                "Backend Engineering",
                "Product Engineering",
                "Cloud Computing",
              ],
              sameAs: [
                "https://github.com/Arghyahub",
                "https://www.linkedin.com/in/arghya-das-045702222/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
