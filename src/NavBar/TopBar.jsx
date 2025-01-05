"use client";

import React from "react";

const TopBar = () => {
  return (
    <nav className="bg-[white] border-gray-200 dark:bg-gray-900 text-black h-[40px] text-center">
      <div className="flex flex-wrap items-center justify-center mx-auto">
        <div className="w-full flex justify-end items-center h-[40px]">
          <ul className="flex justify-center items-center w-[75%] gap-[50px]">
            <li>
              <a href="#" className="">
                SAVE MORE ON APP
              </a>
            </li>
            <li>
              <a href="#" className="">
                BECOME A SELLER
              </a>
            </li>
            <li>
              <a href="#" className="">
                HELP & SUPPORT
              </a>
            </li>
            <li>
              <a href="#" className="">
                LOGIN
              </a>
            </li>
            <li>
              <a href="#" className="">
                SIGN UP
              </a>
            </li>
            <li>
              <a href="#" className="">
                भाषा परिवर्तन
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
