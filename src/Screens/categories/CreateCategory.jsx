import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import { toast } from "react-toastify";

import FormField from "../../component/Form/FormField";
import RoundIcon from "../../component/Form/RoundIcon";
import StyledButton from "../../component/common/StyledButton";
import axios from "axios";

const CreateCategory = () => {
  const { _id } = JSON.parse(sessionStorage.getItem("userDetails"));
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));

  const [name, setName] = useState("");
  const handleChange = useCallback(e => {
    setName(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      axios
        .post(
          `/category/create/${_id}`,
          {
            name: name,
          },
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          },
        )
        .then(data => {
          console.log("data", data);
          sessionStorage.setItem("categoryId", JSON.stringify(data.data._id));

          if (data.status === 200) {
            toast.success(`Successfully Created  `);
          }
        })
        .catch(error => console.log(error));
    },
    [_id, accessToken, name],
  );
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='90%'
    >
      <Container
        component='div'
        maxWidth='sm'
        sx={{
          width: 1 / 2,
          minHeight: "350px",
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
        <Stack gap={3} alignItems='center' p={2} justifyContent='center'>
          <Typography
            variant='h6'
            fontSize='1.8rem'
            fontWeight={600}
            textAlign='center'
          >
            Create Category
          </Typography>
          <FormField
            placeholder='Category Name'
            name='categoryName'
            type='text'
            onChange={handleChange}
          >
            <CategoryIcon />
          </FormField>
          <StyledButton onClick={handleSubmit}>Submit</StyledButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default CreateCategory;
