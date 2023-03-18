import React from "react";
import { Autocomplete, Skeleton, Grid, TextField } from "@mui/material";
import useAxios from "./hooks/useAxios";

const SelectCountry = (props) => {
  const currencies = [
    "USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK",
    "CHF", "ISK", "NOK", "HRK", "RUB", "TRY", "AUD", "BRL", "CAD", "CNY",
    "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD",
    "THB", "ZAR"
  ];

  const { value, setValue, label } = props;
  const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");

  if (loaded) {
    console.log("this one" + data);
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant="rounded" height={60} />
      </Grid>
    );
  }

  if (error) {
    return "Something went wrong";
  }
  const dataFilter = data.filter((item) => "currencies" in item);
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });
  console.log(dataCountries);


  const searchCountries = [];
  dataCountries.forEach(country => {
    const code = country.split(" ")[1]
    if (currencies.includes(code)) {
      searchCountries.push(country);
    }
  });
  console.log('this one ' + searchCountries);


  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={value}
        disableClearable
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={searchCountries.sort()}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;
