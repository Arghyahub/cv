import path from "path";
export interface BlogType {
  title: string;
  date: string;
  path: string;
  desc: string;
}

export interface BlogListType {
  topic: string;
  blogs: BlogType[];
}

const allBlogs: BlogListType[] = [
  {
    topic: "setup",
    blogs: [
      {
        title: "react",
        desc: "How to setup a reactjs project using vite.",
        path: "setup/react.mdx",
        date: "05-07-2024",
      },
    ],
  },
];

export default allBlogs;
