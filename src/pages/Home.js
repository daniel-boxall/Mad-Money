import React from 'react';
import CompanySelector from '../components/stocksApp/CompanySelector.js';
import Footer from '../components/globalUi/footer/Footer'

function Home() {
    return (
        <>
            <div style={{"minHeight":"calc(100vh - 213px)"}}>
                <h1>Welcome! To Mad Money</h1>
                <CompanySelector />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Home;