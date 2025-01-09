"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CiStar } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiMoneyWavyDuotone } from "react-icons/pi";
import { CiMobile2 } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";

import { useLocation } from "react-router-dom";
import { Carousel } from "flowbite-react";
import DropDown from "../../DropDown";

const IndividualFlashCard = () => {
  const [count, setCount] = useState(0);
  const [love, setLove] = useState(false);

  const location = useLocation();
  const { item } = location.state || {};

  const fullStars = Math.round(item.ratings);
  const emptyStars = 5 - fullStars;

  const handleCountIncrement = () => {
    setCount(count + 1);
  };
  const handleCountDecrement = () => {
    if (count < 1) {
    } else {
      setCount(count - 1);
    }
  };
  const handleLove = () => {
    if (love === true) {
      setLove(false);
    } else if (love === false) {
      setLove(true);
    }
  };

  return (
    <div className="flex justify-center bg-[#f5f5f5]">
      <div className="flex flex-col items-center w-[80%] bg-[white]">
        <DropDown />
        <div className="w-full py-3 bg-[#f5f5f5]">navigation path</div>
        <div className="flex gap-3 w-full">
          {/* images and carousal section */}
          <div className="flex flex-col w-[25%] p-2">
            <div>
              <img src={item.imgSrc} alt="" className="h-auto w-[350px]" />
            </div>
            <div className="h-[80px] w-[250px] border">
              <Carousel slide={false}>
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Carousel>
            </div>
          </div>
          {/* middle section having the detail of product like name and price */}
          <div className="flex flex-col gap-4 w-[50%]">
            <div className="py-3">
              <h1 className="font-bold text-2xl">{item.name}</h1>
              <div className="flex justify-between">
                <p className="flex items-center gap-2">
                  <div className="flex py-3">
                    {[...Array(fullStars)].map((_, index) => (
                      <CiStar className="star" key={index} />
                    ))}
                    {[...Array(emptyStars)].map((_, index) => (
                      <CiStar key={index} />
                    ))}
                  </div>
                  <a href="" className="hover:underline text-[#136cff]">
                    No. of ratings
                  </a>
                </p>
                <span className="flex gap-2 opacity-50 text-2xl items-center">
                  <a href="">
                    <IoShareSocial />
                  </a>
                  <button onClick={handleLove}>
                    {love === true ? (
                      <FaHeart className="text-[#f57224]" />
                    ) : (
                      <CiHeart />
                    )}
                  </button>
                </span>
              </div>
              <div className="flex">
                <p>Brand: </p> &nbsp;
                <a href="" className="text-[#136cff] hover:underline">
                  Brand &nbsp;
                </a>
                <p>|&nbsp;</p>
                <a href="" className="text-[#136cff] hover:underline">
                  More items of that brand
                </a>
              </div>
            </div>
            <hr />
            <div className="py-1">
              <p className="text-3xl text-[#f57224]">Rs. {item.newPrice}</p>
              <p>
                <span className="line-through opacity-50">
                  Rs. {item.oldPrice}
                </span>
                <span>-{item.discountPercentage}%</span>
              </p>
              <p>
                Promotions <span>Voucher banner</span>
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-4">
              <p className="flex">
                Color Family
                <span className="flex flex-col">
                  <p>Colour</p>
                  <span>images with different colors of the product</span>
                </span>
              </p>
              <p className="flex">
                Size
                <span className="flex flex-col">
                  <p>XXL</p>
                  <span>buttons with different sizes of the product</span>
                </span>
              </p>
              <p className="flex gap-2">
                Quantity
                <button
                  className={`${
                    count < 1 ? "cursor-not-allowed" : "cursor-pointer"
                  } border px-2 opacity-50 hover:bg-[grey]`}
                  onClick={handleCountDecrement}
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  className="border px-2 opacity-50 hover:bg-[grey]"
                  onClick={handleCountIncrement}
                >
                  +
                </button>
              </p>
            </div>
            <div className="flex gap-3 mt-3">
              <button className="border px-4 py-2 w-[250px] bg-[#2abbe8] text-white rounded">
                Buy Now
              </button>
              <button className="border px-4 py-2 w-[250px] bg-[#f57224] text-white rounded">
                Add to Cart
              </button>
            </div>
          </div>
          {/* delivery options */}
          <div className="flex flex-col gap-4 w-[25%] p-2 bg-[#fafafa]">
            <div className="flex flex-col">
              <p className="m-3 text-sm">Delivery Options</p>
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-2">
                  <SlLocationPin className="text-2xl" /> "Location from data"
                </p>
                <Link to="">CHANGE</Link>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CiDeliveryTruck className="text-2xl" />
                  <p className="flex flex-col">
                    <span>Standard Delivery</span>
                    <span className="text-sm opacity-[50%]">
                      Guranteed by 11-21 dec
                    </span>
                  </p>
                </div>
                <div>Rs. 125</div>
              </div>
              <div className="flex items-center gap-2">
                <PiMoneyWavyDuotone className="text-2xl" />
                <p>Cash on hand Available</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col">
              <p className="flex justify-between items-center">
                <p className="m-3 text-sm">Return & Warranty</p>
                <IoInformationCircleOutline className="" />
              </p>
              <div className="flex items-center gap-2">
                <GiReturnArrow className="text-2xl" />
                <p>14 days easy return</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Warranty Not Available</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="flex gap-2">
                <div className="w-[45%]">
                  <img
                    src="/assets/images/qr.png"
                    alt=""
                    className="h-[100px] w-[auto]"
                  />
                </div>
                <div className="download-box relative border rounded-lg flex flex-col items-start justify-center p-2 gap-3 shadow-lg">
                  <img
                    src="https://img.drz.lazcdn.com/g/tps/imgextra/i1/O1CN01XrNYQP1paGCVispyM_!!6000000005376-2-tps-82-82.png"
                    alt=""
                    className="h-[40px]"
                  />
                  <p className="text-xs opacity-[50%]">
                    Download app to enjoy exclusive discounts!
                  </p>
                </div>
              </div>
              <p className="flex mt-3">
                <CiMobile2 />
                <p className="text-xs">Scan with mobile</p>
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-xs opcaity-[50%]">Sold by</p>
                <h1>SELLER'S NAME</h1>
              </div>
              <Link to="" className="text-[#136cff] flex items-center gap-1">
                <TiMessages /> Chat Now
              </Link>
            </div>
            <div className="flex">
              <div className="flex flex-col items-start justify-between border-t-[1px] border-b-[1px] gap-2">
                <p className="text-xs opacity-[50%] p-2">
                  Positive Seller Ratings
                </p>
                <p className="text-3xl px-3">88%</p>
              </div>
              <div className="flex flex-col items-start justify-between border">
                <p className="text-xs opacity-[50%] p-2 gap-2">Ship on Time</p>
                <p className="text-3xl px-3">99%</p>
              </div>
              <div className="flex flex-col items-start justify-between border-t-[1px] border-b-[1px] gap-2">
                <p className="text-xs opacity-[50%] p-2">Chat Response Rate</p>
                <p className="text-xs opacity-[50%] px-3">Not enough data</p>
              </div>
            </div>
            <div className="flex justify-center pb-3">
              <a href="" className="text-[#136cff] text-sm">
                GO TO STORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualFlashCard;
