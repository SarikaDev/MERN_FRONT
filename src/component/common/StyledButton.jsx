import { styled, Button as MuiButton } from "@mui/material";

const Button = styled(MuiButton)(({ theme }) => ({
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));
const StyledButton = ({ children, ...other }) => {
  return (
    <Button {...other} variant='contained' size='small'>
      {children}
    </Button>
  );
};
export default StyledButton;
