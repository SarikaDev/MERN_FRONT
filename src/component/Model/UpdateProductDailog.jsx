import React from "react";
import {
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateProductDailog = ({
  updateId,
  setUpdateId,
  setRefresh,
  setIsLoading,
}) => {
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
  const { _id } = JSON.parse(sessionStorage.getItem("userDetails"));
  const [value, setValue] = useState("");
  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  const handleClose = useCallback(() => {
    setUpdateId("");
    setValue("");
  }, [setUpdateId]);

  const handleSubmit = useCallback(() => {
    if (!value) {
      toast.error("Please Add A  Reason");
    }
    axios
      .put(
        `/category/${updateId}/${_id}`,
        {
          name: value,
        },
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then(data => {
        setRefresh(prev => !prev);

        if (data.status === 200) {
          setIsLoading(false);
          handleClose();
          toast.success("Successfully Updated");
        }
      })
      .catch(error => console.log(error));
  }, [
    _id,
    accessToken,
    handleClose,
    setIsLoading,
    setRefresh,
    updateId,
    value,
  ]);
  return (
    <Dialog open={!!updateId} onClose={handleClose}>
      <DialogTitle>Please Provide Update Reason</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          multiline
          rows={3}
          onChange={handleChange}
          value={value}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' color='error' onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='contained' autoFocus onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateProductDailog;
