import React from "react";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "lucide-react";
import Sidebar from "./(components)/sidebar";
import Navbar from "@/components/Navbar/navbar-home";
import allBlogs from "@/(articles)/blogs";

const Blog = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <div className="flex flex-row mt-16 w-full h-[calc(100vh-65px)]">
        <Sidebar />

        <article className="px-5 sm:px-10 lg:px-20 py-1 w-full h-full text-xl overflow-y-auto">
          <h1 className="font-medium text-3xl">Welcome developer</h1>
          <p className="mt-4">
            I have been working in computer science field for around an year and
            the best thing about the job is we always get to{" "}
            <span className="font-semibold text-cyan-700">learn</span> something
            new, <span className="font-semibold text-cyan-700">discover</span>{" "}
            tricks and techniques and{" "}
            <span className="font-semibold text-cyan-700">implement</span> them.
          </p>
          <p className="mt-2">
            But there are a few{" "}
            <span className="font-semibold text-cyan-700">challenges</span> :
          </p>
          <ol className="flex flex-col gap-1 list-inside">
            <div>
              <li>Setting up a project takes time.</li>
              <p>
                {
                  "(Deleting all the unnecessary files, setting up the config and directory takes a lot of time)"
                }
              </p>
            </div>
            <li>I can&apos;t remember everything.</li>
            <li>Searching and navigating old projects is hard.</li>
          </ol>

          <p className="mt-4">
            I came up with the solution of maintaing a blog of the most
            important things that I learn and also share it with everyone. This
            blog will contain all the important concepts, tricks and techniques
            that I learn and implement. I will also share the project setup and
            configuration that I use.
          </p>

          <p className="mt-4">
            Here are some of the topics that I have covered till now:
          </p>
          <div className="flex-flex-col border-cyan-500 bg-cyan-100 my-4 px-7 py-4 border rounded-md w-full h-auto font-medium text-cyan-700">
            <ul className="list-inside">
              {allBlogs.map((topic, index) => (
                <li key={index} className="mt-2 capitalize">
                  <Link href={`/blog/${topic.topic}/${topic.blogs[0].title}`}>
                    {topic.topic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
