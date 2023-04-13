import React from 'react'

import './Skills.scss'
import techLearn , {skillName} from './Sicon';

const Skills = () => {
  return (
    <div id='skills'>
      <h1>Skills</h1>

      <div className="skill-bar">
        {skillName.map((sName,index) => (
          <div key={`skilldiv${index}`} > <img src={sName.image} alt="icon" /> {sName.name}</div>
        ))}
      </div>

      <div className="tech-bar">
        {techLearn.map((techs,index) => (
          <div key={`techdiv-${index}`}>
            <div className="img-wrap">
              <img src={techs.image} alt="icon" />
            </div>
            <p>{techs.name}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Skills