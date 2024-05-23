import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import flat_image from "@/assets/hero_flat.webp";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${flat_image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: "800px",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "30px",
          borderRadius: "8px",
          zIndex: 1,
        }}
      >
        <Typography variant="h3" component="h2" fontWeight={600}>
          Your Perfect Flatmate is Just a
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          fontWeight={600}
          color="primary.main"
        >
          Click Away!
        </Typography>
        <Typography variant="h5" component="h5" sx={{ my: 4, color: "#fff" }}>
          Discover your ideal roommate with ease.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button>Make appointment</Button>
          <Button variant="outlined">Contact us</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
