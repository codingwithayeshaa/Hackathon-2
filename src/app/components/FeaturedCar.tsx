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
           <div className="w-[1312px] h-[452px]"> 
               <div className="flex flex-wrap justify-center pt-[36px] w-[490] gap-[18px]">
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