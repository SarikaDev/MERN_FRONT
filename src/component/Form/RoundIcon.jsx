import { Box } from "@mui/material";
import logo from "../../asserts/logo.png";

const RoundIcon = () => {
  return (
    <Box
      component='div'
      sx={{
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow:
          "2px 2px rgba(255, 255, 255, 0.1),-2px -2px rgba(255, 255, 255, 0.1)",
      }}
      width={120}
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='auto'
    >
      <img
        src={logo}
        style={{
          width: 100,
          height: 90,
          objectFit: "cover",
          borderRadius: "50%",
        }}
        alt='ASd'
      />
    </Box>
  );
};

export default RoundIcon;
