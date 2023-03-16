import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import StockData from './StockData.js';

export default function AutocompleteExample() {
  const options = [
    { value: 'APPL', label: 'APPL - Apple Inc' },
    { value: 'MSFT', label: 'MSFT - Microsoft Corp' },
    { value: 'AMZN', label: 'AMZN - Amazon.com, Inc.' },
    { value: 'TSLA', label: 'TSLA - Tesla Inc' },
    { value: 'NVDA', label: 'NVDA - NVIDIA Corporation' },
    { value: 'META', label: 'META - Meta Platforms Inc' },
    { value: 'GOOG', label: 'GOOG - Alphabet Inc' },
    { value: 'NFLX', label: 'NFLX - Netflix Inc' },
    { value: 'AMD', label: 'AMD - Advanced Micro Devices Inc' },
    { value: 'BABA', label: 'BABA - Alibaba Group Holding Ltd' },
    { value: 'ADCE', label: 'ADCE - Adobe Systems Incorporated' },
  ];

  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
  };

  return (
    <div>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        getOptionSelected={(option, value) => option.value === value.value}
        fullWidth
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} label="Select an option" variant="outlined" />
        )}
      />
      {selectedValue && <p>You selected: {selectedValue.value}</p>}
      <StockData selectedValue={selectedValue.value} />
    </div>
  );
};
