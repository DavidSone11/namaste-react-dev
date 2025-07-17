import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FoodDeliveryLogo from "../../assets/FoodDeliveryLogo.png";

function HeaderComponent() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          <img className="logo" src={FoodDeliveryLogo} alt="Logo" />
        </Typography>

        {/* Navigation + Cart */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit">Home</Button>
          {/* <Button color="inherit">Products</Button> */}
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact Us</Button>

          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderComponent;
