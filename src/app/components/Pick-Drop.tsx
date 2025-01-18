import React from "react";
import Image from "next/image";
import { ArrowUpDown} from 'lucide-react';

const PickDrop = () => {
    return(
         <div className="flex justify-center w-[460px] gap-[30px] ml-[396px] mt-[40px]">
              <Image src= "/Pick - Up.png" alt= "" width={500} height={300} />
              <div className="bg-[#3563E9] text-[#FFFFFF] text-xsm w-[196px] h-[30px] px-[12px] shadow-md mt-[40px] pt-[6px] rounded-md">
                <ArrowUpDown className="text-xs w-[16px] h-[16px] pt-[2px]"/>
              </div>
              <Image src= "/Drop - Off.png" alt= "" width={500} height={300} />
                </div>
    )
}

export default PickDrop;