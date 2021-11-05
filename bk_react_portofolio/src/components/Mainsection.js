import React from 'react'
import Project1 from '../images/project-1.png'
import Project2 from '../images/project-2.png'
import Weather from '../images/weather.png'


export const Mainsection = () => {
    return (
    <div>     
        <article id="aboutme">
        <section  class="grid-container">
           <div  class="grid-item1">
            <h1 class="p1" >About <br/><span class="p2">Me</span></h1>
            </div>
            <div  class="grid-item2">
             <p>
                Engineer with experience that includes project magnagement , and ability to work with clients
                to gather requirements and implement complete projects in provided timelines.  
                </p>
               <p>Experience in Frontend Web development, with skills that includes programming
                   in html, css and Javascript.  Worked with Bootstrap and foundation frameworks.
               </p>
               <p>Experience with server end programming language and databases such as Php and Mysql</p>
                <p>
                My background also includes the use of software for analysis, design of wireless systems and RF propagation studies.  Very knowledgeable of FCC rules and regulations, and the license acquisition process.  
                Lead multiple projects for acquisition of tools 
                and equipment used in RF measurement systems. I also led the analysis, design and implementation of software tools and systems used for data collection. 
            </p>
            </div>
        </section>
       </article> 
       <article id="portofiolo">
       <section  class="grid-container">
           <div  class="grid-item1">
            <h1 class="p1" >Work </h1>
            </div>
            <div  class="grid-item2">
                <div class="row">
                    
                    <div class="column1 zoom">   
                       
                        <a href="https://jheckel-dev.github.io/signs-and-events/"> 
                           
                            <img src={Project1} alt="db" />
                        </a>
                        
                               
             <p id="absolutework" >Signs and Events Application<br />
            <span class="p3">Javascript,css,html,foundation</span>
            </p>
   
            </div>
            </div>
              <div class="row">
                <div class="column2 zoom">              
                   <a href="https://bkoala.github.io/City_weather_dashbard/"> <img src={Weather} alt="City Weather Finder" /></a>     
 
               <p id="absolutework" >City Weather<br />
                <span class="p3">Javascript,Api,Storage</span>
                </p>
               </div>               
               <div class="column3 zoom">
                <a href="https://npems2.herokuapp.com/"><img  src={Project2}  alt="Non Profit project Management system" />   </a>
                <p id="absolutework" >Non profit management System <br />
                    <span class="p3">Jquery,Api,Css,ORM,Mysql</span>
                </p>
             </div>
             </div>            
            </div>
        </section>
       </article>
     
       <article id="contactme">
        <section  class="grid-container">
           <div  class="grid-item1">
            <h1 class="p1" >Contact <br/><span class="p2">Me</span></h1>
            </div>
            <div  class="grid-item2">
                <bfooter>
                    <nav>
                        <ul>
                            <li>
                            <a href="#">206.784.8923</a>
                            </li>
                            <li>
                                <a href="mailto:ben.koala123@gmail.com">Email</a>
                            </li>
                            <li>
                                <a href="https://www.github.com/bkoala">Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ben-k-5918917/">Linkedin</a>
                            </li>
                        </ul>
                    </nav>
                </bfooter>
            </div>
        </section>
       </article>


        </div>
    )
}
