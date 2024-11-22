import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {

  const session = await getServerSession(options);

  return (
    <div className="sticky top-0 flex justify-center">
      <nav className=" flex flex-row bg-black w-screen h-[7vh] px-4 py-2 justify-between items-center">
        <h1 className="text-3xl text-white">Next Auth Tutorial</h1>
        <NavigationMenu className="">
        <Link href="/">
            <NavigationMenuLink className="bg-none {navigationMenuTriggerStyle()}">
              <Button variant={"link"} className="text-white text-base">
                Home
              </Button>
            </NavigationMenuLink>
          </Link>
          <Link href="/public">
            <NavigationMenuLink className="bg-none {navigationMenuTriggerStyle()}">
              <Button variant={"link"} className="text-white text-base">
                Public
              </Button>
            </NavigationMenuLink>
          </Link>
          <Link href="/admin">
            <NavigationMenuLink className="bg-none {navigationMenuTriggerStyle()}">
              <Button variant={"link"} className="text-white text-base">
                Admin
              </Button>
            </NavigationMenuLink>
          </Link>
          <Link href="/client-member">
            <NavigationMenuLink className="bg-none {navigationMenuTriggerStyle()}">
              <Button variant={"link"} className="text-white text-base">
                Client Member
              </Button>
            </NavigationMenuLink>
          </Link>
          <Link href="/member">
            <NavigationMenuLink className="bg-none {navigationMenuTriggerStyle()}">
              <Button variant={"link"} className="text-white text-base">
                Server Member
              </Button>
            </NavigationMenuLink>
          </Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">
            <NavigationMenuLink className="bg-none {navigationMenuTriggerStyle()}">
              <Button variant={"link"} className="text-white text-base">
                Logout
              </Button>
            </NavigationMenuLink>
          </Link>
          ) : <Link href="api/auth/signin">
          <NavigationMenuLink className="bg-none {navigationMenuTriggerStyle()}">
            <Button variant={"link"} className="text-white text-base">
              Log In
            </Button>
          </NavigationMenuLink>
        </Link>}
        </NavigationMenu>
      </nav>
    </div>
  );
};

export default Navbar;
