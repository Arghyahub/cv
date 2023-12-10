import React from 'react'

import './Footer.scss'

const handels = [
  {
    name: 'LinkedIn',
    image: '/images/contacts/linkedin.png',
    link: 'https://www.linkedin.com/in/arghya-das-045702222/' 
  },
  {
    name: 'Twitter',
    image: '/images/contacts/twitter.png',
    link: 'https://twitter.com/ArghyaDas04?t=y__VQeQQNNXf-9K37FJUFA&s=09' 
  },
  {
    name: 'Github',
    image: '/images/contacts/github.png',
    link: 'https://github.com/Arghyahub' 
  },
  {
    name: 'Mail',
    image: '/images/contacts/gmail.png',
    link: 'mailto:arghyadas242004@gmail.com' 
  },
]

const Footer = () => {
  return (
    <div id='contact'>
      <h1>Thank you for visiting my site</h1>
      <div className="contact-options">
        {handels.map((socials,index) => (
            <a key={`contact-a${index}`} href={socials.link}><img src={socials.image} alt="logo" /> {socials.name} </a>
        ))}
      </div>
      <p>Join me on my journey</p>
    </div>
  )
}

export default Footer