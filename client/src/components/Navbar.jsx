import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './ui/navigation-menu';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-100 text-black p-4 w-[800px]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link to="/">Plane Scape</Link>
        </h1>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem className="hover:text-gray-500">
              <Link to="/" className="text-black">Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className=" ">

              <NavigationMenuTrigger >
                Joane Smith
              </NavigationMenuTrigger>
              <NavigationMenuContent 
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle() }>
                    My Flights
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Logout
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;




