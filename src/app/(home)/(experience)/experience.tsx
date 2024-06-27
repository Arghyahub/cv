import React from "react";

import ExperienceCard from "./experience-card";
import experienceData from "@/data/experience-data";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center bg-white pt-20 pb-6 w-full min-h-[85vh]"
    >
      <h1 className="mb-14 font-semibold text-4xl">Experience</h1>
      <div className="bg-slate-800 p-[2px] rounded-t-md h-8"></div>
      {experienceData.map((exp, ind) => (
        <div
          key={`exp${ind}`}
          className="flex flex-row justify-center w-full h-full"
        >
          <div className="flex flex-col border-3 w-[45%] sm:w-2/5 md:w-1/3">
            {ind % 2 === 0 ? (
              <ExperienceCard exp={exp} />
            ) : (
              <p className="ml-auto px-3 py-1 text-[#6B7688]">{exp.date}</p>
            )}
          </div>
          <div className="flex flex-col items-center">
            <p className={`${exp.emojiColor} rounded-full px-[8px] p-[6px]`}>
              {exp.emoji}
            </p>
            <div className="bg-slate-800 p-[2px] h-full"></div>
          </div>
          <div className="flex flex-col border-3 w-[45%] sm:w-2/5 md:w-1/3">
            {ind % 2 === 0 ? (
              <p className="px-3 py-1 text-[#6B7688]">{exp.date}</p>
            ) : (
              <ExperienceCard exp={exp} />
            )}
          </div>
        </div>
      ))}
      <div className="bg-slate-800 p-[2px] rounded-b-md h-"></div>
    </div>
  );
};

export default Experience;
