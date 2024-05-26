import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

const AllFlatsPage = async () => {
  const res = await fetch(
    `https://cozynest-server.vercel.app/api/flats?sortBy=rent&sortOrder=desc`, {
      cache: "no-store"
    }
  );
  const { data: flats } = await res.json();
  return (
    <Container>
      <Box
        sx={{
          py: 7,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h1" fontWeight={700}>
            Our All Flats
          </Typography>
        </Box>

        <Container sx={{ margin: "30px auto" }}>
          <Grid container spacing={2}>
            {flats.map((flat: any) => (
              <Grid item key={flat.id} md={4}>
                <Card>
                  <Box>
                    <Image
                      src={flat.image1}
                      alt="flat Image"
                      width={500}
                      height={100}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Rent: {flat.rent}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {flat.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      <LocationOnIcon /> {flat.location}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                      px: 2,
                      paddingBottom: "20px",
                    }}
                  >
                    <Link href={`/flat_details/${flat.id}`}>
                      <Button variant="outlined">View Details</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default AllFlatsPage;
