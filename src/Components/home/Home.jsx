import React from 'react'
import Hero from './hero/Hero'
import './Home.css'
import AboutCard from '../about/AboutCard'
import Programcard from '../Program/Programcard'
import Onlineprogram from '../Program/Onlineprogram'
import Contactadd from '../contact/contactadd'
const Home = () => {
  return (
    <>
       <Hero/>
       <AboutCard/>
       <Programcard/>
       <Onlineprogram/>
       <Contactadd/>
       
       
       
    </>
  )
}

export default Home