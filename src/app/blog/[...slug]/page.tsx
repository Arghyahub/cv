import React from "react";
import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";

import allBlogs, { BlogListType, BlogType } from "@/(articles)/blogs";
import { notFound, redirect } from "next/navigation";
import BLOGPATH from "@/(articles)/utils";
import BlogComp from "./blog-comp";
import dynamic from "next/dynamic";

type Props = {
  params: {
    slug: string[];
  };
};
type StaticParam = {
  slug: string[];
};

const page = async ({ params }: Props) => {
  const slug = params.slug;
  if (!slug || slug.length < 2) return notFound();
  const topicParam = slug[0],
    blogParam = slug[1];

  // const blogTopic = allBlogs.find((topic) => topic.topic === topicParam);
  const blogTopicIdx = allBlogs.findIndex(
    (topic) => topic.topic === topicParam
  );
  if (blogTopicIdx == -1) return notFound();

  const blogTopic = allBlogs[blogTopicIdx];
  const blogIdx = blogTopic.blogs.findIndex((blog) => blog.title === blogParam);
  if (blogIdx == -1) return notFound();

  const blogData = blogTopic.blogs[blogIdx];
  const content = fs.readFileSync(path.join(BLOGPATH, blogData.path), "utf-8");
  const heads = Array.from(content.matchAll(/# (.*)\r/g)).map(
    (head) => head[1]
  );
  const Component = dynamic(() =>
    import(`@/(articles)/${blogData.path}`).catch((err) => {
      return notFound();
    })
  );

  /*
  Pagination cases:
  1. If 0th topic prev page would be welcome page
  2. If 1st topic then prev page would be the first blog of prev topic
  3. If last topic then next page would be the first blog of the next topic
  4. If last blog then no next page
  */
  const pagination = {
    prev: prevPagination(blogTopicIdx, blogTopic, blogIdx),
    next: nextPagination(blogTopicIdx, blogTopic, blogIdx),
  };

  return (
    <BlogComp
      content={content}
      data={blogData}
      pagination={pagination}
      heads={heads}
      Component={Component}
    />
  );
};

export function generateStaticParams() {
  const arr: StaticParam[] = [];
  allBlogs.forEach((topic) => {
    arr.push({ slug: [topic.topic] });
    topic.blogs.forEach((blog) => {
      arr.push({ slug: [topic.topic, blog.title] });
    });
  });
  return arr;
}

function prevPagination(
  topicIdx: number,
  topic: BlogListType,
  blogIdx: number
) {
  if (topicIdx === 0 && blogIdx === 0)
    return {
      title: "Welcome",
      link: "/blog",
    };
  else if (blogIdx === 0) {
    const prevTopic = allBlogs[topicIdx - 1];
    const prevTopicLastBlog = prevTopic.blogs[prevTopic.blogs.length - 1];
    return {
      title: `${prevTopic.topic} > ${prevTopicLastBlog.title}`.replaceAll(
        "-",
        " "
      ),
      link: `/blog/${prevTopic.topic}/${prevTopicLastBlog.title}`,
    };
  } else {
    const prevBlog = topic.blogs[blogIdx - 1];
    return {
      title: prevBlog.title,
      link: `/blog/${topic.topic}/${prevBlog.title}`,
    };
  }
}

function nextPagination(
  topicIdx: number,
  topic: BlogListType,
  blogIdx: number
) {
  if (topicIdx === allBlogs.length - 1 && blogIdx === topic.blogs.length - 1)
    return {
      title: "Thank you for reading",
      link: "/",
    };
  else if (blogIdx === topic.blogs.length - 1) {
    const nextTopic = allBlogs[topicIdx + 1];
    const nextTopicFirstBlog = nextTopic.blogs[0];
    return {
      title: `${nextTopic.topic} > ${nextTopicFirstBlog.title}`,
      link: `/blog/${nextTopic.topic}/${nextTopicFirstBlog.title}`,
    };
  } else {
    const nextBlog = topic.blogs[blogIdx + 1];
    return {
      title: nextBlog.title,
      link: `/blog/${topic.topic}/${nextBlog.title}`,
    };
  }
}

export default page;
