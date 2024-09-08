import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Loader2, Menu, Moon, ShoppingCart, Sun, User } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const admin = false;
  const loading = false;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex py-6 px-16 w-screen items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-orange hover:text-hoverOrange text-2xl">
            Restaurant Food
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-black">
              Home
            </Link>
            <Link to="/profile" className="text-black">
              Profile
            </Link>
            <Link to="/order/status" className="text-black">
              Order
            </Link>
          {admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Dashboard</MenubarTrigger>
                <MenubarContent>
                  <Link to="/admin/restaurant">
                    <MenubarItem>Restaurant</MenubarItem>
                  </Link>
                  <Link to="/admin/menu">
                    <MenubarItem>Menu</MenubarItem>
                  </Link>
                  <Link to="/admin/orders">
                    <MenubarItem>Orders</MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
                <DropdownMenuItem>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link to="/cart" className="relative cursor-pointer text-black">
          <ShoppingCart />
          <Button size={'sm'} className="absolute -inset-y-3 left-2 text-xs rounded-full w-2 h-2 bg-red-500 hover:bg-red-500">1</Button>
          </Link>
          <div>
            <Avatar>
              <AvatarImage/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            { 
            loading ?
              (
              <Button className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 w-4 h-4 animate-spin "/>Please wait</Button>
              )
             : (
              <Button className="bg-orange hover:bg-hoverOrange">Logout</Button>
            )
          }
          </div>
          </div>
        </div>
        <div className="md:hidden lg:hidden ">
          {/* Mobile Responsive */}
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;


const MobileNavbar = () => {
  return(
    <Sheet>
      <SheetTrigger asChild>
        <Button size={'icon'} className="rounded-full bg-gray-200 text-black hover:gray-200" variant="outline"><Menu size={'18'}/></Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <div className="flex justify-between items-center w-full mt-8">
          <SheetTitle>RESTAURANT FOOD</SheetTitle>
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
                <DropdownMenuItem>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </SheetHeader>
        <Separator className="my-2"/>
        <SheetDescription className="flex-1">
          <Link to='/'>
          <User />
          <span>Profile</span>
          </Link>
        </SheetDescription>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">Logout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}