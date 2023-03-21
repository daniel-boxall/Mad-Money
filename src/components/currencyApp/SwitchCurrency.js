import React from 'react'
import { Grid,  Button } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useContext } from 'react';
import { CurrencyContext } from './context/CurrencyContext';

// useContext allows us to access variables set in CurrencyContext
const SwitchCurrency = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
  } = useContext(CurrencyContext)
  
  //Switches currencies when button is pressed
  const handleSwitch = () => {
    setFromCurrency(toCurrency); 
    setToCurrency(fromCurrency);

  }

  //Returns a button/icon provided by material
  return (
    <Grid item xs={12} md="auto">
        <Button onClick={handleSwitch} sx={{
            borderRadius: 1,
            height: "100%"
        }}>
        <CompareArrowsIcon sx={{fontSize: 30}}/>
        </Button>
    </Grid>
  )
}

export default SwitchCurrency