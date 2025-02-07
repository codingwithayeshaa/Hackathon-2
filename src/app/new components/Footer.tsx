const Footer = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-1280 bg-white border-2">
            <div className="w-292 h-108 pt-20 pl-10">
                <h2 className="w-148 text-blue-700 text-3xl font-bold">MORENT</h2>
                <p className="w-80 pt-4 font-medium text-gray-950">Our vision is to provide convenience and help increase your sales business.</p>
            </div>
         
          
          <div className="w-full pl-16 grid grid-cols md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:pl-40 w-152 pl-6 pt-8">
                <h2 className="w-196 pl-2 font-plusJakartaSans font-bold text-2xl text-gray-950">About</h2>
                     <ul className="w-180 font-medium text-gray-950">
                        <li className="pt-6 w-44">How it works</li>
                        <li className="pt-6">Featured</li>
                        <li className="pt-6">Partnership</li>
                        <li className="pt-6 w-44">Bussiness Relation</li>
                     </ul>
            </div>

            <div className="lg:pl-64 w-152 pl-2 pt-8">
                <h2 className="w-152 pl-4 font-plusJakartaSans font-bold text-2xl text-gray-950">Community</h2>
                     <ul className="w-152 h-208 pl-8 font-medium text-gray-950">
                        <li className="pt-6">Events</li>
                        <li className="pt-6">Blogs</li>
                        <li className="pt-6">Podcast</li>
                        <li className="pt-6 w-44">Invite a friend</li>
                     </ul>
            </div> 

            <div className="lg:pl-96 lg:pt-8 w-152 pt-2 pl-8">
                <h2 className="w-152 font-plusJakartaSans font-bold text-2xl text-gray-950">Socials</h2>
                     <ul className="w-152 font-medium text-gray-950">
                        <li className="pt-6">Discord</li>
                        <li className="pt-6">Instagram</li>
                        <li className="pt-6">Twitter</li>
                        <li className="pt-6">Facebook</li>
                     </ul>
            </div>
            </div>
                <p className="lg:mt-72 w-full h-24 font-semibold">©2022 MORENT. All rights reserved</p>
            
            </div>
    )
}
export default Footer;