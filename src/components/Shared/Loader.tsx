import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        my: 5,
        py: 5,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
