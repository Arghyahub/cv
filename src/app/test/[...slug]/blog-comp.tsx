import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

type Props = {
  // blog: string;
  blog: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

const BlogComp = ({ blog }: Props) => {
  // return <div>{JSON.stringify({ blog })}</div>;
  return <MDXRemote {...blog} source={"Hey guys"} />;
};

export default BlogComp;
