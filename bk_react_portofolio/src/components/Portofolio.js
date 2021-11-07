import React from 'react'
import Project1 from '../images/project-1.png'
import Project2 from '../images/project-2.png'
import Weather from '../images/weather.png'
import Tracker from '../images/Tracker.png'
import Scheduler from '../images/scheduler.png'
import Css1 from '../images/css1.png'

export const Portofolio = () => {
    return (
        <div>
             
         <section class="grid-container">
         <div  class="grid-item">
               <div class="row">
               <h1  >Portofiolo </h1> 
               </div>
            </div>
        </section>
         <section  class="grid-container">
            <div  class="grid-item">
           <div class="row">
                <a href="https://bkoala.github.io/City_weather_dashbard/"> 
                <img src={Weather} alt="City Weather Finder" /></a>     
            </div>
            </div>
            <div  class="grid-item">
                <div class="row">
                <a href="https://jheckel-dev.github.io/signs-and-events/">                        
                <img src={Project1} alt="db" />
                 </a>
                </div>
             </div>
        </section>
        <section  class="grid-container">
           <div  class="grid-item">
           <div class="row">
                <a href="https://radiant-retreat-43140.herokuapp.com/?id=616f856c408d9e0016e1294c"> 
                <img src={Tracker} alt="Fitness tracker" /></a>     
            </div>
            </div>
            <div  class="grid-item">
                <div class="row">
                <a href="https://npems2.herokuapp.com/">                                 
                <img src={Project2} alt="db" />
                 </a>
                </div>
             </div>
        </section>
        <section  class="grid-container">
           <div  class="grid-item">
           <div class="row">
                <a href="https://bkoala.github.io/Css_style/"> 
                <img src={Css1} alt="Css style" /></a>     
            </div>
            </div>
            <div  class="grid-item">
                <div class="row">
                <a href="https://bkoala.github.io/Bkworkday_scheduler/">                                 
                <img src={Scheduler} alt="Scheduler " />
                 </a>
                </div>
             </div>
        </section>

       
</div>
    )
}

