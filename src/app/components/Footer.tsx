const Footer = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FFFFFF] w-[1110px] h-[402px] mt-[464px] border">
            <div className="w-[292px] h-[108px] pt-[60px] pl-[60px] gap-[16px]">
                <h2 className="w-[148px] h-[44px] text-[32px] text-[#3563E9] font-plusJakartaSans font-bold">Morent</h2>
                <p className="w-[292px] h-[48px] font-medium font-plusJakartaSans text-[16px] pt-[6px] text-[#131313]">Our vision is to provide convenience and help increase your sales business.</p>
            </div>
         
          
          <div className="flex sm:flex-row">
          <div className="w-[152px] h-[244px] pt-[48px] pl-[60px]">
                <h2 className="w-[152px] h-[32px] pt-[16px] font-plusJakartaSans font-bold text-[20px] text-[#1A202C]">About</h2>
                     <ul className="w-[152px] h-[208px] font-medium text-[16px] text-[#131313]">
                        <li className="pt-[40px]">How it works</li>
                        <li className="pt-[24px]">Featured</li>
                        <li className="pt-[24px]">Partnership</li>
                        <li className="pt-[24px]">Bussiness Relation</li>
                     </ul>
            </div>

            <div className="w-[152px] h-[244px] pl-[124px] pt-[48px]">
                <h2 className="w-[152px] h-[32px] pt-[16px] font-plusJakartaSans font-bold text-[20px] text-[#1A202C]">Community</h2>
                     <ul className="w-[152px] h-[208px] font-medium text-[16px] text-[#131313]">
                        <li className="pt-[40px]">Events</li>
                        <li className="pt-[24px]">Blogs</li>
                        <li className="pt-[24px]">Podcast</li>
                        <li className="pt-[24px]">Invite a friend</li>
                     </ul>
            </div> 

            <div className="w-[152px] h-[244px] pl-[152px] pt-[48px]">
                <h2 className="w-[152px] h-[32px] pt-[16px] font-plusJakartaSans font-bold text-[20px] text-[#1A202C]">Socials</h2>
                     <ul className="w-[152px] h-[208px] font-medium text-[16px] text-[#131313]">
                        <li className="pt-[40px]">Discord</li>
                        <li className="pt-[24px]">Instagram</li>
                        <li className="pt-[24px]">Twitter</li>
                        <li className="pt-[24px]">Facebook</li>
                     </ul>
            </div>
            </div>
       
            <div className="border w-[1110px] mt-[36px]">
                <p className="w-[292px] h-[24px] text-[16px] pl-[20px] pt-[24px] font-semibold font-plusJakartaSans ">©2022 MORENT. All rights reserved</p>
                <p className="w-[996px] h-[24px] text-[16px] pl-[732px] pt-[2px] font-semibold font-plusJakartaSans ">Privacy & Policy</p>
             <p className="w-[1196px] h-[24px] text-[16px] pl-[906px] font-semibold font-plusJakartaSan">Terms & Conditions</p>
            </div>
            </div>
    )
}
export default Footer;