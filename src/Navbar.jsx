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
          <div className='nav-header flex items-center justify-between p-3 '>
            <h1 > Code <span>Pulse</span> </h1>
               <button className='nav-toggle md:hidden' onClick={toggleLinks}>
            <FaBars />
          </button>
          </div>
          <div className='links-container  h-0 block overflow-hidden  ' ref={linksContainerRef}>
            <ul className='links ' ref={linksRef} >
              {links.map((link)=>{
                const {id,url,text}= link
                return(
                    <li key={id} className=' capitalize block py-0.5 px-1 text-center '><a href={url} >{text}</a></li>
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
                        <a className='p-5' href={url}>{icon}</a>
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