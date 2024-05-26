import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FlatDetailsPage = async ({ params }: { params: any }) => {
  const { flatId } = params;
  const res = await fetch(`https://cozynest-server.vercel.app/api/flats/${flatId}`);

  const flatInfo = await res.json();
  const { data: flat } = flatInfo;
  console.log(flat);
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          my: 3,
        }}
      >
        <Typography variant="h3" component="h2">
          Flat Details
        </Typography>
      </Box>
      <Container
        sx={{
          display: "flex",
          direction: "row",
          my: 5,
        }}
      >
        <Box sx={{ flex: 1, position: "relative" }}>
          <Typography variant="h5" component="h1" fontWeight={500}>
            <Box
              sx={{ color: "primary.main", my: 1, textDecoration: "underline" }}
            >
              Description:
            </Box>
            {flat.description}
          </Typography>
          <Typography variant="h5" component="h1" fontWeight={500}>
            <Box
              sx={{ color: "primary.main", my: 1, textDecoration: "underline" }}
            >
              Utilities:
            </Box>{" "}
            {flat.utilitiesDescription}
          </Typography>
          <Typography variant="h5" component="h1" fontWeight={500}>
            <Box
              sx={{ color: "primary.main", my: 1, textDecoration: "underline" }}
            >
              Location:
            </Box>{" "}
            {flat.location}
          </Typography>
          <Typography variant="h5" component="h1" fontWeight={500}>
            <Box
              sx={{ color: "primary.main", my: 1, textDecoration: "underline" }}
            >
              Square Feet:
            </Box>{" "}
            {flat.squareFeet}
          </Typography>
          <Typography variant="h5" component="h1" fontWeight={500}>
            <Box
              sx={{ color: "primary.main", my: 1, textDecoration: "underline" }}
            >
              Total Rooms:
            </Box>{" "}
            {flat.totalRooms}
          </Typography>
          <Typography variant="h5" component="h1" fontWeight={500}>
            <Box
              sx={{ color: "primary.main", my: 1, textDecoration: "underline" }}
            >
              Total Bed Rooms:
            </Box>{" "}
            {flat.totalBedrooms}
          </Typography>
          <Typography variant="h5" component="h1" fontWeight={500}>
            <Box
              sx={{ color: "primary.main", my: 1, textDecoration: "underline" }}
            >
              Rent Amount:
            </Box>{" "}
            {flat.rent}
          </Typography>
          <Typography variant="h5" component="h1" fontWeight={500}>
            <Box
              sx={{ color: "primary.main", my: 1, textDecoration: "underline" }}
            >
              Advance Amount:
            </Box>{" "}
            {flat.advanceAmount}
          </Typography>
        </Box>

        <Box
          sx={{
            p: 1,
            flex: 1,
            display: "flex",
            justifyContent: "center",
            position: "relative",
            mt: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Box>
              <Image src={flat?.image1} width={400} height={380} alt="image1" />
            </Box>
            <Box>
              <Image src={flat?.image2} width={400} height={380} alt="image2" />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "200px",
              left: "140px",
            }}
          >
            <Image src={flat?.image3} width={320} height={350} alt="doctor3" />
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Link href={`/flat_request/${flat.id}`}>
          <Button
            sx={{
              bgcolor: "secondary.main",
              my: 5,
            }}
          >
            Request To Share
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default FlatDetailsPage;
