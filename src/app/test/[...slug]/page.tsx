import BLOGPATH, { FILEPATH } from "@/(articles)/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import path from "path";
// import mdxcomp from "../../../(articles)/";

type StaticParam = {
  slug: string[];
};

export default async function Home() {
  const Component = dynamic(() =>
    import("@/(articles)/love-me-thora.mdx").catch((err) => {
      return notFound();
    })
  );
  return (
    <div className="prose lg:prose-lg prose-td:text-center">
      <Component />
    </div>
    // <MDXRemote
    //   source={`# Hello World

    //   This is from Server Components!
    //   `}
    //   options={{
    //     mdxOptions: {
    //       remarkPlugins: [],
    //       rehypePlugins: [],
    //     },
    //   }}
    // />
  );
}

export function generateStaticParams() {
  return [{ slug: ["react", "react-hooks"] }];
}
