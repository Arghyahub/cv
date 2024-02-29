import React from "react";
import { Github, Eye } from "lucide-react";

import Image from "next/image";

interface Props {
  project: {
    name: string;
    category: string;
    image: string;
    desc: string;
    link: string;
    github: string;
  };
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 shadow-xl px-3 pt-6 pb-4 rounded-lg w-[275px] h-72 group">
      <div className="relative flex flex-col items-center rounded-t-lg w-full h-36">
        <Image
          src={project.image}
          width={355}
          height={200}
          alt="Project image"
          className="group-hover:opacity-50 rounded-t-lg w-full max-w-none h-full object-cover"
        />
        <p className="bottom-0 absolute flex bg-white px-2 py-1 rounded-t-lg text-slate-400 text-sm uppercase">
          {project.category}
        </p>
        <div className="group-hover:flex z-10 absolute flex-row justify-center items-center gap-2 hidden w-full h-full">
          <a href={project.github}>
            <Github className="bg-black p-1 rounded-full text-white size-6" />
          </a>
          <a href={project.link}>
            <Eye className="bg-black p-1 rounded-full text-white size-6" />
          </a>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center gap-1 py-1 w-full text-center">
        <h1 className="font-[500] text-sm">{project.name}</h1>
        <p className="text-slate-500 text-sm">{project.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
