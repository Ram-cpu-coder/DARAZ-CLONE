import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center border-b bg-[white] pb-1 sticky top-0">
      <div className="flex justify-between items-center w-[80%] h-[75px]">
        {/* logo */}
        <div className="h-[80px] w-[200px] flex items-center">
          <a href="">
            <img
              src="/assets/images/DarazLogo.png"
              alt="Daraz Logo"
              className="h-[80px] w-[200px]"
            />
          </a>
        </div>
        {/* search bar */}
        <div className="relative">
          <input
            type="search"
            className="w-[60vw] h-[50px]"
            placeholder="Search in Daraz"
          />
          {/* icon-search */}
          <CiSearch className="absolute top-0 right-0 text-5xl h-[48.75px] border-l" />
        </div>

        {/* icon-cart */}
        <a href="">
          <PiShoppingCartSimple className="w-[30px] h-[30px]" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
