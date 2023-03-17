import React from 'react';
import '../../App.css';
import CurrencyExchangeRate from '../CurrencyExchangeRate';
import { Switch } from '@mui/material';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import AutocompleteExample from '../Autocomplete';

function Home() {
    
    const news = #news;
    news = [value, setValue] = React.useState(false);

    const handleChange = (e) => {
        setValue(e.target.checked)
    }


    return (
        <>
            <h1>Welcome to Mad Money</h1>

            <FormGroup>
                <FormControlLabel id="news" label="News" control={
                    <Switch defaultChecked
                        checked={value}
                        onChange={handleChange}
                        name="news"
                        iputProps={{ "aria-labe": "test switch"}}
                />} />
                <FormControlLabel control={
                    <Switch
                        checked={value}
                        onChange={handleChange}
                        name="stock"
                        iputProps={{ "aria-labe": "test switch"}}
                    />} label="Stock" />
                <FormControlLabel control={
                    <Switch
                        checked={value}
                        onChange={handleChange}
                        name="currency"
                        iputProps={{ "aria-labe": "test switch"}}
                    />} label="Currency" />
            </FormGroup>
            <CurrencyExchangeRate fromCurrency={'GBP'} toCurrency={'CNY'} />
            <AutocompleteExample />
        </>
    );
}

export default Home;