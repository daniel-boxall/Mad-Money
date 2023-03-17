
import './App.css';
import GithubProfile from './components/GithubProfile';
import StockData from './components/StockData.js'
// import TickerSearch from './components/TickerSearch';
// import SearchBox from './components/SearchBox';
import CompanyOverview from './components/CompanyOverview';
import CurrencyExchangeRate from './components/CurrencyExchangeRate';
import LightweightChart from './components/LightweightChart.js';
import CurrencyConverter from './components/CurrencyConverter';



function App() {
  
  return (
    <div className="App">
      <h1>Hello World!</h1>
      
        <CurrencyConverter />
      
      
      <GithubProfile username={'dearbojack'} />
      <StockData />
      <CompanyOverview />
      <CurrencyExchangeRate fromCurrency={'GBP'} toCurrency={'CNY'} />
      <LightweightChart />
      {/* <SearchBox /> */}
      {/* <TickerSearch /> */}
    </div>
  );
}

export default App;
