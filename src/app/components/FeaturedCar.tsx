import CarCard from "./CarCard";
import Image from "next/image";

const PopularCar = () => {
   const carDetails=[
           {carName:"Koenigsegg",price:"$99.00/ day",imagePath:"/image 7.png",button:"Rent Now"},
           {carName:"NissanGT-R",price:"$80.00/ day",imagePath:"/image 8.png",button:"Rent Now"},
           {carName:"Rolls-Royce",price:"$96.00/ day",imagePath:"/Car.png",button:"Rent Now"},
           {carName:"NissanGT-R",price:"$80.00/ day",imagePath:"/image 8.png",button:"Rent Now"},
       ]
       return(
           <div className="flex sm:flex-row md:flex-col w-[1280px] h-[452px]"> 
           <div className="flex justify-center w-[1272px] h-[44px] gap-[940px] pb-[28px] pt-[46px]">
            <h2 className="font-plusJakartaSans font-semibold text-[16px] text-[#90A3BF]">Popular Cars</h2>
            <h3 className="text-[#3563E9] font-plusJakartaSans font-semibold text-[16px]">View All</h3>
           </div>
               <div className="flex flex-wrap justify-center pt-[10px] gap-[32px]">
                 {
                   carDetails.map((vehicle) => {
                       return(
                           <CarCard carName={vehicle.carName} carPrice={vehicle.price} carButton={vehicle.button} imagePath={vehicle.imagePath} />
                       )
                   })
                 }
               </div>
           </div>
             
       )
}

export default PopularCar;