import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter/CurrencyConverter';
import CurrencyProvider from '../components/CurrencyConverter/context/CurrencyContext';



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