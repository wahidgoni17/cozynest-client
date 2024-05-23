"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo/icon.png";
import register_image from "@/assets/register.jpg";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/Services/Actions/registerUser";
import { loginUser } from "@/Services/Actions/loginUser";
import { storeUserInfo } from "@/Services/auth.service";
import FormHelpar from "@/components/Forms/FormHelpar";
import { useState } from "react";
import InputHelpar from "@/components/Forms/InputHelpar";

export const validationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
  cpassword: z.string().min(6, "Must be at least 6 characters"),
});

export const defaultValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = async (values: FieldValues) => {
    const { name, email, password, cpassword } = values;

    if (password !== cpassword) {
      setError("Password is Not matched");
    }
    const data = { name, email, password };

    try {
      const res = await registerUser(data);

      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await loginUser({
          email: email,
          password: password,
        });

        if (result?.data?.token) {
          storeUserInfo({ accessToken: result?.data?.token });
          router.push("/");
        }
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Box>
      <Stack
        direction="row-reverse"
        gap={5}
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 450,
            width: "100%",
            boxShadow: 1,
            borderRadius: 2,
            padding: "48px 30px",
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Register To Cozy Nest
              </Typography>
            </Box>
          </Stack>

          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          <Box>
            <FormHelpar
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Stack>
                <Box
                  sx={{
                    margin: "10px 0px",
                  }}
                >
                  <InputHelpar name="name" label="Name" fullWidth={true} />
                </Box>
                <Box
                  sx={{
                    margin: "10px 0px",
                  }}
                >
                  <InputHelpar
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Box>
                <Box
                  sx={{
                    margin: "10px 0px",
                  }}
                >
                  <InputHelpar
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Box>
                <Box
                  sx={{
                    margin: "10px 0px",
                  }}
                >
                  <InputHelpar
                    name="cpassword"
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                  />
                </Box>
              </Stack>
              <Button
                sx={{
                  margin: "18px 0px",
                  backgroundColor: "secondary.main",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Already have an account?{" "}
                <Typography
                  component={Link}
                  color="secondary.main"
                  href="/login"
                >
                  Go to Login
                </Typography>
              </Typography>
            </FormHelpar>
          </Box>
        </Box>
        <Stack>
          <Image src={register_image} alt="login" width={520} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default RegisterPage;
