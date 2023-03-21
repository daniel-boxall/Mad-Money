import React from 'react';
import CompanySelector from '../components/CompanySelector.js';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <>
            <h1>Welcome! To Mad Money</h1>
            <Link to='Currency'><Button buttonStyle='btn--outline'>Check The Currency Prices</Button></Link>
            <CompanySelector />
        </>
    );
}

export default Home;