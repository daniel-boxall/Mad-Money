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
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount,
  } = useContext(CurrencyContext);
  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];
  console.log(resultCurrency);

  useEffect(() => {
    if (firstAmount) {
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: process.env.REACT_APP_KEY,
          base_currency: codeFromCurrency,
          currencies: codeToCurrency,
        },
      })
        .then((response) =>
          setResultCurrency(response.data.data[codeToCurrency])
        )
        .catch((error) => console.log(error));
    }
  }, [firstAmount, fromCurrency, toCurrency]);

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
    marginTop: 0,
    marginBottom: 0,

  };

  return (
    <>

    <Grid container>





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
              {resultCurrency * firstAmount} {toCurrency}
            </Typography>
          </Box>
        ) : (
          ""
        )}
      </Container>
      
    </Grid>


    <Grid item xs={12} sm={12} md={12}>
      <Container maxWidth="md" sx={boxStyles} style={{ textAlign: "left" }}>
        <Typography>
          1 {toCurrency} = {resultCurrency} {fromCurrency}
        </Typography>
        <Typography>
          5 {toCurrency} = {resultCurrency * 5} {fromCurrency}
        </Typography>
        <Typography>
          10 {toCurrency} = {resultCurrency * 10} {fromCurrency}
        </Typography>
        <Typography>
          25 {toCurrency} = {resultCurrency * 25} {fromCurrency}
        </Typography>
        <Typography>
          50 {toCurrency} = {resultCurrency * 50} {fromCurrency}
        </Typography>
        <Typography>
          100 {toCurrency} = {resultCurrency * 100} {fromCurrency}
        </Typography>
        <Typography>
          500 {toCurrency} = {resultCurrency * 500} {fromCurrency}
        </Typography>
        <Typography>
          1000 {toCurrency} = {resultCurrency * 1000} {fromCurrency}
        </Typography>
      </Container>
      
    </Grid>



    </Grid>







    </>
  );
}

export default CurrencyConverter;
