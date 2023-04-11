import React from 'react'

import './About.scss'

const About = () => {
  return (
    <div id="about">

      <div className="about-img-div">
        <img src="images/aboutimg.jpg" alt="Aboutimg" />
        <div className="about-text">
          <h2>About me</h2>
          <p>I'm originally from Assam, Currently I'm persuing Bachelor of Technology in Computer Science Engineering from Netaji Subhash Engineering College . In my free time I like to travel, explore new places and sharing a cup of tea with a fascinating stranger is one of my life's true delights.</p>
          <a href="https://drive.google.com/drive/folders/1bOjPGMVNdS-mNNPoDJjgsVwO7kYEFk9m">Download Resume</a>
        </div>
      </div>

    </div>
  )
}

export default About