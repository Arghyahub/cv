import allBlogs from "@/(articles)/blogs";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {
  params: {
    slug: string[];
  };
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

  return {
    title: blogData.title,
    description: blogData.desc,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={montserrat.className}>{children}</main>
    </>
  );
}
