/* prettier-ignore */ 'use client'
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import tech, { skillName } from "@/data/skills-data";

const Skills = () => {
  const [ShowAll, setShowAll] = useState(false);
  return (
    <div
      id="skills"
      className="flex flex-col justify-around items-center gap-10 bg-[#edf2f8] px-6 py-10 w-full min-h-[80vh]"
    >
      <h1 className="font-bold text-3xl">Skills</h1>
      <div className="flex flex-row flex-wrap justify-center gap-6 lg:gap-20 text-nowrap">
        {skillName.map((sName, index) => (
          <div
            key={`skilldiv${index}`}
            className="flex flex-row items-center gap-2 text-lg capitalize"
          >
            <Image width={30} height={30} src={sName.image} alt="icon" />
            <p>{sName.name}</p>
          </div>
        ))}
      </div>
      {ShowAll ? (
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 my-6 w-full md:w-11/12 text-nowrap">
          {tech.map((techs, index) => (
            <div
              key={`techdiv-${index}`}
              className="flex flex-col items-center gap-2"
            >
              <div className="img-wrap">
                <Image width={60} height={60} src={techs.image} alt="icon" />
              </div>
              <p>{techs.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full md:w-5/6">
          <Marquee pauseOnHover={true} pauseOnClick={true}>
            {tech.map((techs, index) => (
              <div
                key={`techdiv-${index}`}
                className="flex flex-col justify-center items-center gap-2 w-full overflow-hidden"
              >
                <div className="flex flex-row justify-center items-center bg-white mx-4 rounded-full size-20 md:size-24 img-wrap">
                  <Image
                    width={50}
                    height={50}
                    src={techs.image}
                    alt="icon"
                    className="object-contain"
                  />
                </div>
                <p className="font-mono">{techs.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      )}

      <button
        className="my-2 text-indigo-600 text-md underline"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {ShowAll ? "Back" : "Show all"}
      </button>
    </div>
  );
};

export default Skills;
