"use client";
import { addFlat } from "@/Services/Actions/addFlat";
import { getUserInfo } from "@/Services/auth.service";
import FormHelpar from "@/components/Forms/FormHelpar";
import InputHelpar from "@/components/Forms/InputHelpar";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const defaultValues = {
  squareFeet: "",
  totalBedrooms: "",
  totalRooms: "",
  utilitiesDescription: "",
  location: "",
  description: "",
  rent: "",
  advanceAmount: "",
  image1: "",
};

const PostAFlatPage = () => {
  const { id } = getUserInfo();

  const router = useRouter();
  // console.log(id);
  const handleFormSubmit = async (values: FieldValues) => {
    const data = {
      userId: id,
      advanceAmount: Number(values.advanceAmount),
      description: values.description,
      location: values.location,
      rent: Number(values.rent),
      squareFeet: Number(values.squareFeet),
      totalBedrooms: Number(values.totalBedrooms),
      totalRooms: Number(values.totalRooms),
      utilitiesDescription: values.utilitiesDescription,
      image1: values.image1,
      image2: values.image2 || "",
      image3: values.image3 || "",
    };
    console.log(data);
    try {
      const res = await addFlat(data)
      console.log(res);
      if (res?.data?.id) {
        toast.success("Flat is Posted Successfully!!!");
        router.push("/");
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <Container
      sx={{
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <Typography component="h4" variant="h4">
          Fill The Form For Post Your Flat
        </Typography>
      </Box>
      <FormHelpar onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="squareFeet"
              type="number"
              label="Square Feet"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="totalBedrooms"
              type="number"
              label="Total Bedrooms"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="totalRooms"
              type="number"
              label="Total Rooms"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="utilitiesDescription"
              label="UtilitiesDescription"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="location"
              label="Location"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="description"
              label="description"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="rent"
              type="number"
              label="Rent"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="advanceAmount"
              label="Advance Amount"
              type="number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="image1"
              label="Flat 1st Photo Url"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="image2"
              label="Flat 2nd Photo Url"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputHelpar
              name="image3"
              label="Flat 3rd Photo Url"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button type="submit">Post</Button>
        </Box>
      </FormHelpar>
    </Container>
  );
};

export default PostAFlatPage;
