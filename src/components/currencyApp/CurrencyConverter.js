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

  const fromCountryCode = fromCurrency.split(" ")[1];
  const toCountryCode = toCurrency.split(" ")[1];
  const fromCountryFlag = fromCurrency.split(" ")[0];
  const toCountryFlag = toCurrency.split(" ")[0];

  // default state of resultCurrency
  const [resultCurrency, setResultCurrency] = useState(0);

  // returns the currency codes that then get passed to the currency api call
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];

  // Move the API call to a separate function
  async function fetchCurrencyRate(baseCurrency, targetCurrency) {
    try {
      const response = await axios(
        "https://api.freecurrencyapi.com/v1/latest",
        {
          params: {
            base_currency: baseCurrency,
            currencies: targetCurrency,
            apikey: process.env.REACT_APP_CURRENCY_KEY,
          },
        }
      );

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
  const results = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "1rem",
  };

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "2rem",
    textAlign: "center",
    color: "#222",
    minHeight: "12rem",
    borderRadius: 2,
    padding: "2rem 2rem",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.7)",
    position: "relative",
    // marginTop: 0,
    marginBottom: "20px"
    
  };

  // Currency converter elements where user input is collected and if there is a value in firstAmount then it will render the result
  // If not it will return an empty string
  // Further down we have a second component that shows common denominations
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Container className='card' maxWidth="md" sx={boxStyles}>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
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
              <Box className="result1" sx={{ textAlign: "center", marginTop: "1rem" }}>
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
          <Grid
            sx={{ display: "flex", justifyContent: "center", margin: "auto" }}
          >
            <Container className="card1" maxWidth="md" sx={boxStyles} style={results}>
              <Typography variant="h5" sx={{ fontSize: "4rem" }}>
                {fromCountryFlag} - {toCountryFlag}
              </Typography>
              <Typography>
                1 {fromCountryCode} = {Number(resultCurrency * 1).toFixed(2)}{" "}
                {toCountryCode}
              </Typography>
              <Typography>
                5 {fromCountryCode} = {Number(resultCurrency * 5).toFixed(2)}{" "}
                {toCountryCode}
              </Typography>
              <Typography>
                10 {fromCountryCode} = {Number(resultCurrency * 10).toFixed(2)}{" "}
                {toCountryCode}
              </Typography>
              <Typography>
                20 {fromCountryCode} = {Number(resultCurrency * 20).toFixed(2)}{" "}
                {toCountryCode}
              </Typography>
              <Typography>
                50 {fromCountryCode} = {Number(resultCurrency * 50).toFixed(2)}{" "}
                {toCountryCode}
              </Typography>
              <Typography>
                100 {fromCountryCode} ={" "}
                {Number(resultCurrency * 100).toFixed(2)} {toCountryCode}
              </Typography>
              <Typography>
                500 {fromCountryCode} ={" "}
                {Number(resultCurrency * 500).toFixed(2)} {toCountryCode}
              </Typography>
              <Typography>
                1000 {fromCountryCode} ={" "}
                {Number(resultCurrency * 1000).toFixed(2)} {toCountryCode}
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CurrencyConverter;
