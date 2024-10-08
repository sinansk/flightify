import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { EarthIcon, HomeIcon, LogInIcon, TagIcon } from "lucide-react";
import AirPlane from "../assets/airplane.png";
import { createModal } from "@/utils/modalHooks";
const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  function onNavChange() {
    setTimeout(() => {
      const triggers = document.querySelectorAll(
        '.submenu-trigger[data-state="open"]',
      );
      if (triggers.length === 0) return;

      const firstTrigger = triggers[0];
      const viewports = document.getElementsByClassName("submenu-viewport");

      if (viewports.length > 0) {
        const viewport = viewports[0];
        viewport.style.left = `${firstTrigger.offsetLeft}px`;
      }
    });
  }

  return (
    <nav className="w-full rounded-t-2xl bg-gray-100 p-4 text-black sm:mx-auto sm:w-[70vw]">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={AirPlane} className="h-10 w-10" />
          <h1 className="hidden text-xl font-bold sm:block">
            <Link to="/">PLANE SCOPE</Link>
          </h1>
        </div>
        <NavigationMenu onValueChange={onNavChange}>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem className="hover:text-gray-500">
              <Link to="/" className="flex items-center gap-1 text-black">
                <HomeIcon color="#4c1d95" size={14} />
                <span>Home</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center gap-1 hover:text-gray-500">
              <TagIcon size={14} color="#4c1d95" />
              <span>Deals</span>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center gap-1 hover:text-gray-500">
              <EarthIcon color="#4c1d95" size={14} />
              <span>Discover</span>
            </NavigationMenuItem>
            {user ? (
              <NavigationMenuItem>
                <NavigationMenuTrigger className="submenu-trigger">
                  {user?.user?.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="cursor-pointer">
                  <Link
                    to="my-bookings"
                    className={navigationMenuTriggerStyle()}
                  >
                    My Bookings
                  </Link>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    // onClick={() => dispatch(logout())}
                    onClick={() =>
                      createModal("ConfirmationModal", {
                        title: "Are you sure ?",
                        text: "Do you want to logout?",
                        onConfirm: () => dispatch(logout()),
                      })
                    }
                  >
                    Logout
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem className="">
                <Link
                  to="/login"
                  className="flex items-center gap-1 text-black"
                >
                  <LogInIcon color="#4c1d95" size={14} />
                  <span>Login</span>
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
