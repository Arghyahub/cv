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
        path: "./setup/react.mdx",
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
        path: "./setup/express.mdx",
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
      {
        title: "prisma",
        desc: "How to setup a prisma project in javascript or typescript and setup SQL or NoSQL databases.",
        path: "./setup/prisma.mdx",
        date: "08-07-2024",
        contents: [
          "basic-project-setup-",
          "prisma-setup",
          "database-connection",
          "query-database-with-prisma-client",
          "sql-vs-nosql-and-docker-images",
        ],
      },
    ],
  },
  {
    topic: "react",
    blogs: [
      {
        title: "how-reactJs-works",
        desc: "What is reactJs, how does reactJs work and why reactJs is so special. What is virtual dom and how reconciliation works.",
        path: "./reactjs/how-reactJs-works.mdx",
        contents: ["components", "virtual-dom", "reconciliation"],
        date: "13-07-2024",
      },
      {
        title: "learn-reactJs",
        desc: "How to learn reactJs, Learn reactJs from beginner to advance level. Learn reactJs hooks, states, props, context, optimization, etc.",
        path: "./reactjs/learn-react.mdx",
        contents: [
          "new-to-reactjs",
          "handling-events",
          "states-and-props",
          "more-hooks",
          "miscellaneous",
          "optimizations",
          "expanding-knowledge",
        ],
        date: "15-07-2024",
      },
      {
        title: "learn-react-router",
        desc: "How to learn react-router, Learn react-router from beginner to advance level. Learn react-router hooks, how to change pages programmatically, setup react-router.",
        path: "./reactjs/react-router-dom.mdx",
        contents: [
          "setup",
          "navigating-between-routes",
          "url-parameters",
          "query-parameters",
          "programmatic-navigation",
          "handling-404-pages",
        ],
        date: "31-08-2024",
      },
      {
        title: "Learn-how-to-use-Zustand",
        desc: "How to use Zustand in reactJs, Learn Zustand from beginner to advance level. Learn Zustand hooks, how to change states programmatically, setup Zustand.",
        path: "./reactjs/zustand.mdx",
        contents: [
          "setup",
          "retrieving-state-and-updating-state",
          "immer-middleware",
          "persistent-states",
        ],
        date: "31-08-2024",
      },
      {
        title: "ReactHookForm-and-Zod",
        desc: "How to use ReactHookForm and Zod in reactJs, Learn ReactHookForm and Zod from beginner to advance level. Learn ReactHookForm hooks, how to validate forms, setup ReactHookForm.",
        path: "./reactjs/react-hook-form-and-zod.mdx",
        contents: [
          "setup",
          "usage",
          "steps",
          "handling-server-errors",
          "handling-submitting-state",
          "showing-custom-error-messages",
          "conclusion",
        ],
        date: "03-09-2024",
      },
    ],
  },
  {
    topic: "Backend",
    blogs: [
      {
        title: "Why-Backend",
        desc: "What is backend development, how to learn backend development, what are the best backend technologies, how to setup a backend project.",
        path: "./backends/how-backend-works.mdx",
        contents: [
          "why-do-we-need-a-backend?",
          "handling-business-logic",
          "database-and-data-management",
          "communication-with-other-services",
          "security",
          "scalability-and-integrations",
        ],
        date: "24-11-2024",
      },
      {
        title: "Working-with-Databases",
        desc: "Learn databases from beginner to advance level. Learn databases types, how to setup a database, how to connect a database with backend.",
        path: "./backends/working-with-database.mdx",
        contents: [
          "what-is-a-database",
          "types-of-databases",
          "btw-what-is-an-orm",
          "creating-a-table",
          "crud-operations",
          "keys-in-dbms",
          "relationships-in-dbms",
        ],
        date: "26-11-2024",
      },
      {
        title: "What-is-an-API",
        desc: "Learn ExpressJs from beginner to advance level. Learn ExpressJs middlewares, routes, controllers, models, services, etc.",
        path: "./backends/learn-expressjs.mdx",
        contents: [
          "structure-of-an-api",
          "api-request",
          "api-response",
          "conclusion",
        ],
        date: "28-11-2024",
      },
    ],
  },
];

export default allBlogs;
