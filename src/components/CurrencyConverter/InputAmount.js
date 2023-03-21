import React, { useContext } from 'react';
import { Grid, TextField } from '@mui/material';
import { CurrencyContext } from './context/CurrencyContext';

const InputAmount = () => {
  
  // useContext allows us to access variables set in CurrencyContext
  const {firstAmount, setFirstAmount}
 = useContext(CurrencyContext);

 // The component that updates firstAmount whenever it changes
  return (
    <Grid item xs={12} md>
      <TextField
      value={firstAmount}
      onChange={e => setFirstAmount(e.target.value)}
      label="Amount"
      fullWidth
      InputProps={{
        type: "number"        
      }} 
      />
    </Grid>
  );
};

export default InputAmount;