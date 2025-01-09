import Dropdown from "../Components/DropDown";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import CartItem from "../Components/CartItem";
import { IoLocationOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh-104px)] overflow-x-hidden bg-[#f5f5f5] flex flex-col gap-4 pb-4">
      {/* Category DropDown */}
      <Dropdown />

      {/* Main Cart Page */}
      <div className="flex justify-center h-full gap-4">
        {/* Left Container */}
        <div className="left-container w-[40%] flex flex-col gap-4">
          {/* Select All Tab */}
          <div className=" bg-white p-3 text-[#757575] text-sm  flex items-center justify-between">
            <div className="left flex items-center gap-3 ">
              <input type="checkbox" name="" id="" />
              <p>
                SELECT ALL (<span>Count</span> ITEM(S))
              </p>
            </div>
            <div className="right flex items-center gap-1">
              <RiDeleteBin5Line />
              <p>DELETE</p>
            </div>
          </div>

          {/* Cart Item */}
          <div className="flex flex-col gap-3">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        {/* Right Container */}
        <div className="right-container w-[20%] h-[311px] bg-white p-4 flex flex-col gap-2">
          <p className="text-[#757575] text-md">Location</p>

          <div className="location flex items-center gap-4 text-xl mb-4">
            <IoLocationOutline />
            <p className="text-xs">Sydney, NSW, 2099</p>
          </div>

          <hr />

          <div className="text-[#757575] text-md flex flex-col gap-2">
            <h2 className="font-semibold text-lg text-black mt-2">
              Order Summary
            </h2>

            <p className="flex items-center justify-between">
              Subtotal (count items)
              <span className="text-black font-semibold text-lg"> Rs. 0</span>
            </p>
            <p className="flex items-center justify-between">
              Shipping Fee
              <span className="text-black font-semibold text-lg">Rs. 0</span>
            </p>
            <p className="flex items-center justify-between">
              Total
              <span className="text-[#f57224] font-semibold text-lg">
                Rs. 0
              </span>
            </p>
          </div>

          <button className="bg-[#f57224] text-white py-2 rounded-sm">
            PROCEED TO CHECKOUT <span>(count)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
