import React from "react";

import { Link } from "react-router-dom";

import { PiShoppingCartSimple } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="z-40 flex justify-center items-center border-b bg-[#f57224] pb-1 sticky top-0">
      <div className="flex justify-between items-center w-[80%] h-[75px]">
        {/* logo */}
        <div className="h-[80px] w-[200px] flex items-center">
          <Link to="/">
            <img
              src="/assets/images/DarazLogo.png"
              alt="Daraz Logo"
              className="h-auto w-[150px]"
            />
          </Link>
        </div>
        {/* search bar */}
        <div className="flex w-[55vw] h-[50px] bg-white rounded-md">
          <input
            className="w-full h-full rounded-md  border-none outline-none px-4"
            placeholder="Search in Daraz"
          />
          {/* icon-search */}
          <CiSearch className="h-full p-2 w-[60px] text-2xl border-l rounded-md bg-[#ffbf80]" />
        </div>

        {/* icon-cart */}
        <Link to="/cart">
          <PiShoppingCartSimple className="w-[30px] h-[30px]" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
