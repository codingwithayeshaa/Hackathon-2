import Image from "next/image";
import CarCard2 from "./CarCard2";
import Link from "next/link";

const RecommendCar = () => {
   const carDetails=[
           {carName:"All New",price:"$72.00/ day",imagePath:"/Car (1).png",button:"Rent Now"},
           {carName:"CR-V",price:"$80.00/ day",imagePath:"/Car (2).png",button:"Rent Now"},
           {carName:"All New Terios",price:"$74.00/ day",imagePath:"/Car (5).png",button:"Rent Now"},
           {carName:"CR-V",price:"$80.00/ day",imagePath:"/Car (2).png",button:"Rent Now"},
   
            {carName:"MGZX Excite",price:"$76.00/ day",imagePath:"/Car (3).png",button:"Rent Now"},
            {carName:"New MGZS",price:"$80.00/ day",imagePath:"/Car (4).png",button:"Rent Now"},
            {carName:"MGZX Excite",price:"$74.00/ day",imagePath:"/Car (3).png",button:"Rent Now"},
           {carName:"New MGZS",price:"$80.00/ day",imagePath:"/Car (4).png",button:"Rent Now"},
       ]
       return(
          <div className="flex sm:flex-row md:flex-col lg:flex-col w-[1210px] h-[452px]">
            <h2 className="font-plusJakartaSans font-semibold pl-[56px] text-[16px] text-[#90A3BF]">Recommended Cars</h2> 
           <div className="flex justify-center pt-[10px]"> 
           </div> 
               <div className="flex flex-wrap justify-center gap-[32px] w-[1210px] pl-[60px]">
                 {
                   carDetails.map((vehicle) => {
                       return(
                           <CarCard2 carName={vehicle.carName} carPrice={vehicle.price} carButton={vehicle.button} imagePath={vehicle.imagePath} />
                       )
                   })
                 }
  
                </div>
              <Link href="/DetailsPage"><button className="ml-[536px] font-semibold mt-[20px] bg-[#3563E9] text-[#FFFFFF] 
              h-[42px] py-[8px] px-[8px] rounded-md"> Show more Cars</button></Link>
           </div> 
       )
        }

export default RecommendCar;