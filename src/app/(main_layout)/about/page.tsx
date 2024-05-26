import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Container>
      <Box
        sx={{
          py: 7,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h1" fontWeight={700}>
            About Us
          </Typography>
        </Box>
        <Box
          sx={{
            my: 2,
          }}
        >
          <Typography variant="h6" component="h5">
            Welcome to CozyNest, your ultimate destination for seamless and
            convenient flatsharing! Whether you’re a student, a young
            professional, or simply looking for a change, we are here to help
            you find the perfect place to call home.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 2,
          }}
        >
          <Typography variant="h6" component="h5">
            At CozyNest, we understand that finding the right flatshare can be a
            daunting task. That’s why we’ve made it our mission to simplify the
            process and make it as stress-free as possible. Our platform
            connects you with like-minded individuals who are also on the hunt
            for the ideal living situation, ensuring that you find a compatible
            flatmate and a comfortable home.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 2,
          }}
        >
          <Typography variant="h6" component="h5">
            We offer a comprehensive listing of available flats, complete with
            detailed descriptions, photos, and all the information you need to
            make an informed decision. Our advanced search filters allow you to
            narrow down your options based on your specific requirements, such
            as location, budget, and amenities.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 2,
          }}
        >
          <Typography variant="h6" component="h5">
          But we don’t just stop at finding you a place to live. We’re dedicated to building a community where you can thrive. Our blog and resource center provide valuable tips and advice on everything from decorating your new space to managing shared expenses and creating harmonious living arrangements. We also host regular events and meetups, giving you the chance to connect with fellow flatsharers and make new friends.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 2,
          }}
        >
          <Typography variant="h6" component="h5">
          At CozyNest, we believe that finding a home should be more than just a transaction – it should be a positive and enriching experience. Join our community today and discover the joy of flatsharing. Together, we’ll help you find the perfect place to live and the perfect people to live with.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
