import React from 'react';
import CompanySelector from '../components/stocksApp/CompanySelector.js';
import Footer from '../components/globalUi/footer/Footer'

function Home() {
    return (
        <>
            <div className="body">
                <div className="container">
                    <CompanySelector />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;