import { Button } from "@mui/material";

const ButtonComponent = ({ title, variant, sx, onClick }) => {
  return (
    <Button sx={sx} variant={variant} onClick={onClick}>
      {title}
    </Button>
  );
};

export default ButtonComponent;
