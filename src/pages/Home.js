import React from 'react';
import AutocompleteExample from '../components/Autocomplete';
import CurrencyConverter from '../components/CurrencyConverter';
import CurrencyProvider from '../components/context/CurrencyContext';

function Home() {
    return (
        <>
            <h1>Hello World!</h1>
            <AutocompleteExample />
            <CurrencyProvider>
                <CurrencyConverter />
            </CurrencyProvider>
        </>
    );
}

export default Home;