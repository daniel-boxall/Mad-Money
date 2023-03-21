import React from "react";
import { Autocomplete, Skeleton, Grid, TextField } from "@mui/material";
import useAxios from "./hooks/useAxios";

const SelectCountry = (props) => {

  // A list of currencies supported by our currency API
  const currencies = [
    "USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK",
    "CHF", "ISK", "NOK", "HRK", "RUB", "TRY", "AUD", "BRL", "CAD", "CNY",
    "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD",
    "THB", "ZAR"
  ];

  // Setting a prop object
  const { value, setValue, label } = props;

  // Returned API information
  const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");

  // If loaded return a grid item and skeleton component, skeleton components provide a way of showing something while waiting for data to display
  if (loaded) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant="rounded" height={60} />
      </Grid>
    );
  }

  // If error is true then return the error string
  if (error) {
    return "Something went wrong";
  }

  // Filters the data returned by REST countries ready to be used for autocomplete
  const dataFilter = data.filter((item) => "currencies" in item);
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });
  
  // Compares the returned countries against the supported currency array so that the only supported nations are displayed in dropdowns
  const searchCountries = [];
  dataCountries.forEach(country => {
    const code = country.split(" ")[1]
    if (currencies.includes(code)) {
      searchCountries.push(country);
    }
  });

  // Returns an autocomplete component
  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={value}
        // Stops the value being erased when clicking off dropdown
        disableClearable
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // Sorted options for autocomplete
        options={searchCountries.sort()}
        // Renders an input using material UI (params is provided by the Autocomplete component)
        // Label is a separate prop that isn't part of the params object so must be passed separately 
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;
