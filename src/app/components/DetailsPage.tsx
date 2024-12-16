import Image from "next/image";
import { ArrowUpDown } from 'lucide-react';
import React from "react";

const DetailsPage = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FFFFFF] h-[172px] pt-[48px] shadow-md">

            {/* Pick-Up Section */}
            <div className="w-[432px] h-[112px] border rounded-lg ml-[64px] ">
            <Image src= "/Pick - Up.png" alt= "" width={500} height={300} />
            <ArrowUpDown  className="w-[32px] h-[22px] ml-[480px] bg-[#3563E9] p-[4px] rounded-sm text-[#FFFFFF] "/>
            </div>
        
            {/* Drop-Off Section */}
            <div className="w-[432px] h-[112px] border rounded-lg ml-[80px]">
                <Image src= "/Drop - Off.png" alt= "" width={500} height={300} />
            </div>
        </div> 
    )
}
export default DetailsPage;