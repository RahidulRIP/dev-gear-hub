import FAQ from "@/components/Home/FAQ";
import FeaturedGear from "@/components/Home/FeaturedGear";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/Newsletter";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";

const Home = () => {
    
  return (
    <div>
      <Hero/>
      <Features/>
      <Stats/>
      <FeaturedGear/>
      <Testimonials/>
      <FAQ/>
      <Newsletter/>
    </div>
  );
};

export default Home;
