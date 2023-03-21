import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import StockData from './StockData.js';
import CompanyOverview from './CompanyOverview.js';

export default function CompanySelector() {
  const options = [
    { value: 'AAPL', label: 'APPL - Apple Inc', logo: 'https://companiesmarketcap.com//img/company-logos/64/AAPL.webp' },
    { value: 'MSFT', label: 'MSFT - Microsoft Corp', logo: 'https://companiesmarketcap.com//img/company-logos/64/MSFT.webp' },
    { value: 'AMZN', label: 'AMZN - Amazon.com, Inc.', logo: 'https://companiesmarketcap.com//img/company-logos/64/AMZN.webp' },
    { value: 'TSLA', label: 'TSLA - Tesla Inc', logo: 'https://companiesmarketcap.com//img/company-logos/64/TSLA.webp' },
    { value: 'NVDA', label: 'NVDA - NVIDIA Corporation', logo: 'https://companiesmarketcap.com//img/company-logos/64/NVDA.webp' },
    { value: 'META', label: 'META - Meta Platforms Inc', logo: 'https://companiesmarketcap.com//img/company-logos/64/META.webp' },
    { value: 'GOOG', label: 'GOOG - Alphabet Inc', logo: 'https://companiesmarketcap.com//img/company-logos/64/GOOG.webp' },
    { value: 'NFLX', label: 'NFLX - Netflix Inc', logo: 'https://companiesmarketcap.com//img/company-logos/64/NFLX.webp' },
    { value: 'AMD', label: 'AMD - Advanced Micro Devices Inc', logo: 'https://companiesmarketcap.com//img/company-logos/64/AMD.webp' },
    { value: 'BABA', label: 'BABA - Alibaba Group Holding Ltd', logo: 'https://companiesmarketcap.com//img/company-logos/64/BABA.webp' },
    { value: 'ADBE', label: 'ADCE - Adobe Systems Incorporated', logo: 'https://companiesmarketcap.com//img/company-logos/64/ADBE.webp' },
  ];

  const [selectedValue, setSelectedValue] = useState({ value: 'AAPL' });

  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
  };


  // STYLING
  const firstGridStyle = {
    backgroundColor: '#92B8F9',
    borderRadius: '7px',
    padding: '20px',

  };


  const stockTitle = {
    textAlign: 'left',
    paddingBottom: '10px',
    fontSize: '70px',
  };

  const stockBox = {
    paddingBottom: '15px',
    color: 'white',
  };

  // const dropdownBox = {
  //   // border: '10px',
  //   color: 'white !important',
  // };



  return (
    <div>
      <h1>Company Selector</h1>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        getOptionSelected={(option, value) => option.value === value.value}
        disableClearable
        fullWidth
        onChange={handleChange}
        renderOption={option => {
          return (
              <Box>
                  <img 
                    loading="lazy"
                    width="12"
                    height="12" 
                    className="company-logo" 
                    alt={`${option.value} logo`} 
                    src={option.logo} 
                  />
                    {option.label}
              </Box>
          );
      }}
        renderInput={(params) => (
          <TextField {...params} label="Select a company" variant="outlined" />
        )}
      />
      {selectedValue && <p>You selected: {selectedValue.value}</p>}
      <CompanyOverview selectedCompany={selectedValue.value} />
      <StockData selectedCompany={selectedValue.value} />
      
    </div>
  );
  
  
  
  
  
};
