import allBlogs from "@/(articles)/blogs";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {
  params: {
    slug: string[];
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

function formatTitle(title: string) {
  return title
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function toIsoDate(date: string) {
  const [day, month, year] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toISOString();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params;
  if (!slug || slug.length < 2)
    return {
      title: "404",
      description: "Not found",
    };
  const topicParam = slug[0],
    blogParam = slug[1];

  // find blog data
  const blogTopic = allBlogs.find((topic) => topic.topic === topicParam);
  if (!blogTopic)
    return {
      title: "404",
      description: "Not found",
    };
  const blogData = blogTopic.blogs.find((blog) => blog.title === blogParam);
  if (!blogData)
    return {
      title: "404",
      description: "Not found",
    };

  const title = formatTitle(blogData.title);
  const articleUrl = siteUrl
    ? `${siteUrl}/blog/${encodeURIComponent(topicParam)}/${encodeURIComponent(blogParam)}`
    : undefined;

  return {
    title,
    description: blogData.desc,
    ...(articleUrl ? { alternates: { canonical: articleUrl } } : {}),
    openGraph: {
      type: "article",
      title: `${title} | Arghya Das`,
      description: blogData.desc,
      ...(articleUrl ? { url: articleUrl } : {}),
      publishedTime: toIsoDate(blogData.date),
      authors: ["Arghya Das"],
    },
    twitter: {
      card: "summary",
      title: `${title} | Arghya Das`,
      description: blogData.desc,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={montserrat.className}>{children}</main>
    </>
  );
}
