import FlatCards from "@/components/Ui/HomePage/Flats/FlatCards";
import SearchFlats from "@/components/Ui/HomePage/Flats/SearchFlats";
import HeroSection from "@/components/Ui/HomePage/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SearchFlats />
      <FlatCards />
    </>
  );
};

export default HomePage;
