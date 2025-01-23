import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  required: boolean | false;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  startAdornment?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  startAdornment,
  required
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      required={required}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      sx={{
        width: 350,
        marginBottom: 2,
        '& .MuiOutlinedInput-root': {
          borderRadius: 3,
          borderColor: 'secondary.main',
        },
      }}
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
      }}
    />
  );
};

export default InputField;
