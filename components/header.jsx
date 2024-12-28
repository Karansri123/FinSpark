import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import 'remixicon/fonts/remixicon.css'
import { checkUser } from "@/lib/checkUser";

const Header = async() => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
        <h3 className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 tracking-wide uppercase hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
      FinSpark
    </h3>
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href={"/dashboard"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href={"/transaction/create"}>
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements:{
                avatarBox:"w-10 h-10"
              }
            }} />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
