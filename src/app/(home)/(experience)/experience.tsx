import React from "react";

import ExperienceCard from "./experience-card";
import experienceData from "@/data/experience-data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience-section"
    >
      <div className="section-heading-centered">
        <p className="section-label">Experience</p>
        <h2>Production engineering across the stack.</h2>
      </div>
      <div className="experience-timeline">
        {experienceData.map((exp, ind) => (
          <article key={`exp${ind}`} className="experience-item">
            <div className="experience-marker"><span>{String(ind + 1).padStart(2, "0")}</span></div>
            <div className="experience-card"><p className="experience-date">{exp.date}</p><ExperienceCard exp={exp} /></div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
