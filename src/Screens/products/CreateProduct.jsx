import {
  Box,
  Container,
  Stack,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import FormField from "../../component/Form/FormField";
import RoundIcon from "../../component/Form/RoundIcon";
import StyledButton from "../../component/common/StyledButton";
import axios from "axios";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const CreateProduct = () => {
  const { _id } = JSON.parse(sessionStorage.getItem("userDetails"));
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));

  const [categoryDetails, setCategoryDetails] = useState([]);
  console.log("categoryDetails:", categoryDetails);
  const preLoad = useCallback(() => {
    axios
      .get(
        "/categories",

        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then(res => {
        console.log("res.data.items:", res.data.items);
        setCategoryDetails(res.data.items);
      });
  }, [accessToken]);

  useEffect(() => {
    preLoad();
  }, [preLoad]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      axios
        .post(
          `/product/create/${_id}`,
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
          sessionStorage.setItem("productId", JSON.stringify(data.data._id));

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
        <Stack gap={2} alignItems='center' p={2} justifyContent='center'>
          <Typography
            variant='h6'
            fontSize='1.8rem'
            fontWeight={600}
            textAlign='center'
          >
            Create Product
          </Typography>
          <FormField
            placeholder='Image'
            name='photo'
            type='file'
            onChange={handleChange}
          />
          <FormField
            placeholder='Product Name'
            name='productName'
            type='text'
            onChange={handleChange}
          >
            <ProductionQuantityLimitsIcon />
          </FormField>
          <FormField
            placeholder='Description'
            name='description'
            type='text'
            onChange={handleChange}
          >
            <ProductionQuantityLimitsIcon />
          </FormField>
          <FormField
            placeholder='price'
            name='price'
            type='number'
            onChange={handleChange}
          >
            <ProductionQuantityLimitsIcon />
          </FormField>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={categoryDetails.map(el => el?.name)}
            onChange={handleChange("category")}
            isOptionEqualToValue={(option, value) =>
              option?.name === value?.name
            }
            sx={{ width: 300 }}
            renderInput={params => <TextField {...params} label='Categories' />}
          />
          <FormField
            placeholder='Stock'
            name='stock'
            type='number'
            onChange={handleChange}
          >
            <ProductionQuantityLimitsIcon />
          </FormField>

          <FormField
            placeholder='Sold'
            name='sold'
            type='number'
            onChange={handleChange}
          >
            <ProductionQuantityLimitsIcon />
          </FormField>
          <StyledButton onClick={handleSubmit}>Submit</StyledButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default CreateProduct;
