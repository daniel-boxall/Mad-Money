import React from 'react';
import AutocompleteExample from '../components/Autocomplete';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <>
            <h1>Welcome! To Mad Money</h1>
            <Link to='Currency'><Button buttonStyle='btn--outline'>Check The Currency Prices</Button></Link>
            <AutocompleteExample />
        </>
    );
}

export default Home;