import React from 'react';
import './App.css';
import Footer from './components/Footer.js'
import Home from './components/Pages/Home.js'
import Team from './components/Pages/Team.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='Team' element={<Team />} />
          </Routes>
          <Footer />
        </div>
      </Router>  
    </div>
  );
}

export default App;
