
import './App.css';
// import GithubProfile from './components/GithubProfile';
// import StockData from './components/StockData.js'
// import TickerSearch from './components/TickerSearch';
// import SearchBox from './components/SearchBox';
import CompanyOverview from './components/CompanyOverview';
// import CurrencyExchangeRate from './components/CurrencyExchangeRate';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <GithubProfile username={'DJ-86'} /> */}
      {/* <StockData /> */}
      <CompanyOverview />
      {/* <CurrencyExchangeRate fromCurrency={'GBP'} toCurrency={'CNY'} /> */}
    </div>
  );
}

export default App;
