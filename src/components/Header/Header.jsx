import React from 'react'

import './Header.scss'

const Header = () => {
  return (
    <div id="home">
      <div className="home-para">
        <div>
          <p>Hi, I am</p>
          <h1>👋Arghya</h1>
        </div>
      </div>
      <div className="home-img">
        <img src="images/homeimg.png" alt="homeimg" />
      </div>
      
      <div className="home-icons">

        <div className="home-icon-wrap">
          <div id='logo1'>
            <img src="images/mongodb.png" alt="logo1" />
          </div>
          <div id='logo2' >
            <img src="images/expressjs.png" alt="logo2" />
          </div>
        </div>
        <div className="home-icon-wrap">
          <div id='logo3'>
            <img src="images/reactjs.png" alt="logo4" />
          </div>
          <div id='logo4'>
            <img src="images/nodejs.png" alt="logo3" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header