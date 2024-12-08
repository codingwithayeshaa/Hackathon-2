const CarCard = (props:any) => {
    return(
     <div className="flex flex-col sm:flex-row md:flex-row w-[420] h-[388px] gap[32px]">
        <div className="w-[234px] h-[338px] border-2">
         <h3 className="text-[#000000] font-bold pl-[20px] pt-[2px]">{props.carName}</h3>
         <img src={props.imagePath} alt="Car Image" className="w-[250px] h-[156px] pt-[96px]"/>
         <h4 className="w-[116px] h-[44px] pl-[24px] pt-[36px]">{props.carPrice}</h4>
         <button className="w-[120px] h-[36px] mt-[16px] pl-[6px] rounded-[6px] ml-[101px] text-[#F5F5F5] bg-[#3563E9]">{props.carButton}</button>
     </div>
     </div>
    )
 }
 export default CarCard;
 