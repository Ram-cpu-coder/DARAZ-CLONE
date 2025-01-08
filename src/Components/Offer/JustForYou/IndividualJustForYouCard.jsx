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

import { useLocation } from "react-router-dom";
import { Carousel } from "flowbite-react";
import DropDown from "../../DropDown";

const IndividualJustForYouCard = () => {
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
    <div className="flex flex-col items-center w-full">
      <DropDown />
      <div className="w-full py-3 border">navigation path</div>
      <div className="flex gap-3">
        <div className="flex flex-col">
          <div>
            <img
              src={item.imgSrc}
              alt=""
              className="h-auto w-[350px] object-cover"
            />
          </div>
          <div className="h-[80px] w-[300px] border">
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
        <div className="flex flex-col gap-4">
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
                <a href="">No. of ratings</a>
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
            <p className="flex">
              Brand: <a href="">Brand</a> |
              <a href="">More items of that brand</a>
            </p>
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
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p>Delivery Options</p>
            <div className="flex justify-between items-center">
              <p className="flex items-center">
                {" "}
                <SlLocationPin /> "Location from data"
              </p>
              <Link to="">CHANGE</Link>
            </div>
          </div>
          <hr />
          <div className="flex flex-col">
            <p className="flex justify-between items-center">
              <p>Return & Warranty</p>
              <IoInformationCircleOutline />
            </p>
            <div className="flex items-center gap-2">
              <GiReturnArrow />
              <p>14 days easy return</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualJustForYouCard;