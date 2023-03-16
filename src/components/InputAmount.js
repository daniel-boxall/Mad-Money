import React from 'react';
import { Grid, InputAdornment, TextField } from '@mui/material';

const InputAmount = () => {
  console.log('firing');
  return (
    <Grid item xs={12}>
      <TextField
      label="Amount"
      fullWidth
      inputProps={{
        type: "number",
        startAdornment: <InputAdornment position="start">$</InputAdornment>
        
      }} 
      />
    </Grid>
  );
};

export default InputAmount;