import React from 'react'
import { Autocomplete, Grid, TextField } from '@mui/material'

const SelectCountry = () => {
  return (
    <Grid item xs={12}>
      <Autocomplete
        value="option1"
        options={["option1", "option2"]}
        renderInput={(params) => <TextField {...params} label="From" />} 
        />
    </Grid>
  )
}

export default SelectCountry