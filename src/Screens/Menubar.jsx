import React from "react";
import TopNavbar from "../component/navbar/TopNav/TopNavbar";
import { Outlet } from "react-router-dom";
const Menubar = () => {
  return (
    <TopNavbar>
      <Outlet />
    </TopNavbar>
  );
};

export default Menubar;
