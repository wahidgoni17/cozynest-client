"use client";
import getAllFlats from "@/Services/Actions/getAllFlat";
import FormHelpar from "@/components/Forms/FormHelpar";
import InputHelpar from "@/components/Forms/InputHelpar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { FieldValues } from "react-hook-form";

const SearchFlats = () => {
  const [flats, setFlats] = useState([]);
  const handleSubmit = async (values: FieldValues) => {
    const flatsData = await getAllFlats(values.searchTerm);
    setFlats(flatsData.data);
  };
  return (
    <Suspense>
      <Container>
        <Box
          sx={{
            textAlign: "center",
            my: 3,
            py: 5,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" component="h1" fontWeight={700}>
              Search a Flat
            </Typography>
          </Box>

          <FormHelpar
            onSubmit={handleSubmit}
            defaultValues={{ searchTerm: "" }}
          >
            <Box
              sx={{
                display: "flex",
                direction: "row",
                gap: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InputHelpar
                sx={{
                  width: "500px",
                  my: 2,
                }}
                name="searchTerm"
                label="Search By Location"
              />
              <Button type="submit">Search</Button>
            </Box>
          </FormHelpar>
        </Box>
        {flats && (
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
        )}
      </Container>
    </Suspense>
  );
};

export default SearchFlats;
