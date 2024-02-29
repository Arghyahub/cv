import React from "react";
import AccordianComp from "@/components/Accordion/accordion-comp";

interface Props {
  exp: {
    emoji: string;
    emojiColor: string;
    title: string;
    company: string;
    date: string;
    description: string;
    tech: string;
  };
}

const ExperienceCard = ({ exp }: Props) => {
  return (
    <div className="flex flex-col mb-16 px-4 w-full h-full">
      <h1 className="font-semibold text-md md:text-lg">{exp.title}</h1>
      <p className="mb-4">@{exp.company}</p>
      <p className="text-sm md:text-base">{exp.description}</p>
      {exp.tech.length > 0 && (
        // <p className="mt-2 text-sm md:text-base">
        //   <b>Tech:</b> {exp.tech}
        // </p>
        <AccordianComp
          data={[{ buttonText: "Tech", content: exp.tech }]}
          buttonClassName="justify-start text-indigo-600"
        />
      )}
    </div>
  );
};

export default ExperienceCard;
