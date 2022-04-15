import { MenuItem, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)`
  margin-bottom: 1rem;
  width: 10rem;
`;

const InputTextComponent = ({
  marginType,
  variant,
  size,
  label,
  sx,
  select,
  items,
  value,
  onChange,
}) => {
  return (
    <CustomTextField
      margin={marginType}
      variant={variant}
      size={size}
      label={label}
      sx={sx}
      select={select}
      value={value}
      onChange={onChange}
    >
      {items &&
        items.map((item, idx) => (
          <MenuItem key={idx} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
    </CustomTextField>
  );
};

export default InputTextComponent;
