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

const FlatCards = async () => {
  const res = await fetch(
    `http://localhost:4000/api/flats?page=1&limit=3&sortBy=rent&sortOrder=desc`
  );
  const { data: flats } = await res.json();
  return (
    <Container>
      <Box
        sx={{
          my: 5,
          py: 5,
          backgroundColor: "rgba(20, 20, 20, 0.1)",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h1" fontWeight={700}>
            Our Top Flats
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
                    <Button variant="outlined">View Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Link href="/all_flats"><Button
              sx={{
                marginTop: "30px",
              }}
            >
              View ALL
            </Button></Link>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default FlatCards;
