import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import RoundIcon from "../Form/RoundIcon";

const FormBase = ({ title, children }) => {
  const theme = useTheme();
  return (
    <Box
      height='100vh'
      width='100vw'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        background: `linear-gradient(to top, rgba(0,0,0,0.4), ${theme.palette.primary.main} 500px), linear-gradient(to top, ${theme.palette.primary.light}, ${theme.palette.primary.dark} 300px)`,
      }}
    >
      <Container
        component='div'
        maxWidth='sm'
        sx={{
          width: 1,
          minHeight: "550px",
          height: "auto",
          borderRadius: "18px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          boxShadow:
            "2px 2px rgba(255, 255, 255, 0.1),-2px -2px rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box
          component='div'
          sx={{
            height: "100%",
            position: "relative",
            top: -30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RoundIcon />
        </Box>
        <Stack gap={3} alignItems='center' p={2}>
          <Typography
            variant='h6'
            sx={{ color: "lightseagreen" }}
            fontSize='1.8rem'
            fontWeight={600}
            textAlign='center'
          >
            {title}
          </Typography>
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

export default FormBase;
