import React, { useState } from "react";
import { LuStore } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Counter from "./Counter";

const CartItem = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  return (
    <div>
      {/* store name */}
      <div className="text-[#757575] flex items-center bg-white p-3 text-md font-semibold cursor-pointer">
        <input type="checkbox" name="" id="" className="me-4" />
        <LuStore />
        <p className="me-1 ms-2">Prashrijan Shrestha's Store</p>
        <IoIosArrowForward />
      </div>
      <div>
        <div className="border-t-[1px] bg-white shadow-sm ">
          <div className="space-y-4 p-3 md:flex md:items-center md:justify-between md:space-y-0">
            <input type="checkbox" name="" id="" />
            {/* Image */}
            <a href="#" className="shrink-0 md:order-1">
              <img
                className="h-20 w-20"
                src="https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLm5wL3AvNzFhMWE5NWUyMzk4MDcyMGE1ZDU4NGUxODhlNjgyZmEuanBn_2200x2200q75.png_.webp"
                alt="imac image"
              />
            </a>
            {/* Product Description */}
            <div className="w-1/2 md:order-2">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:underline"
              >
                TPE Double Color Yoga Mat 183*61*0.6cm
              </a>
              <br />
              <span className="text-sm text-[#757575]">
                No Brand, Color Family:Multicolor
              </span>
            </div>
            {/* Price */}
            <div className="text-end md:order-3 flex flex-col gap-2">
              <p className="font-semibold text-[#f57224] text-lg">Rs. 1,499</p>
              <div className="flex items-center gap-2 text-xl text-[#757575]">
                <FaRegHeart />
                <FaRegTrashAlt />
              </div>
            </div>
            {/* Quantity Control */}
            <label htmlFor="counter-input" className="sr-only">
              Choose quantity:
            </label>
            <div className="flex items-center justify-between md:order-4 md:justify-end ms-10">
              <Counter count={cartItemCount} setCount={setCartItemCount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
