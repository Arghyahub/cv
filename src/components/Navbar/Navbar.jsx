import React , {useState} from 'react'
import {HiMenuAlt4,HiX} from 'react-icons/hi' ;
import { motion } from 'framer-motion'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div id='navbar'>

      <div className="navbar-logo">
        <img src="images/wings.png" alt="❄️" />
        <p>Arghya</p>
        <img id='reverse-img' src="images/wings.png" alt="❄️" />
      </div>

      <ul className="navbar-ul">
        {['home','about','projects','skills','contact'].map((item,index)=>(
          <a href={`#${item}`}>
            <li key={`navli${index}`}>{item}</li>
          </a>
        ))}
      </ul>

      {/* Mobile Section */}

      <div className="navbar-mob">
        <HiMenuAlt4 onClick={()=> setToggle(true)} />
        { toggle && (
            <motion.div
              whileInView={{x:[200,0]}}
              transition={{duration:0.85,ease:'easeOut'}}
              >
                
              <HiX onClick={()=> setToggle(false)} />
              <ul>
                {['home','about','projects','skills','contact'].map((item)=>(
                  <li key={item}>
                      <a href={`#${item}`} onClick={()=> setToggle(false)} >{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) }
      </div>

    </div>
  )
}

export default Navbar