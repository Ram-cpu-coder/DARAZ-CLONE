import React from "react";
import { useState } from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative h-[50px] flex justify-start items-center px-3 w-full"
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      {isOpen ? (
        <button className="flex items-center w-[300px]">
          Categories <RiArrowDropUpLine className="text-2xl" />
        </button>
      ) : (
        <button className="flex items-center w-[300px]">
          Categories <RiArrowDropDownLine className="text-2xl" />
        </button>
      )}
      {isOpen && (
        <ul
          className="absolute top-[49px] left-0 bg-[white] px-3 py-5 min-h-[100px] h-[auto] border flex flex-col gap-2 w-[250px]"
          onMouseEnter={() => {
            setIsOpen(true);
          }}
        >
          <a href="">
            <li className="hover:text-[#f57224]">Category</li>
          </a>
          <a href="">
            <li className="hover:text-[#f57224]">Category</li>
          </a>
          <a href="">
            <li className="hover:text-[#f57224]">Category</li>
          </a>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
