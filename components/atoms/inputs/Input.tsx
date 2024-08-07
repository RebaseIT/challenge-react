import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Input(props: Record<string, any>) {
  return (
      <TextField label="Outlined" variant="outlined" {...props} />
  );
}