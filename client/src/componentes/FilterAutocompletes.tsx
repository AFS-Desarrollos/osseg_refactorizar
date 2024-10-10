import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function StateAutocomplete() {
  return (
    <Autocomplete
      disablePortal
      options={["EN PREPARACIÓN","EN TRANSITO", "DISPONIBLE", "DISPENSADO"]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
