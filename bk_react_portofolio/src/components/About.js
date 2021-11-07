import React from 'react'
import Profileimage from '../images/BK12.jpg'
import '../index.css';

const About = () => {
    return (
    <div>     
        <article id="aboutme">
        <img className="imgr" src={Profileimage} alt="Info for owner"/> 
        <section  >
        <h1 >About Me</h1><br/>
           <div >
             <p >
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
        <br/>
        <br/>
       </article> 
       
        </div>
    )
};
export default About;