import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


interface TextInput {
    disabled?: boolean;
    label?: string;
    handleInputChange?: any
  }

export const TextInput: React.FC<TextInput> = ({ disabled = false, label = "", handleInputChange}) => {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" onChange={handleInputChange}/>
    </Box>
  );
}