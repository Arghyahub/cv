export interface BlogType {
  title: string;
  date: string;
  path: string;
  sectionIds: string[];
}

export interface BlogListType {
  topic: string;
  blogs: BlogType[];
}

const allBlogs: BlogListType[] = [
  {
    topic: "react",
    blogs: [
      {
        title: "react-hooks",
        date: "2021-01-01",
        path: "love-me-thora.mdx",
        sectionIds: ["react-hooks-1", "react-hooks-2"],
      },
      {
        title: "react-hooks",
        date: "2021-01-01",
        path: "love-me-thora.mdx",
        sectionIds: ["react-hooks-1", "react-hooks-2"],
      },
      {
        title: "react-hooks",
        date: "2021-01-01",
        path: "love-me-thora.mdx",
        sectionIds: ["react-hooks-1", "react-hooks-2"],
      },
    ],
  },
  {
    topic: "react",
    blogs: [
      {
        title: "react-hooks",
        date: "2021-01-01",
        path: "love-me-thora.mdx",
        sectionIds: ["react-hooks-1", "react-hooks-2"],
      },
      {
        title: "react-hooks",
        date: "2021-01-01",
        path: "love-me-thora.mdx",
        sectionIds: ["react-hooks-1", "react-hooks-2"],
      },
    ],
  },
];

export default allBlogs;
