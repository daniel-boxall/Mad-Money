import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Grid } from "@mui/material";


function CompanyOverview({ selectedCompany }) {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://www.alphavantage.co/query', {
        params: {
          function: 'OVERVIEW',
          symbol: selectedCompany,
          apikey: process.env.REACT_APP_API_KEY
        }
      });
      // change state of overview
      setOverview(response.data);
    }
    fetchData();
  }, [selectedCompany]);
  // dummy loading state
  if (!overview) {
    return <div>Loading...</div>;
  }
  // example json output https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo
  // you can choose what to use

  // function to display big numbers
  function displayBigMoney(num) {
    let abbreviations = ["", "thousand", "million", "B", "T"];
  
    if (num < 1000) {
      return num.toString();
    }
  
    let i = Math.floor(Math.log10(num) / 3);
    let val = num / Math.pow(1000, i);
  
    return val.toFixed(2) + " " + abbreviations[i];
  }
  
  // logging out api call json result
  // console.log(overview);

  const marketCap = displayBigMoney(parseInt(overview['MarketCapitalization']));
  const grossProfit = displayBigMoney(parseInt(overview['GrossProfitTTM']));
  const fiftytwoWeekHigh = parseInt(overview['52WeekHigh']);
  const fiftytwoWeekLow = parseInt(overview['52WeekLow']);
  // const PERatio = parseInt(overview['PERatio']);
  // const dividendYield = parseInt(overview['DividendYield']);
  const currency = overview['Currency'];
  const exchange = overview['Exchange'];
  const symbol = overview['Symbol'];
  const name = overview['Name'];
  const description = overview['Description'];
  const sector = overview['Sector'];

  return (
    <>


      <Grid container>


      {selectedCompany && <h2>{selectedCompany} Overview</h2>}
      <h2>{symbol}</h2>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Exchange: {exchange}</p>
      <p>Sector: {sector}</p>
      <p>Market Capitalization: {marketCap} {currency}</p>
      <p>Gross Proft: {grossProfit} {currency}</p>
      {/* <p>PERatio: {PERatio}</p> */}
      <p>Currency: {currency}</p>
      <p>52-wk high: {fiftytwoWeekHigh}</p>
      <p>52-wk low: {fiftytwoWeekLow}</p>


      </Grid>



    </>

  );
}

export default CompanyOverview;