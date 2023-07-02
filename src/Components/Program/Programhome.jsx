import React from 'react'
import Back from '../common/back/Back'
import Programcard from './Programcard'
import Onlineprogram from './Onlineprogram'
import Footer from '../common/footer/footer'



const Programhome = () => {
  return (
    <>
    <Back title='Explore Courses'/>
   <Programcard/>
   <Onlineprogram/>
   
    </>
  )
}

export default Programhome