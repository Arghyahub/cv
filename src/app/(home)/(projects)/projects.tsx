/*pretier-ignore*/ "use client";
import React, { useEffect, useState } from "react";

import projectApi, { Category } from "@/data/project-data";
import ProjectCard from "./project-card";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [offset, setOffset] = useState(4);
  const [projectType, setprojectType] = useState<string>("all");
  const [allProjects, setAllProjects] = useState(projectApi.slice(0, 4));
  const [disableButton, setDisableButton] = useState(false);

  const handleCategorySelect = (cat: string) => {
    setprojectType(cat);
    setOffset(4);
  };

  useEffect(() => {
    let i = 0;
    const filteredProjects = projectApi.filter((project, ind) => {
      if (i > offset) return;
      if (projectType === "all") {
        i++;
        return project;
      } else if (project.category.toLowerCase() === projectType.toLowerCase()) {
        i++;
        return project;
      }
    });

    if (i > offset) {
      filteredProjects.pop();
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
    setAllProjects(filteredProjects);
  }, [projectType, offset]);

  return (
    <div
      id="projects"
      style={{ background: "#f5f5f6" }}
      className="flex flex-col justify-center items-center gap-16 pt-20 pb-10 w-full min-h-[85vh]"
    >
      <h1 className="font-bold text-3xl">Projects</h1>
      <div className="flex flex-row justify-center gap-2 md:gap-5 lg:gap-10 w-full">
        {Category.map((cat, ind) => (
          <button
            key={`cat${ind}`}
            onClick={() => handleCategorySelect(cat)}
            className={cn(
              "hover:bg-[#313bac] hover:text-white transition-colors shadow-md hover:shadow-xl px-1 py-1 lg:px-2 border border-black rounded-lg min-w-12 md:min-w-20 text-black text-xs md:text-sm lg:text-lg capitalize",
              {
                "bg-[#313bac] text-white":
                  projectType.toLowerCase() === cat.toLowerCase(),
              }
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-8 w-[90%] md:w-[85%] lg:w-[80%]">
        {allProjects.map((project, ind) => (
          <ProjectCard project={project} key={ind} />
        ))}
      </div>
      <button
        onClick={() =>
          setOffset((prev) => Math.min(prev + 4, projectApi.length))
        }
        className={cn("common-shadow bg-[#313bac] hover:bg-[#414fe6] transition-colors mx-auto px-4 py-3 rounded-lg text-white", {
          "disabled opacity-80 cursor-not-allowed": disableButton,
        })}
      >
        Show more projects
      </button>
    </div>
  );
};

export default Projects;
