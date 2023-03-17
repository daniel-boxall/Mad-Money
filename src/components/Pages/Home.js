import React from 'react';
import AutocompleteExample from '../Autocomplete';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function Home() {
    
    
    return (
        <>
            <h1>Welcome to Mad Money</h1>
            <Link to='Currency'><Button buttonStyle='btn--outline'>Currency</Button></Link>
            <AutocompleteExample />
         </>
    );
}

export default Home;