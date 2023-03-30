import { createTheme } from "@mui/material";

export const Colors = {
  primary: "#c9f2c7",
  secondary: "#EBEFE3",
  success: "#4ACF50",
  info: "#002ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  light_green: "#dbeac6",
  dark_green: "#243119",

  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      light: Colors.light_green,
      dark: Colors.dark_green,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        disabled: true,
      },
    },
  },
});

export default theme;
