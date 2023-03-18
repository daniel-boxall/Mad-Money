import React from 'react';
import '../../App.css';
import StockData from '../StockData';
import CompanyOverview from '../CompanyOverview';
import CurrencyExchangeRate from '../CurrencyExchangeRate';
import LightweightChart from '../LightweightChart';
import CurrencyProvider from '../context/CurrencyContext';
import CurrencyConverter from '../CurrencyConverter';
import AutocompleteExample from '../Autocomplete';

function Home() {
    return (
        <>
        <CurrencyProvider>
            <CurrencyConverter />
        </CurrencyProvider>
            <AutocompleteExample />
      {/* <SearchBox /> */}
      {/* <TickerSearch /> */}
        </>
    );
}

export default Home;