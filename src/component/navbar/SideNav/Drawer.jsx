import { Box, Toolbar } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SM_WIDTH } from "../../../utils/constants";
const drawerWidth = 234;

const MuiDrawer = ({ isOpen, children, ...other }) => {
  const isLarge = useMediaQuery(`(min-width:${SM_WIDTH}px)`);
  return (
    <Drawer
      anchor='left'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
      {...other}
      elevation={5}
      variant={isLarge ? "permanent" : "temporary"}
      open={isLarge || isOpen}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>{children}</Box>
    </Drawer>
  );
};

export default MuiDrawer;
