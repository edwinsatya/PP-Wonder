import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)`
  margin-bottom: 1rem;
  width: 10rem;
`;

const InputTextComponent = ({ marginType, variant, size, label, sx }) => {
  return (
    <CustomTextField
      margin={marginType}
      variant={variant}
      size={size}
      label={label}
      sx={sx}
    ></CustomTextField>
  );
};

export default InputTextComponent;
