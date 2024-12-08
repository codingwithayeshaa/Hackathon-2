import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedCar from "./components/FeaturedCar";

const Home = () => {
  return(
    <main>
     <div className="flex flex-col sm:flex-row">
      <Navbar />
      </div>

      <div className="flex flex-col sm:flex-row md:flex-row">
        <HeroSection />
      </div>

      <div className="flex flex-col sm:flex-row">
        <FeaturedCar />
      </div>
  </main>
  )
}
export default Home;