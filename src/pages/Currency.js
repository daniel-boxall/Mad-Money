import React from 'react';
import CurrencyConverter from '../components/currencyApp/CurrencyConverter';
import CurrencyProvider from '../components/currencyApp/context/CurrencyContext';



function Currency() {
    return (
        <>
            <CurrencyProvider>
                <CurrencyConverter />
            </CurrencyProvider>
        </>
    );
}

export default Currency