import React from 'react';
import './App.css';
import AutocompleteExample from './components/Autocomplete';
// import AutocompleteField from './components/Autocomplete';
// import GithubProfile from './components/GithubProfile';
// import StockData from './components/StockData.js'
// // import TickerSearch from './components/TickerSearch';
// // import SearchBox from './components/SearchBox';
// import CompanyOverview from './components/CompanyOverview';
// import CurrencyExchangeRate from './components/CurrencyExchangeRate';
// import LightweightChart from './components/LightweightChart.js';
// import AutocompleteExample from './components/Autocomplete';
import HelloWorld from './components/TestDotEnv';
import Footer from './components/Footer.js'
import Home from './components/Pages/Home.js'
import Team from './components/Pages/Team.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TickerSearch from './components/TickerSearch';
// import SearchBox from './components/SearchBox';



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
