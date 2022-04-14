import { Button } from "@mui/material";

const ButtonComponent = ({ title, variant, sx }) => {
  return (
    <Button sx={sx} variant={variant}>
      {title}
    </Button>
  );
};

export default ButtonComponent;
