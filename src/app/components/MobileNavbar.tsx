import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import { Menu } from 'lucide-react';
  
const MobileNavbar = () => {
    return(
        <div>
             <Sheet>
  <SheetTrigger><Menu /></SheetTrigger>
  <SheetContent>\
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription className="bg-slate-500">
      <ul className="flex items-center justify-center gap-6 p-5 text-black">
               <li><a href="">Home</a></li>  
               <li><a href="">About</a></li>  
               <li><a href="">Service</a></li>  
               <li><a href="">Contact</a></li>  
             </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
    )
}
export default MobileNavbar;