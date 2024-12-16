import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedCar from "./components/FeaturedCar";
import RecommendCar from "./components/RecommendCar";
import PickDrop from "./components/Pick-Drop";
import Footer from "./components/Footer";
import DetailsPage from "./components/DetailsPage";

const Home = () => {
  return(
    <main>
     <div className="hidden lg:block">
      <Navbar />
      </div>

      <div>
        <HeroSection />
      </div>

      <div>
        <PickDrop />
      </div> 

      <div>
        <FeaturedCar />
      </div>

     <div>
       <RecommendCar />
      </div>

     <div>
      <Footer />
     </div>

  </main>
  )
}
export default Home;