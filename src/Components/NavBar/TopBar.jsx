"use client";

import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <nav className="bg-[#f57224] border-gray-200 dark:bg-gray-900 text-white max-h-[50px] text-center ">
      <div className="flex items-center justify-center">
        <div className="w-full flex justify-end items-center h-[auto]">
          <ul className="flex justify-center items-center w-[75%] gap-7">
            <li>
              <Link to="#" className="">
                SAVE MORE ON APP
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                BECOME A SELLER
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                HELP & SUPPORT
              </Link>
            </li>
            <li>
              <Link to="/login" className="">
                LOGIN
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                SIGN UP
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                भाषा परिवर्तन
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
