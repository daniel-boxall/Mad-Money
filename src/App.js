import React from 'react';
import './index.css'
import Home from './pages/Home';
import Team from './pages/Team';
import Currency from './pages/Currency';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/globalUi/nav/Navbar.js';

function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='Team' element={<Team />} />
              <Route path='Currency' element={<Currency />} />
          </Routes>
        </div>
      </Router>  
    </div>
  );
}

export default App;
