import { Typography } from "@mui/material";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <Typography
        sx={{
          p: 2,
        }}
        variant="h3"
        component="h3"
      >
        Welcome To CozyNest DashBoard
      </Typography>
    </div>
  );
};

export default DashboardPage;
