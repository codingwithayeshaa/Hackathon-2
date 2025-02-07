import React from "react";
import { Search } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Settings } from 'lucide-react';

const Header = () => {
    return(
      <div className="grid grid-cols sm:w-full md:grid-cols-3 lg:grid-cols-4">
      <div className="flex w-1080 h-272 border-2px border-gray-200 bg-white">
          <h3 className="w-148 h-30 pt-6 sm:pl-10 md:pl-16 lg:pl-16 font-bold text-2xl text-blue-600">MORENT</h3>
          
        <div>
                    <button className="flex sm:w-96 sm:mt-24 md:w-96 md:ml-8 md:mt-6 lg:w-96 lg:ml-8 lg:mt-6 border-2 rounded-3xl h-10 my-6">
                    <Search className="w-16 h-8 pt-2 pl-2 text-slate-300"/><input type="text" placeholder="Search something here" className="w-full pt-2 pl-2"/><SlidersHorizontal className="w-24 h-8 pt-2 text-slate-300"/>
                    </button>
         </div>
          <div className="hidden md:visible lg:visible w-302 h-12 ml-80 pt-8 ">
          <Heart className="w-20 h-8  text-gray-300"/>
          <Bell className="w-20 h-8  text-gray-300 "/>
          <Settings className="w-20 h-8  text-gray-300"/>
          <img src="/Profil.png" alt="Profile" width={50} height={50}/>
          </div>
        </div>
        </div>
    )
}
export default Header;