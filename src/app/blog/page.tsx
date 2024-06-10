import React from "react";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "lucide-react";

const Blog = () => {
  return (
    <div className="flex flex-col gap-1 bg-slate-800 px-4 py-10 w-full min-h-screen text-white">
      <h1 className="text-3xl">Coming soon...</h1>
      <p className="mt-6">
        I have realised I have been forgettig methods and code and finding them
        back in old projects is a tedious task.
      </p>
      <p>
        So, I have decided to write blogs about the things I have learnt and the
        things I am learning.
      </p>

      <Link
        href={"/"}
        className="flex flex-row gap-2 bg-white mt-6 mr-auto px-2 py-1 rounded-lg"
      >
        <ArrowLeftCircleIcon className="text-black" />
        <p className="text-black">Got back</p>
      </Link>
    </div>
  );
};

export default Blog;
