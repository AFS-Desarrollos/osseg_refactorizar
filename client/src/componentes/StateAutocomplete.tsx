import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface StateAutocompleteProps {
  disabled?: boolean;
  handleSelectionChange: any
}


export const StateAutocomplete: React.FC<StateAutocompleteProps> = ({ disabled = false, handleSelectionChange }) => {
  return (
    <Autocomplete
      disablePortal
      disabled={disabled}
      options={["EN PREPARACIÓN", "EN TRANSITO", "DISPONIBLE", "DISPENSADO"]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Estado" />}
      onChange={handleSelectionChange}
    />
  );
};
