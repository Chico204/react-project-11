import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';


const Navbar =()=>{
const [showLinks, setShowLinks] = useState(false)
const linksContainerRef = useRef(null)
const linksRef = useRef(null)
const toggleLinks = ()=>{
    setShowLinks(!showLinks)
}
 useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);


return(
    <nav className='bg-white shadow-md'>
        <div className='nav-center '>
          <div className='nav-header flex items-center justify-between px-2 py-2'>
             Code Pulse
              <button id="menu-btn" className='block hamburger md:hidden focus:outline-none' onClick={toggleLinks}>
      <span className='hamburger-top'></span>
   <span className="hamburger-middle"></span>
    <span className="hamburger-bottom"></span>

   </button>
          </div>
          <div className='links-container ' ref={linksContainerRef}>
            <ul className='links absolute  flex-col items-center hidden self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md' ref={linksRef} >
              {links.map((link)=>{
                const {id,url,text}= link
                return(
                    <li key={id}><a href={url} className=' capitalize block py-0.5 px-1 transition-300 '>{text}</a></li>
                )
              })

              }
            </ul>
          </div>
          <ul className='social-icons  '>
             {social.map((socialIcon) => {
                const{id, url, icon}= socialIcon
                return(
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                )
             })

             }
          </ul>
        </div>
    </nav>
)
}
export default Navbar