import React from 'react';
import '../../App.css';
import StockData from '../StockData';
import CompanyOverview from '../CompanyOverview';
import CurrencyExchangeRate from '../CurrencyExchangeRate';
import LightweightChart from '../LightweightChart';

function Home() {
    return (
        <>
            <h1>Hello World!</h1>
      <StockData />
      <CompanyOverview />
      <CurrencyExchangeRate fromCurrency={'GBP'} toCurrency={'CNY'} />
      <LightweightChart />
      {/* <SearchBox /> */}
      {/* <TickerSearch /> */}
        </>
    );
}

export default Home;