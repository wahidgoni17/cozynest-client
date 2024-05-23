"use client";
import { ThemeProvider } from "@mui/material";
import React from "react";
import Theme from "../Theme/Theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default Providers;
