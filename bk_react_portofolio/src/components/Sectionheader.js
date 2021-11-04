import React from 'react'
import Profileimage from '../images/BK12.jpg'

export const Sectionheader = () => {
    return (
        <div>
      <section class="hero">
     <div id="relative-box">
      <p id="absolutep" >Full Stack Web Developer !</p>
      </div>
      <img src={Profileimage}  alt="Profile image" /> 
   </section>
</div>
    )
}

