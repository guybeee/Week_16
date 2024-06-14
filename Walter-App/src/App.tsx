// src/App.tsx

import React from 'react';
import ImageListComponent from './ImageList';
import Navigation from './Navitation';
import Home from './Home';
import { Contact } from './Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
      <>
        <div>
          <Navigation/>
        </div>
      </>
    );
}

export default App;



/*
      <>
        <div>
          <Navigation/>
        </div>


        <div>
          <Home/>
        </div>

        
        <div>
            <h1>Image Gallery</h1>
            <ImageListComponent />
        </div>

        <div>
          <Contact/>
        </div>
        
        <Routes>
          <Route path />
          <Route/>
        </Routes>



      </>
*/