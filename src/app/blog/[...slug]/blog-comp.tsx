import Navbar from "@/components/Navbar/navbar-home";
import React, { ComponentType } from "react";
import Sidebar from "../(components)/sidebar";
import allBlogs, { BlogType } from "@/(articles)/blogs";
import Link from "next/link";
import Contents from "../(components)/contents";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MDXProps } from "mdx/types";
import "./mdx.css";

type Props = {
  // content: MDXRemoteSerializeResult<
  //   Record<string, unknown>,
  //   Record<string, unknown>
  // >;
  content: string;
  data: BlogType;
  pagination: {
    prev: {
      title: string;
      link: string;
    };
    next: {
      title: string;
      link: string;
    };
  };
  heads: string[];
  Component: ComponentType<MDXProps>;
  pageUrl: string;
};

const BlogComp = ({ data, pagination, heads, Component, pageUrl }: Props) => {
  // const heads = Array.from(content.matchAll(/# (.*)\r/g)).map(
  //   (head) => head[1]
  // );

  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <div className="flex flex-row mt-16 w-full h-[calc(100vh-65px)]">
        <Sidebar currentPage={pageUrl} />
        <div className="flex flex-row gap-2 py-2 w-full h-[calc(100vh-65px)] overflow-y-auto">
          <article className="flex flex-col px-4 sm:px-12 md:px-7 py-1 w-full h-full text-xl">
            <div className="flex flex-row flex-wrap justify-between items-center">
              <h1
                id={`${data.title}`}
                className="font-semibold text-2xl text-cyan-800 md:text-3xl capitalize"
              >
                {data.title.replaceAll("-", " ")}
              </h1>
              <p className="text-slate-400 text-xs md:text-sm">{data.date}</p>
            </div>
            {/* <p className="mt-2">{JSON.stringify({ data: content })}</p> */}
            {/* <MDXRemote {...content} /> */}
            <div className="min-[1100px]:hidden my-2 mt-4 min-[1100px]:mt-0 rounded-md text-base">
              <Contents title={data.title} heads={heads} />
            </div>
            <div className="prose-p:my-3 mt-2 prose-figure:mt-3 prose-headings:mt-10 w-full font-monteserrat prose-headings:font-medium prose-h1:text-3xl prose-td:text-center prose lg:prose-lg">
              <Component />
            </div>
            <div className="flex flex-row justify-between gap-6 mt-auto py-4 pt-4 w-full">
              <Link
                href={pagination.prev.link}
                className="flex flex-col border-cyan-500 bg-cyan-100 px-4 py-2 border rounded-md w-full lg:max-w-52 h-20 text-cyan-700 text-sm md:text-lg"
              >
                <p className="flex flex-row items-center -ml-2 font-medium">
                  <ChevronLeft />
                  Prev
                </p>
                <p className="text-ellipsis text-sm md:text-lg capitalize whitespace-nowrap overflow-hidden">
                  {pagination.prev.title}
                </p>
              </Link>
              <Link
                href={pagination.next.link}
                className="flex flex-col border-cyan-500 bg-cyan-100 px-4 py-2 border rounded-md w-full lg:max-w-52 h-20 text-cyan-700 text-sm md:text-lg"
              >
                <p className="flex flex-row items-center font-medium">
                  Next <ChevronRight />
                </p>
                <p className="text-ellipsis text-sm md:text-lg capitalize whitespace-nowrap overflow-hidden">
                  {pagination.next.title}
                </p>
              </Link>
            </div>
          </article>
          <div className="min-[1100px]:block top-0 sticky hidden p-2 pr-4">
            <Contents title={data.title} heads={heads} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComp;