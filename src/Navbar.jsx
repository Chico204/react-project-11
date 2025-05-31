import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';


const Navbar =()=>{
const [showLinks, setShowLinks] = useState(false)
const linksContainerRef = useRef(null)
const linksREf = useRef(null)
const toggleLinks = ()=>{
    setShowLinks(!showLinks)
}


return(
    <nav>
        <div className='nav-center'>
          <div className='nav-header'>
             Code Pulse
              <button id="menu-btn" class=" block hamburger md:hidden focus:outline-none ">
      <span class="hamburger-top"></span>
   <span class="hamburger-middle"></span>
    <span class="hamburger-bottom"></span>

   </button>
          </div>
          <div className='links-container'>
            <ul className='links'>
              {links.map((link)=>{
                const {id,url,text}= link
                return(
                    <li key={id}><a href={url}>{text}</a></li>
                )
              })

              }
            </ul>
          </div>
        </div>
    </nav>
)
}
export default Navbar