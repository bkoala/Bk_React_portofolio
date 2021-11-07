import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './reset.css';


import { Navbar}  from './components/Navbar';
import { Socialmedia } from './components/Socialmedia';
import {Footer} from './components/Footer';
import {Portofolio} from './components/Portofolio';
import About from './components/About';
import Contactme from './components/Contactme';
import Resume from './components/Resume';
import Error from './components/Error';

 
class App extends Component {
  render() {
    return ( <div>     
        <Router>
           <div>
           <Navbar />         
            <Routes>
            <Route exact path="/" element={<About />}/>
            <Route exact path="/portofolio" element={<Portofolio />}/>
             <Route exact path="/contactme" element={<Contactme />}/>
             <Route exact path="/resume" element={< Resume />}/>
            <Route component={Error}/>
            </Routes>
            </div> 
           <Socialmedia />
           <Footer />
           </Router>
           </div>
           
    );
  }
}
 
export default App;
