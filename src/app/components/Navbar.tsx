import React from "react";
import Link from "next/link";
import { Search } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Settings } from 'lucide-react';

const Navbar = () => {
    return(
      <div className="flex flex-col sm:flex-row w-[1100px] h-[80px] border-[1px] border-[#C3D4E9]">
        <div className="bg-[#FFFFFF]">
          <h3 className="w-[148px] h-[44px] pt-[24px] pl-[60px] font-bold font-plusJakartaSans text-[24px] text-[#3563E9]">MORENT</h3>
        </div>
          
        <div className="flex flex-col sm:flex-row pl-[83px] pt-[24px]">
                    <button className="flex border-6 border-[#f5f5f581] w-[320px] h-[36px] pt-[7px] pb-[7px] pl-[20px] gap-[10px] rounded-[18px] bg-[#f5f5f5d2]">
                    <Search className="w-[16px] h-[16px] text-[#596780]"/><input type="text" placeholder="Search something here" className=" bg-[#f5f5f5d2] w-[233px] h-[18px]
                   font-normal text-[12px]"/><SlidersHorizontal className="w-[20px] h-[16px] text-[#596780]"/>
                    </button>
         </div>
          <div className="flex w-[302px] h-[44px] pt-[30px] ml-[352px] gap-[8px]">
          <Heart className="w-[44px] h-[24px] text-[#C3D4E9]"/>
          <Bell className="w-[44px] h-[24px] text-[#C3D4E9]"/>
          <Settings className="w-[44px] h-[24px] text-[#C3D4E9]"/>
          </div>
        </div>
    )
}
export default Navbar;