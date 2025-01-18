import React from "react";
import Image from "next/image";

const HeroSection = ()  => {
    return(
            <div className="grid grid-rows md:grid-cols-2 w-[980px] h-[320px] pt-[20px] pl-[90px]">
            <div className="bg-[#54A6FF] w-[506px] h-[320px] pt-[24px] pl-[24px] border-2 rounded-[8px]">
            <h1 className="w-[272px] h-[96px] font-medium font-plusJakartaSans text-[28px] text-[#FFFFFF]">The Best Platform for Car Rental</h1>
            <p className="w-[284px] h-[48px] pt-[2px] font-medium font-plusJakartaSans text-[16px] text-[#F5F5F5]">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className="w-[120px] h-[36px] mt-[20px] pr-[16px] pl-[16px] rounded-[2px] text-[#F5F5F5] bg-[#3563E9]">Rental Car</button>
             <Image src="/image 7.png" alt="car" width={400} height={300} className="pl-[90px] pr-[30px]"/>
              </div>  
    
            <div className="bg-[#3563E9] w-[516px] h-[320px] pt-[24px] md:ml-[106px] pl-[24px] border-2 rounded-[8px]">
                <h1 className="w-[272px] h-[96px] font-medium font-plusJakartaSans text-[28px] text-[#FFFFFF]">Easy way to rent a car at a low price</h1>
                <p className="w-[284px] h-[48px] pt-[2px] font-medium font-plusJakartaSans text-[16px] text-[#F5F5F5]">Providing cheap car rental services and safe and comfortable facilities.</p>
                <button className="w-[120px] h-[36px] mt-[20px] pr-[16px] pl-[16px] rounded-[2px] text-[#F5F5F5] bg-[#54A6FF]">Rental Car</button>
                <Image src="/image 8.png" alt="car" width={400} height={300} className="pl-[90px] pr-[30px]"/>
                 </div>
            </div>
    )
}
export default HeroSection;