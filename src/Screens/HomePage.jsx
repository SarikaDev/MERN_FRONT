import { Box } from "@mui/material";
import React from "react";
import MuiCard from "../component/Card/MuiCard";
const HomePage = () => {
  return (
    <Box display='flex' flexDirection='row' flexWrap='wrap' height='auto'>
      <MuiCard />
      <MuiCard />
    </Box>
  );
};

export default HomePage;
