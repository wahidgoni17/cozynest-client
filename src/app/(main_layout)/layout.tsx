
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { Box } from "@mui/material";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box className="min-h-screen">{children}</Box>
      <Footer />
    </>
  );
};

export default MainLayout;
