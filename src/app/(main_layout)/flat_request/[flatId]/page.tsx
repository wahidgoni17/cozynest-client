"use client";
import { addRequest } from "@/Services/Actions/addRequest";
import { getUserInfo } from "@/Services/auth.service";
import FormHelpar from "@/components/Forms/FormHelpar";
import InputHelpar from "@/components/Forms/InputHelpar";
import { useAddFlatRequestMutation } from "@/redux/api/bookingApi";
import { useGetAFlatByIdQuery } from "@/redux/api/flatApi";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const FlatRequestPage = ({ params }: { params: any }) => {
  const { flatId } = params;
  const userInfo = getUserInfo();
  const router = useRouter();
  const data = { flatId: flatId, userId: userInfo.id };

  const handleFormSubmit = async (values: FieldValues) => {
    try {
      const res = await addRequest(data);
      console.log(res);
      if (res?.data?.id) {
        toast.success("Flat Share Request Posted Successfully");
        router.push("/");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    name: userInfo.name || "",
    email: userInfo.email || "",
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
          Flat Share Request
        </Typography>
      </Box>
      <FormHelpar onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={8}>
            <InputHelpar
              name="name"
              label="User Name"
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
              label="Accept Terms & Condition to Request"
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

export default FlatRequestPage;
