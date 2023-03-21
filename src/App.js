import React from 'react';
// import Footer from './components/Footer.js'
import Home from './pages/Home';
import Team from './pages/Team';
import Currency from './pages/Currency';


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
              <Route path='Currency' element={<Currency />} />
          </Routes>
        </div>
        {/* <Footer/> */}
      </Router>  
    </div>
  );
}

export default App;
