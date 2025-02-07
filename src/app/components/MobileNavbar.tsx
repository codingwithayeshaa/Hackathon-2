import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import { Menu } from 'lucide-react';
  import { Heart } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Settings } from 'lucide-react';
  
const MobileNavbar = () => {
    return(
        <div>
             <Sheet>
  <SheetTrigger><Menu className="grid grid-cols md:hidden lg:hidden"/></SheetTrigger>
  <SheetContent className="bg-white w-44">
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription >
      <div className="flex text-black mt-6 w-64">
        <ul className="space-y-6">
         <li> <Heart/></li>
         <li><Bell /></li>
         <li> <Settings /></li>
         <li> <img src="/Profil.png" alt="Profile" className="w-12 h-12 p-2"/></li>
         </ul>
          </div>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
    )
}
export default MobileNavbar;