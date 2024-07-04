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
    topic: "react",
    blogs: [
      {
        title: "react-hooks",
        date: "2021-01-01",
        path: "love-me-thora.mdx",
        desc: "This is a blog about react hooks",
      },
    ],
  },
];

export default allBlogs;
