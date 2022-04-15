import { Pagination } from "@mui/material";

const PaginationComponent = ({ count, sx, variant, shape, page, onChange }) => {
  return (
    <Pagination
      sx={sx}
      count={count}
      variant={variant}
      shape={shape}
      page={page}
      onChange={onChange}
    />
  );
};

export default PaginationComponent;
