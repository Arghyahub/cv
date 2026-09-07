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
    <div className="experience-card-content">
      <h3>{exp.title}</h3>
      <p className="experience-company">{exp.company}</p>
      <p className="experience-description">{exp.description}</p>
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
