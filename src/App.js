
import './App.css';
// import AutocompleteField from './components/Autocomplete';
// import GithubProfile from './components/GithubProfile';
// import StockData from './components/StockData.js'
// // import TickerSearch from './components/TickerSearch';
// // import SearchBox from './components/SearchBox';
// import CompanyOverview from './components/CompanyOverview';
// import CurrencyExchangeRate from './components/CurrencyExchangeRate';
// import LightweightChart from './components/LightweightChart.js';
import AutocompleteExample from './components/Autocomplete';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <AutocompleteExample />
      {/* <GithubProfile username={'dearbojack'} />
      <StockData />
      <CompanyOverview />
      <CurrencyExchangeRate fromCurrency={'GBP'} toCurrency={'CNY'} />
      <LightweightChart /> */}
      {/* <SearchBox /> */}
      {/* <TickerSearch /> */}
    </div>
  );
}

export default App;
