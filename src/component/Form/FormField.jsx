import { styled, InputBase } from "@mui/material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  background: theme.palette.common.white,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(4),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const Div = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const IconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0.5),
  height: "100%",
  position: "absolute",
  zIndex: 999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const FormField = ({ children, ...other }) => {
  return (
    <Div>
      <IconWrapper>{children}</IconWrapper>
      <StyledInputBase {...other} />
    </Div>
  );
};

export default FormField;
