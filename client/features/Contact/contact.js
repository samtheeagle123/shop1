import React from 'react'
import { SiRabbitmq, SiEagle } from 'react-icons/si'
import { GiFlatfish } from 'react-icons/gi'
import { RiAliensFill } from 'react-icons/ri'
import '../style/contact.css'
import { IconContext } from "react-icons";

export const Contact = () => {
  return (
    <div className='wrapper'>
      <IconContext.Provider value={{ className: "icons" }}>
        <div className='card'>
        <SiRabbitmq />
        </div>
        <div className='card'>
        <GiFlatfish />  
        </div>
        <div className='card'>
        <SiEagle />
        </div>
        <div className='card'>
        <RiAliensFill />
        </div>
      </IconContext.Provider>
    </div>
  )
}


export default Contact;