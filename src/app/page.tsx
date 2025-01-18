import HeroSection from "./components/HeroSection";
import FeaturedCar from "./components/FeaturedCar";
import RecommendCar from "./components/RecommendCar";
import PickDrop from "./components/Pick-Drop";
import MobileNavbar from "./components/MobileNavbar";

// const Home = () => {
//   return(
  //   <main className="bg-[#F6F7F9] w-[1280px] h-[1796px]">

  //     <div className="grid grid-row sm:block md:hidden lg:hidden ">
  //     <MobileNavbar />
  //   </div>

  //     <div>
  //       <HeroSection />
  //     </div>

  //     <div>
  //       <PickDrop />
  //     </div> 

  //     <div>
  //       <FeaturedCar />
  //     </div> 

  //    <div>
  //      <RecommendCar />
  // </div>

  // </main>
  



  import { sanityFetch } from "@/sanity/lib/fetch";
  import { allcars} from "@/sanity/lib/queries";
  import { Heart } from 'lucide-react';
  import { Fuel } from 'lucide-react';
  import { ShipWheel } from 'lucide-react';
  import { Users } from 'lucide-react';

type car = {
  id : string;
  name : string;
  description : string;
  type : string;
  tags: string;
  fuelCapacity : string;
  transmission : string;
  seatingCapacity : string;
  pricePerDay : number;
  imageUrl : string;
}

export default async function Home() {
  const cars : car[] = await sanityFetch({query: allcars})

  return(
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center w-1020 h-944 mb-8 bg-slate-100"> 
     
      {cars.map((vehicle:any) => (
            <div className="flex flex-col justify-center w-996 h-auto bg-white mt-12 mx-6 mb-6 rounded-lg shadow-md">
         <h2 className="text-black font-plusJakartaSans text-20px font-bold pl-4 pt-6 h-14">{vehicle.id} &nbsp; &nbsp; {vehicle.name}
         <Heart className="w-820 ml-56 text-slate-300 "/></h2>
         <p className="font-bold font-plusJakartaSans w-128 h-12 text-14px text-gray-400 pl-6">{vehicle.type}</p>
         <img src={vehicle.imageUrl} alt="Car Image" width={200} height={400} className="ml-8 pt-4"/>
         <div className="flex justify-center gap-2 w-1060 h-18 pt-8 text-gray-400">
           <Fuel/>
           <p className='text-sm'>{vehicle.fuelCapacity}</p>
           <ShipWheel />
           <p className='text-sm'>{vehicle.transmission}</p>
           <Users />
           <p className='text-sm'>{vehicle.seatingCapacity} 2People</p>
         </div>
         <div>
         <h4 className="font-bold w-26 h-10 pl-6 pt-4">{vehicle.pricePerDay}</h4>
         <button className="ml-32 px-6 py-4 mb-4 rounded-md font-semibold text-white bg-blue-500">Rent Now</button>
        </div>
        </div>
      ))
    }
      </div>
    )
  }



  