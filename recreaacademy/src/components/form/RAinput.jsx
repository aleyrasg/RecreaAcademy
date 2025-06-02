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
  return (
    <TextField
      autoFocus={autoFocus}
      required={required}
      margin="dense"
      id={name}
      name={name}
      label={label}
      type={type}
      fullWidth
      variant="standard"
      defaultValue={value}
      onChange={onChange}
    />
  );
};

export default RAinput;
