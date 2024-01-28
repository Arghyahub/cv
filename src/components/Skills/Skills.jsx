import React, { useState } from 'react'
import Marquee from "react-fast-marquee";

import './Skills.scss'
import techLearn , {skillName} from './Sicon';

const Skills = () => {
  const [ShowAll, setShowAll] = useState(false);
  return (
    <div id='skills'>
      <h1>Skills</h1>

      <div className="skill-bar">
        {skillName.map((sName,index) => (
          <div key={`skilldiv${index}`} > <img src={sName.image} alt="icon" /> {sName.name}</div>
        ))}
      </div>

      {ShowAll? (
        <div className="tech-bar" style={{flexWrap: 'wrap', gap: '1.5rem', width: '90%'}}>
          {techLearn.map((techs,index) => (
            <div key={`techdiv-${index}`} className='allexp'>
              <div className="img-wrap">
                <img src={techs.image} alt="icon" />
              </div>
              <p>{techs.name}</p>
            </div>
          ))}
        </div>
      ):(
        <div className="tech-bar">
        <Marquee pauseOnHover={true} pauseOnClick={true} >
          {techLearn.map((techs,index) => (
            <div key={`techdiv-${index}`} className='techdiv'>
              <div className="img-wrap">
                <img src={techs.image} alt="icon" />
              </div>
              <p>{techs.name}</p>
            </div>
          ))}
        </Marquee>
        </div>
      )}

      <h3 onClick={()=> setShowAll(prev => !prev)} className='togglebtn' >{ShowAll?'Back':'Show All'}</h3>

    </div>
  )
}

export default Skills