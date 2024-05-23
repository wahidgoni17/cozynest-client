"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo/icon.png";
import login_image from "@/assets/login.jpg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import FormHelpar from "@/components/Forms/FormHelpar";
import InputHelpar from "@/components/Forms/InputHelpar";
import { loginUser } from "@/Services/Actions/loginUser";
import { storeUserInfo } from "@/Services/auth.service";

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values);
      if (res?.data?.token) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.token });
        router.push("/");
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
        direction="row"
        gap={5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 450,
            width: "100%",
            height: 450,
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
                Login to Your Account
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
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Stack>
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
              </Stack>

              <Typography
                mb={1}
                textAlign="end"
                component="p"
                fontWeight={300}
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </Typography>

              <Button
                sx={{
                  margin: "18px 0px",
                  backgroundColor: "secondary.main",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Typography
                  component={Link}
                  color="secondary.main"
                  href="/register"
                >
                  Create an account
                </Typography>
              </Typography>
            </FormHelpar>
          </Box>
        </Box>
        <Stack>
          <Image src={login_image} alt="login" width={520} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginPage;
