export interface BlogType {
  title: string;
  date: string;
  path: string;
  desc: string;
  contents: string[];
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
        desc: "How to setup a reactjs project in javascript or typescript using vite and setup tailwind, zustand, shadcn and react router.",
        path: "setup/react.mdx",
        date: "05-07-2024",
        contents: [
          "continue-with-setup",
          "typescript-settings",
          "important-packages",
          "tailwind-css",
          "react-router",
          "zustand",
          "shadcn-ui",
        ],
      },
      {
        title: "express",
        desc: "How to setup an express project in javascript or typescript and setup mongoDB, Prisma and Graphql.",
        path: "setup/express.mdx",
        date: "08-07-2024",
        contents: [
          "continue-installation",
          "typescript",
          "configuring-orms",
          "mongoose",
          "prisma",
          "conclusion",
        ],
      },
    ],
  },
];

export default allBlogs;
