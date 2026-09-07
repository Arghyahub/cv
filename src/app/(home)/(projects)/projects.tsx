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
      className="flex flex-col justify-center items-center gap-10 px-5 pt-20 pb-16 w-full min-h-[85vh]"
    >
      <div className="text-center"><p className="section-label">Selected work</p><h2 className="mt-2 font-bold text-3xl md:text-4xl">Projects</h2></div>
      <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-3 max-w-3xl">
        {Category.map((cat, ind) => (
          <button
            key={`cat${ind}`}
            onClick={() => handleCategorySelect(cat)}
            className={cn(
              "hover:bg-[#313bac] hover:text-white transition-colors px-3 py-2 border border-slate-300 rounded-lg text-black text-sm capitalize",
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
      <div className="flex flex-row flex-wrap justify-center items-stretch gap-6 max-w-[1400px]">
        {allProjects.map((project, ind) => (
          <ProjectCard project={project} key={ind} />
        ))}
      </div>
      <button
        onClick={() =>
          setOffset((prev) => Math.min(prev + 4, projectApi.length))
        }
        className={cn("project-more-button", {
          "disabled opacity-80 cursor-not-allowed": disableButton,
        })}
      >
        Show more projects
      </button>
    </div>
  );
};

export default Projects;
