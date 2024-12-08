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
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Sign Up</a></li>
          </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
    )
}
export default MobileNavbar;