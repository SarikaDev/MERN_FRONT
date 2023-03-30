import * as React from "react";
import {
  Button,
  Card,
  CardMedia,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import StyledButton from "../common/StyledButton";
import profilePic from "../../asserts/profilePic.jpg";

const ResponsiveDialog = ({ open, close, modelOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Dialog fullScreen={fullScreen} open={modelOpen} onClose={open} fullWidth>
        <DialogTitle textAlign='center'>Title</DialogTitle>
        <DialogContent>
          <Card>
            <CardMedia
              component='img'
              alt='green iguana'
              height='360'
              sx={{ objectFit: "fill", borderRadius: "3px", p: 1 }}
              image={profilePic}
            />
          </Card>

          <DialogContentText textAlign='center'>5 - Items</DialogContentText>
          <DialogContentText textAlign='center'>Description</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button autoFocus variant='outlined' color='error' onClick={close}>
            Cancle
          </Button>
          <StyledButton onClick={close} autoFocus>
            Order
          </StyledButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default ResponsiveDialog;
