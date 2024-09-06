"use client";

import { PropsWithChildren } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const Providers = ({ children }: PropsWithChildren) => {
  const theme = createTheme({
    cssVariables: {
      cssVarPrefix: "test",
    },
    palette: {
      primary: {
        main: "#28bbbb",
        light: "#28aaaa",
        dark: "#289999",
      },
      background: {
        default: "#1f1f1f",
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {},
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
    },
    typography: {
      allVariants: {
        fontFamily: "var(--test-font-family, Arial)",
        textTransform: "none",
      },
      button: {
        fontSize: "var(--test-button-font-size, 16)",
        fontWeight: 700,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
