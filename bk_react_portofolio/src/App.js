import './reset.css';
import React, {Fragment } from  'react';

import { Navbar } from './components/Navbar';
import { Sectionheader } from './components/Sectionheader';
import { Mainsection } from './components/Mainsection';
import {Footer} from './components/Footer';



function App() {
  return (
    <Fragment>
     <Navbar />
     <Sectionheader />
     <Mainsection />
     <Footer />
    </Fragment>
  );
}

export default App;
