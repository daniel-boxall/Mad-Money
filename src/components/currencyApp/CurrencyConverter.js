import { Typography, Grid, Container } from "@mui/material";
import InputAmount from "./InputAmount";
import { useContext, useEffect } from "react";
import SelectCountry from "./SelectCountry";
import SwitchCurrency from "./SwitchCurrency";
import { CurrencyContext } from "./context/CurrencyContext";
import axios from "axios";
import { useState } from "react";
import { Box } from "@mui/system";

function CurrencyConverter() {
  
  // useContext allows us to access variables set in CurrencyContext
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext);

  // default state of resultCurrency
  const [resultCurrency, setResultCurrency] = useState(0);

  // returns the currency codes that then get passed to the currency api call
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];
  
// Move the API call to a separate function
async function fetchCurrencyRate(baseCurrency, targetCurrency) {
  try {
    const response = await axios("https://api.freecurrencyapi.com/v1/latest", {
      params: {
        base_currency: baseCurrency,
        currencies: targetCurrency,
        apikey: process.env.REACT_APP_CURRENCY_KEY,
      },
    });

    // api result
    const { data } = response.data;
    return Number(data[targetCurrency]).toFixed(3);
  } catch (error) {
    console.log(error);
  }
}

// simplify useEffect & its dependency array
useEffect(() => {
  async function updateResultCurrency() {
    if (firstAmount) {
      const rate = await fetchCurrencyRate(codeFromCurrency, codeToCurrency);
      setResultCurrency(rate);
    }
  }

  updateResultCurrency();
}, [firstAmount, codeFromCurrency, codeToCurrency]);

  // CSS styles for both boxes
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
    // marginTop: 0,
    marginBottom: 0,

  };

  // Currency converter elements where user input is collected and if there is a value in firstAmount then it will render the result
  // If not it will return an empty string
  // Further down we have a second component that shows common denominations 
  return (
    <>

<Grid container style={{ minHeight: "70vh" }}>





    <Grid item xs={12} sm={12} md={12}>
      
      <Container maxWidth="md" sx={boxStyles}>
        <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
          Currency Converter
        </Typography>
        
        <Grid container spacing={2}>
          <InputAmount />
          <SelectCountry
            value={fromCurrency}
            setValue={setFromCurrency}
            label="From"
          />
          <SwitchCurrency />
          <SelectCountry
            value={toCurrency}
            setValue={setToCurrency}
            label="To"
          />
        </Grid>

        {firstAmount ? (
          <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
            <Typography>
              {firstAmount} {fromCurrency} =
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginTop: "5px", fontWeight: "bold" }}
            >
              {Number(resultCurrency * firstAmount).toFixed(2)} {toCurrency}
            </Typography>
          </Box>
        ) : (
          ""
        )}
      </Container>
      <Container maxWidth="md" sx={boxStyles} style={{ textAlign: "center" }}>
        <Typography>
          1 {fromCurrency} = {Number(resultCurrency * 1).toFixed(2)} {toCurrency}
        </Typography>
        <Typography>
          5 {fromCurrency} = {Number(resultCurrency * 5).toFixed(2)} {toCurrency}
        </Typography>
        <Typography>
          10 {fromCurrency} = {Number(resultCurrency * 10).toFixed(2)} {toCurrency}
        </Typography>
        <Typography>
          25 {fromCurrency} = {Number(resultCurrency * 25).toFixed(2)} {toCurrency}
        </Typography>
        <Typography>
          50 {fromCurrency} = {Number(resultCurrency * 50).toFixed(2)} {toCurrency}
        </Typography>
        <Typography>
          100 {fromCurrency} = {Number(resultCurrency * 100).toFixed(2)} {toCurrency}
        </Typography>
        <Typography>
          500 {fromCurrency} = {Number(resultCurrency * 500).toFixed(2)} {toCurrency}
        </Typography>
        <Typography>
          1000 {fromCurrency} = {Number(resultCurrency * 1000).toFixed(2)} {toCurrency}
        </Typography>
      </Container>
      
    </Grid>



    </Grid>







    </>
  );
}

export default CurrencyConverter;
