import React from "react";

type Props = {
  heads: string[];
};

const Contents = ({ heads }: Props) => {
  return (
    <div className="flex flex-col border-cyan-500 bg-cyan-100 px-4 py-2 border rounded-md w-full min-w-64 sm:min-w-72 text-cyan-700">
      <p className="font-semibold text-lg">Contents</p>
      <ul className="flex flex-col gap-1 list-disc list-inside">
        {heads.map((head, index) => (
          <li key={index} className="ml-2">
            <a
              href={`#${head.replaceAll(" ", "-")}`}
              className="hover:underline capitalize"
            >
              {head}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
