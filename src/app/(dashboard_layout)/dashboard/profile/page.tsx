"use client";
import { getUserInfo } from "@/Services/auth.service";
import FormHelpar from "@/components/Forms/FormHelpar";
import InputHelpar from "@/components/Forms/InputHelpar";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/profileApi";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const UserProfilePage = () => {
  const { data, isLoading } = useGetMyProfileQuery({});
  const [updateUser] = useUpdateMyProfileMutation();
  const handleFormSubmit = async (data: FieldValues) => {
    try {
      const res = await updateUser(data);
      if (res?.data?.data?.id) {
        toast.success("Profile Updated Successfully");
      } else {
        console.log(res.error);
        // toast.error(res?.error?.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    name: data?.data?.user?.name || "",
    email: data?.data?.user?.email || "",
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
          My Profile
        </Typography>
      </Box>
      {!isLoading && (
        <FormHelpar onSubmit={handleFormSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Box></Box>
            <Grid item xs={12} sm={12} md={8}>
              <InputHelpar
                name="name"
                label="MY Name"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <InputHelpar
                name="email"
                type="email"
                label="Email Address"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <FormControlLabel
                required
                value={"term"}
                control={<Checkbox />}
                label="Want To Update Your Profile"
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Button type="submit">Edit Profile</Button>
          </Box>
        </FormHelpar>
      )}
    </Container>
  );
};

export default UserProfilePage;
