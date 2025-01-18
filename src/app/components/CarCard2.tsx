import { Heart } from 'lucide-react';
import { Fuel } from 'lucide-react';
import { ShipWheel } from 'lucide-react';
import { Users } from 'lucide-react';

const CarCard2 = (props:any) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 w-[246px] h-[336px]">
        <div className="w-[252px] h-[336px] bg-[#FFFFFF] pt-[4px]">
         <h3 className="text-[#1A202C] font-plusJakartaSans text-[20px] font-bold pl-[16px] pt-[8px] h-[14px]">{props.carName}</h3>
         <Heart  className="h-[20px] pl-[196px] w-[240px] text-[#90A3BF]"/>
         <p className="font-bold font-plusJakartaSans w-[128px] h-[20px] text-[14px] text-[#90A3BF] pl-[16px]">SUV</p>
         <img src={props.imagePath} alt="Car Image" className="w-[230px] h-[156px] pt-[72px]"/>
         <div className="flex justify-center w-[260px] gap-[6px] h-[18px] pr-[12px] pt-[32px] text-[#90A3BF]">
           <Fuel className="w-[18px] h-[16px]"/>
           <p className='text-sm'>Fuel</p>
           <ShipWheel className="w-[18px] h-[16px]"/>
           <p className='text-sm'>Manual</p>
           <Users className="w-[18px] h-[16px]"/>
           <p className='text-sm'>6People</p>
         </div>
         <h4 className="font-bold w-[126px] h-[24px] pl-[16px] pt-[40px]">{props.carPrice}</h4>
         <button className="w-[110px] h-[36px] pl-[3px] rounded-[3px] ml-[121px] text-[#F5F5F5] bg-[#3563E9]">{props.carButton}</button>
     </div> 
     </div>
    )
 }
 export default CarCard2;
 