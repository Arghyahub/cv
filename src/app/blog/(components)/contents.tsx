import { BlogType } from "@/(articles)/blogs";
import React from "react";

type Props = {
  title: string;
  blogData: BlogType;
};

const Contents = ({ title, blogData }: Props) => {
  return (
    <div className="flex flex-col border-cyan-500 bg-cyan-100 px-4 py-2 border rounded-md w-full min-w-64 sm:min-w-72 text-cyan-700">
      <p className="font-semibold text-lg">Contents</p>
      <ul className="flex flex-col gap-1 list-disc list-inside">
        <li className="ml-2">
          <a href={`#${title}`} className="hover:underline capitalize">
            {title.replaceAll("-", " ")}
          </a>
        </li>
        {blogData.contents.map((head, index) => (
          <li key={index} className="ml-2">
            <a href={`#${head}`} className="hover:underline capitalize">
              {head}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
