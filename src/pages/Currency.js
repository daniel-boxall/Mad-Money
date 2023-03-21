import React from 'react';
import CurrencyConverter from '../components/currencyApp/CurrencyConverter';
import CurrencyProvider from '../components/currencyApp/context/CurrencyContext';



function Currency() {
    return (
        <>
            <div className='main' style={{ "height": "70.51vh" }}>
                <CurrencyProvider>
                    <CurrencyConverter />
                </CurrencyProvider>
            </div>  
        </>
    );
}

export default Currency