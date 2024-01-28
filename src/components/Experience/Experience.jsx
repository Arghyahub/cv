import React from "react";
import "./Experience.scss";
import exp from "./ExperienceApi";

const Experience = () => {
  return (
    <div className="exp flex flex-col w-full h-full justify-center items-center" id="experience">
      <h1 className="exp-head">Experience</h1>
      <div className="exp-outer flex flex-col h-full  justify-center">
        {exp.map((elem,ind) => {
          if (ind===0) return (
            <div key={ind} className="zero-div flex flex-row h-full justify-center gap-2">
              <div className="flex flex-col left">
                <h2>{elem.role}</h2>
                <p className="exp-comp">@{elem.company}</p>
                <p>{elem.desc}</p>
                {(elem.tech.length>0) && 
                  <p>Tech: {elem.tech}</p>
                }
              </div>
              <div className="bar"></div>
              <div className="flex flex-row left items-center"><p>{elem.date}</p></div>
            </div>
          )
          else if (ind%2!==0) return (
            <div key={ind} className="exp-in flex flex-row h-full justify-center gap-2">
              <div className="flex flex-row right items-center"><p>{elem.date}</p></div>
              <div className="bar"></div>
              <div className="flex flex-col left">
                <h2>{elem.role}</h2>
                <p className="exp-comp">@{elem.company}</p>
                <p>{elem.desc}</p>
                <p>Tech: {elem.tech}</p>
              </div>
            </div>
          )
          else return (
            <div key={ind} className="exp-in flex flex-row h-full justify-center gap-2">
              <div className="flex flex-col left">
                <h2>{elem.role}</h2>
                <p className="exp-comp">@{elem.company}</p>
                <p>{elem.desc}</p>
                <p>Tech: {elem.tech}</p>
              </div>
              <div className="bar"></div>
              <div className="flex flex-row left items-center"><p>{elem.date}</p></div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Experience;
