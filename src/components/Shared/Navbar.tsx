"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo/icon.png";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/Ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  return (
    <Box bgcolor="#e8f5e9">
      <Container>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={1}
          >
            <Image src={logo} width={50} height={50} alt="logo" />
            <Typography variant="h4" component={Link} href="/" fontWeight={600}>
              Cozy
              <Box component="span" color="primary.main">
                Nest
              </Box>
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" gap={4}>
            <Typography component={Link} href="/">
              Home
            </Typography>
            <Typography>About Us</Typography>
            <Typography>My Profile</Typography>
            <Typography>Register</Typography>
            <Typography>Login</Typography>
          </Stack>
          <AuthButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
