import {Typography, Grid, Container} from '@mui/material'
import InputAmount from './InputAmount';
import {useState} from 'react';
import SelectCountry from './SelectCountry';
import SwitchCurrency from './SwitchCurrency';

function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    position: "relative",
  };

  return (
  <Container maxWidth="md" sx={boxStyles}>
    <Typography variant="h5" sx={{marginBottom: "2rem"}}>Stay Ahead with Accurate Conversions</Typography>
    <Grid container spacing={2}>
      <InputAmount />
      <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" />
      <SwitchCurrency />
      <SelectCountry value={toCurrency} setValue={setToCurrency} label="To"/>
    </Grid>
  </Container>
  )
}

export default CurrencyConverter;