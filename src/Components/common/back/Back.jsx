import React from 'react'
import { useLocation } from 'react-router';
import aboutimg from "../../../../src/assets/about.png"

const Back  = ( { title } ) => {
    const location = useLocation();
  return (
    <div className='aboutus'>
        <section className="back">
            <div className="text">
            <h2>Home/{location.pathname.split("/")[1]}</h2>
            <h1>{ title }</h1>
            </div>
      </section>
        <div className="container1">
            <img src={aboutimg} alt="imgpng" />
        </div>
        <div className="marigin">

        </div>
    </div>
  )
}

export default Back 
