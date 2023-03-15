import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default function AutocompleteExample() {
  const options = [
    { value: 'APPL', label: 'APPL - Apple Inc' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
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
        fullWidth
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} label="Select an option" variant="outlined" />
        )}
      />
      {selectedValue && <p>You selected: {selectedValue.label}</p>}
    </div>
  );
};
