import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter';
import CurrencyProvider from '../components/context/CurrencyContext';

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