import React from "react";
import HeaderComponent from "./HeaderComponent";
// import BodyComponent from "./BodyComponent";
import { Outlet } from "react-router-dom";

function AppLayoutComponent() {
  return (
    <div className="app-body">
      <HeaderComponent />
      <Outlet />
    </div>
  );
}

export default AppLayoutComponent;
