// src/App.tsx
import './App.css'
import React from 'react';
// ImageList not working as intended 
import ImageListComponent from './ImageList';
import Navigation from './Navitation';
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

