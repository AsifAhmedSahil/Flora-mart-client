import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import SearchSection from "@/components/SearchSection";
import CategoryWrapper from "../category/CategoryWrapper";
import Mosaic from "@/components/Mosaic";

const Home = () => {
  return (
    <div className="container mx-auto">

    {/* <div className="max-w-7xl mx-auto pt-20 px-6 "> */}
    <div className="flex flex-col justify-center items-center w-full py-20 ">
      <HeroSection />
      <SearchSection/>
      <CategoryWrapper/>
      <Products/>
      <Mosaic/>
    </div>
    </div>
  );
};

export default Home;
