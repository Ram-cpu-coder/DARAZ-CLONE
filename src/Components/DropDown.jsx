import React from "react";
import { useState } from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[100vw] flex justify-center items-center h-[50px] bg-[white]">
      <div className="w-[80%]">
        <div
          className="relative px-3 w-[100px] flex justify-start"
          onMouseEnter={() => {
            setIsOpen(true);
          }}
        >
          {isOpen ? (
            <button
              className="flex items-center w-[300px]  text-[#fe8e00]"
              onClick={() => setIsOpen(false)}
            >
              Categories <RiArrowDropUpLine className="text-3xl" />
            </button>
          ) : (
            <button className="flex items-center w-[300px]">
              Categories <RiArrowDropDownLine className="text-3xl" />
            </button>
          )}
          {isOpen && (
            <ul
              className="absolute top-[40px] left-0 bg-[white] px-3 py-5 min-h-[100px] h-[auto] border flex flex-col gap-2 w-[250px]"
              onMouseEnter={() => {
                setIsOpen(true);
              }}
              onMouseLeave={() => {
                setIsOpen(false);
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
      </div>
    </div>
  );
};

export default DropDown;
