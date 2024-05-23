import { green, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: teal[600],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 20px",
          borderRadius: "18px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#0B1134CC",
    },
  },
});

Theme.shadows[1] = "0px 5px 20px lightgray";

export default Theme;
