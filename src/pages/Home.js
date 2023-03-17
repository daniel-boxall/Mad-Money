import React from 'react';
import '../../App.css';
import StockData from '../components/StockData';
import CompanyOverview from '../components/CompanyOverview';
import CurrencyExchangeRate from '../components/CurrencyExchangeRate';
import LightweightChart from '../components/LightweightChart';

function Home() {
    return (
        <>
            <h1>Hello World!</h1>
            <AutocompleteExample />
        </>
    );
}

export default Home;