import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavButton from "../button/NavButton";

const Navbar = () => {
  return (
    <nav className="bg-nav sticky top-0 z-50 mb-4 w-full">
      <div className="flex-between mx-auto max-w-[1376px] p-4 md:mb-10  md:px-8 md:py-6">
        <Link href="/" className="order-2 flex items-center gap-1">
          <div className="w-[63px] md:w-[96px]">
            <Image
              src="/svg/logo.svg"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt="IMDS"
            />
          </div>
        </Link>

        <div className="flex-start order-3 gap-1 max-md:hidden">
          <NavButton href="/">Home</NavButton>
          <NavButton href="/">Favourite</NavButton>
          <NavButton href="/">About</NavButton>
        </div>

        <Link href="/" className="order-1 flex items-center gap-1 md:hidden">
          <div className="flex-center w-[32px] md:w-[32px]">
            <Image
              src="/svg/burger-menu.svg"
              width={18}
              height={24}
              alt="burger-menu-icon"
            />
          </div>
        </Link>

        <Link href="/" className="order-3 flex items-center gap-1 md:hidden">
          <div className="flex-center w-[32px] md:w-[32px]">
            <Image
              src="/svg/search.svg"
              width={18}
              height={24}
              alt="search-icon"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
