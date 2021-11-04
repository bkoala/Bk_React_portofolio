import './reset.css';
import React, {Fragment } from  'react';

import { Navbar } from './components/Navbar';
import { Sectionheader } from './components/Sectionheader';
//import {Show} from './components/Show';
//import { Social } from './components/Social';
//import {Footer} from './components/Footer';


function App() {
  return (
    <Fragment>
     <Navbar />
     <Sectionheader />
    </Fragment>
  );
}

export default App;
