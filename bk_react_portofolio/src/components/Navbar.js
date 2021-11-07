import React from 'react'
import { Link} from 'react-router-dom';

export const Navbar = () => {

    return (
        <div>
         <header> 
         <h1>  Bertin Koala </h1>
       
             <nav >
                 <ul >
                     <li >
                         <Link to="/" >About me</Link>
                    </li>
                    <li >
                    <Link to="/portofolio" >Portofolio</Link>
                    </li>
                    <li >
                    <Link to="/contactme" >Contact me</Link>
                     </li>
                     <li>  <Link to="/resume">Resume</Link></li>
                 </ul>
               
             </nav>
             
         </header>

        </div>
    )
}
