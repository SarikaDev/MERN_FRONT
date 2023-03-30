import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StyledButton from "../common/StyledButton";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import { Box, CardMedia, Button } from "@mui/material";
import profilePic from "../../asserts/profilePic.jpg";
import ResponsiveDialog from "../Model/ResponsiveDialog";
const MuiCard = () => {
  const [count, setCount] = useState(0);
  const [modelOpen, setModelOpen] = useState(false);
  const handleClickOpen = () => {
    setModelOpen(true);
  };

  const handleClose = () => {
    setModelOpen(false);
  };
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <ResponsiveDialog
        open={handleClickOpen}
        close={handleClose}
        modelOpen={modelOpen}
      />
      <Box position='relative' left='13px' top='40px' component='div'>
        <Button
          startIcon={<CenterFocusWeakIcon />}
          size='small'
          onClick={handleClickOpen}
        />
      </Box>
      <CardMedia
        component='img'
        alt='green iguana'
        height='250'
        sx={{ objectFit: "fill", borderRadius: "3px", p: 1 }}
        image={profilePic}
      />
      <Typography component='div' variant='h5' textAlign={"center"}>
        Live From Space
      </Typography>
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StyledButton
          startIcon={<RemoveIcon />}
          onClick={() => setCount(prev => prev - 1)}
        />
        {count}
        <StyledButton
          startIcon={<AddIcon />}
          onClick={() => setCount(prev => prev + 1)}
        />
        <StyledButton endIcon={<ShoppingCartIcon />}>Add To Cart</StyledButton>
      </CardActions>
    </Card>
  );
};

export default MuiCard;
