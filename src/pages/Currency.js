import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter/CurrencyConverter';
import CurrencyProvider from '../components/CurrencyConverter/context/CurrencyContext';

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