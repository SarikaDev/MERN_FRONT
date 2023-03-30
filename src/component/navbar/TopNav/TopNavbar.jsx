import React, { useCallback, useState } from "react";
import { AppBar, Toolbar, IconButton, Tooltip, Box } from "@mui/material";
import logo from "../../../asserts/logo.png";

import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { PATHS, SM_WIDTH } from "../../../utils/constants";
import DrawList from "../SideNav/DrawerList";
import MuiDrawer from "../SideNav/Drawer";
import { useNavigate } from "react-router-dom";
const TopNavbar = ({ children }) => {
  const isLarge = useMediaQuery(`(min-width:${SM_WIDTH}px)`);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = useCallback(() => {
    setIsOpen(prev => !prev);
  }, [setIsOpen]);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position='fixed'
        sx={{ zIndex: theme => theme.zIndex.drawer + 1, boxShadow: "none" }}
      >
        <Toolbar>
          {!isLarge && (
            <Tooltip title='Menu'>
              <IconButton
                size='large'
                edge='start'
                aria-label='menu'
                onClick={toggleNavbar}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
          )}
          <Box
            display='flex'
            flexGrow={1}
            justifyContent='space-between'
            alignItems='center'
          >
            <img
              src={logo}
              style={{
                width: 80,
                height: 60,
                objectFit: "cover",
                borderRadius: "50%",
              }}
              alt='ASd'
            />
            <Tooltip title='Logout'>
              <IconButton
                size='small'
                onClick={() => {
                  sessionStorage.clear();
                  navigate(PATHS.signin);
                }}
              >
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <MuiDrawer isOpen={isOpen}>
        <DrawList setIsOpen={setIsOpen} />
      </MuiDrawer>
      <Box sx={{ backgroundColor: "gray", width: "100%", minHeight: "100vh" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default TopNavbar;
