import React from 'react';
import CurrencyConverter from '../components/currencyApp/CurrencyConverter';
import CurrencyProvider from '../components/currencyApp/context/CurrencyContext';
import Footer from '../components/globalUi/footer/Footer'
import './Currency.css'


function Currency() {
    return (
        <>
            <div className="body">
                <div className="container">
                    <CurrencyProvider>
                    <   CurrencyConverter />
                    </CurrencyProvider>
                </div>
                <div>
                    <Footer />
                </div>
           </div> 
        </>
    );
}

export default Currency