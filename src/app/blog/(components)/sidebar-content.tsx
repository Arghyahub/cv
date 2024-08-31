"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import allBlogs from "@/(articles)/blogs";
import Link from "next/link";

type Props = {
  styleTW?: string;
  currentPage: string;
};

const SidebarContent = ({ styleTW = "", currentPage }: Props) => {
  const contentRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (contentRef && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [contentRef]);

  return (
    <div
      className={cn(
        "block border-r-2 min-w-60 lg:w-72 h-full overflow-y-auto pr-2 pl-4",
        styleTW
      )}
    >
      <Accordion
        type="multiple"
        defaultValue={allBlogs.map((_, index) => `item-${index}`)}
        className="w-full"
      >
        <Link
          href="/blog"
          className={cn(
            "flex hover:bg-slate-100 px-2 py-[15px] rounded-md w-full font-medium capitalize",
            { "bg-cyan-100": currentPage === "welcome" }
          )}
        >
          Welcome
        </Link>
        {allBlogs.map((topic, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="hover:bg-slate-100 px-2 rounded-md capitalize">
              {topic.topic.replaceAll("-", " ")}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-1">
              {topic.blogs.map((blog, index) => (
                <Link
                  key={index}
                  href={`/blog/${topic.topic}/${blog.title}`}
                  ref={
                    currentPage === `${topic.topic}/${blog.title}`
                      ? contentRef
                      : null
                  }
                  className={cn("hover:bg-slate-50 ml-3 px-2 py-3 capitalize", {
                    "bg-cyan-100":
                      currentPage === `${topic.topic}/${blog.title}`,
                  })}
                >
                  {blog.title.replaceAll("-", " ")}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SidebarContent;
