import React from 'react'
import Head from './Head'
import "./header.css"
import {Link} from "react-router-dom";
import { useState } from 'react';
const Header = () => {
  const[click, setClick]=useState(false)
  return (
    <>
      <Head/>
      <header>
        <nav className='flexSB'>
            <ul className={click? "mobile-nav": "flexSBBB"} onClick={()=>setClick(false)}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/program">Program</Link></li>
              <li><Link to="/contact">Contact us</Link></li>

            </ul>
            <div className="start">
              <div className="button">GET CERTIFICATE</div>
            </div>
            <button className='toggle' onClick={()=>setClick(!click)}>
              {click? <i className='fa fa-times'></i>:<i className='fa fa-bars'></i>}
            </button>
          </nav>
        </header>
       
    </>
  )
}
export default Header