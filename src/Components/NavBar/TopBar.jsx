"use client";

import React from "react";

const TopBar = () => {
  return (
    <nav className="bg-[#f57224] border-gray-200 dark:bg-gray-900 text-white max-h-[50px] text-center ">
      <div className="flex items-center justify-center">
        <div className="w-full flex justify-end items-center h-[auto]">
          <ul className="flex justify-center items-center w-[75%] gap-7">
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
