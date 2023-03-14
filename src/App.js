
import './App.css';
// import StockData from './components/StockData.js'
// import TickerSearch from './components/TickerSearch';
import CurrencyExchangeRate from './components/CurrencyExchangeRate';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <StockData /> */}
      {/* <TickerSearch /> */}
      <CurrencyExchangeRate fromCurrency={'GBP'} toCurrency={'CNY'} />
    </div>
  );
}

export default App;
