import { useState } from "react";
import { TextField } from "@mui/material";

const RAinput = ({
  name,
  label,
  value,
  type = "text",
  autoFocus = false,
  required = false,
  onChange
}) => {
  const [error, setError] = useState(false);
  const handleChange = e => {
    onChange(e);
    if (e.target.validity.valid) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <TextField
      autoFocus={autoFocus}
      required={required}
      margin="normal"
      id={name}
      name={name}
      label={label}
      type={type}
      fullWidth
      defaultValue={value}
      onChange={handleChange}
      error={error}
      helperText={error ? "Valor incorrecto": ''}
    />
  );
};

export default RAinput;
