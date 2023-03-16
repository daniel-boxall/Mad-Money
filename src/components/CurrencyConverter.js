import React, { useState, useEffect } from "react";
import { Button, Container, Typography, Grid} from "@mui/material";
import InputAmount from "./InputAmount";
import SelectCountry from "./SelectCountry";
import SwitchCurrency from "./SwitchCurrency";




const CurrencyConverter = () => {
  return (
    <Container max-width="md" sx={{ background: "#fdfdfd" }}>
      <Typography variant="h5" sx={{ marginTop: "2rem" }}>
        Accurate conversions
      </Typography>
    <Grid>
      <InputAmount />
      <SelectCountry />
      <SwitchCurrency />
      <SelectCountry />
      </Grid>
     

      {/* <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry />
        <SwitchCurrency />
        <SelectCountry />
      </Grid> */}
    </Container>
  );
};

export default CurrencyConverter;
