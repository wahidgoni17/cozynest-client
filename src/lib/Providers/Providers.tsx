"use client";
import { ThemeProvider } from "@mui/material";
import React from "react";
import Theme from "../Theme/Theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
