import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter';
import CurrencyProvider from '../components/context/CurrencyContext';
import News from '../components/StockNews';



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