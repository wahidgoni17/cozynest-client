import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="#212121" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={"h2"}>
            Contact
          </Typography>
          <Typography color="#fff">Email</Typography>
          <Typography color="#fff">Facebook</Typography>
          <Typography color="#fff">Instagram</Typography>
          <Typography color="#fff">Twitter</Typography>
        </Stack>
        <Box
          sx={{
            border: "1px solid lightgray",
            margin: "15px 0px",
          }}
        ></Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component={Link}
            href={"/"}
            fontWeight={600}
            color={"white"}
          >
            Cozy
            <Box component="span" color="primary.main">
              Nest
            </Box>
          </Typography>
        </Box>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 CozyNest. All Rights Reserved.
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
