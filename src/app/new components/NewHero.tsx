import React from "react";
import Image from "next/image";

const NewHero = ()  => {
    return(
            <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:w-full md:w-full md:px-6 lg:w-full lg:ml-20 pt-12">
            <div className="bg-blue-400 w-96 h-96 pt-2 sm:mx-12 lg:ml-8 border-2 rounded-lg">
            <h1 className="w-72 h-16 pl-4 pt-4 font-medium text-3xl text-white">The Best Platform for Car Rental</h1>
            <p className="flex w-72 h-16 pt-10 pl-4 font-medium text-white">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className="w-32 h-16 px-4 ml-4 mt-10 rounded-md font-medium text-white bg-blue-600">Rental Car</button>
            {/* <img src={vehicle.imageUrl} alt="" width={50} height={50} /> */}
              </div>  
    
            <div className="bg-blue-600 w-96 h-96 pt-2 sm:mx-12 lg:ml-48 border-2 rounded-lg">
                <h1 className="w-72 h-16 pl-4 pt-4 font-medium text-3xl text-white">Easy way to rent a car at a low price</h1>
                <p className="flex w-72 h-16 pt-10 pl-4 font-medium text-white">Providing cheap car rental services and safe and comfortable facilities.</p>
                <button className="w-32 h-16 mt-10 ml-4 px-4  rounded-md font-medium text-white bg-blue-400">Rental Car</button>
                 {/* <img src={vehicle.imageUrl} alt="" width={50} height={50} /> */}
                 </div>
            </div>
    )
}
export default NewHero;