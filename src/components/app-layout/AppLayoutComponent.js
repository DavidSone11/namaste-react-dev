import React from "react";
import HeaderComponent from "../header/HeaderComponent";
import { Box } from "@mui/material";
import BodyComponent from "../body/BodyComponent";

function AppLayoutComponent() {
  return (
    <Box className="app-body">
      <HeaderComponent />
      <BodyComponent />
    </Box>
  );
}

export default AppLayoutComponent;
