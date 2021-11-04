import React from 'react'

export const Navbar = () => {
    return (
        <div>
         <header> 
         <h1>  Bertin Koala </h1>
             <nav className="cf">
                 <ul className="cf">
                     <li className="hide-on-small">
                         <a href="#aboutme" className="bold">About me</a>
                    </li>
                    <li className="hide-on-small">
                         <a href="#work" className="bold">Work</a>
                    </li>
                    <li className="hide-on-small">
                         <a  href="#contactme" className="bold">Contact me</a>
                     </li>
                     <li>  <a href="BK_software.pdf">Resume</a></li>
                 </ul>
               
             </nav>
         </header>

        </div>
    )
}
