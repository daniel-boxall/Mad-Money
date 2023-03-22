import React from 'react';
import CurrencyConverter from '../components/currencyApp/CurrencyConverter';
import CurrencyProvider from '../components/currencyApp/context/CurrencyContext';
import Footer from '../components/globalUi/footer/Footer'


function Currency() {
    return (
        <>
            <div style={{ "min-height":"calc(100vh - 213px" }}>
                <CurrencyProvider>
                <   CurrencyConverter />
                </CurrencyProvider>
            </div>
            <div>
                <Footer />
            </div>
            
        </>
    );
}

export default Currency