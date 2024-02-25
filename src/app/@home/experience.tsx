import React from "react";
import experienceData from "@/data/experience-data";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center bg-white w-full min-h-[85vh]"
    >
      <div className="bg-slate-800 p-[2px] rounded-t-md h-8"></div>
      {experienceData.map((exp, ind) => (
        <div
          key={`exp${ind}`}
          className="flex flex-row justify-center w-full h-full"
        >
          <div className="flex flex-col border-3 border-red-300 w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            veniam inventore aperiam distinctio ad autem doloribus hic vel,
            excepturi quos accusamus! Tempora nobis modi natus repellat
            repudiandae. Adipisci repellendus rem fugit, dolorum odio molestias
            quos, officia, hic id eum voluptatem.
          </div>
          <div className="flex flex-col items-center">
            <p className={`${exp.emojiColor} rounded-full p-1`}>{exp.emoji}</p>
            <div className="bg-slate-800 p-[2px] h-full"></div>
          </div>
          <div className="flex flex-col border-3 border-red-300 w-1/3">
            hello
          </div>
        </div>
      ))}
      <div className="bg-slate-800 p-[2px] rounded-b-md h-"></div>
    </div>
  );
};

export default Experience;
