import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';
import Publish from './components/Publish';
import Home from './components/Home';

import { DataItemsProvider } from './components/DataItemsContext';


const App = () => {
  return(

    <DataItemsProvider>
    <div>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Marketplace" element={<Marketplace />} />
          <Route path='/Publish' element={<Publish />} />
        </Routes>

    </div>
    </DataItemsProvider>

  )
}

export default App;