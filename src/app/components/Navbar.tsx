import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Settings } from 'lucide-react';

const Navbar = () => {
    return(
      <div className="flex w-[1280px] h-[80px] border-[2px] border-[#F6F7F9] bg-[#FFFFFF]">
        <div className="pl-[4px]">
          <h3 className="w-[148px] h-[44px] pt-[24px] pl-[36px] font-bold font-plusJakartaSans text-[24px] text-[#3563E9]">MORENT</h3>
        </div>
          
        <div className="pl-[44px] md:pl-[83px] pt-[24px]">
                    <button className="flex border-6 border-[#f5f5f581] w-[320px] h-[36px] pt-[7px] pb-[7px] pl-[20px] gap-[10px] rounded-[18px] bg-[#f5f5f5d2]">
                    <Search className="w-[16px] h-[16px] text-[#596780]"/><input type="text" placeholder="Search something here" className=" bg-[#f5f5f5d2] w-[233px] h-[18px]
                   font-normal text-[12px]"/><SlidersHorizontal className="w-[20px] h-[16px] text-[#596780]"/>
                    </button>
         </div>
          <div className="flex w-[302px] h-[44px] pt-[6px] ml-[432px] px-[12px] mt-[26px] gap-[18px]">
          <Heart className="w-[44px] h-[24px] border rounded-3xl text-[#C3D4E9]"/>
          <Bell className="w-[44px] h-[24px] border rounded-3xl text-[#C3D4E9]"/>
          <Settings className="w-[44px] h-[24px] border rounded-3xl text-[#C3D4E9]"/>
          <img src="/Profil.png" alt="Profile" className="w-[48px] h-[26px]"/>
          </div>
        </div>
    )
}
export default Navbar;