"use client";
import React from "react";

import { Carousel } from "flowbite-react";
import DropDown from "../../DropDown";

const IndividualFlashCard = () => {
  return (
    <>
      <DropDown />
      <div className="w-full py-3 border">navigation path</div>
      <div className="flex">
        <div>
          <img src="" alt="" />
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
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
        <div className="flex flex-col">
          <div>
            <h1>Name of the Product</h1>
            <div className="flex justify-between">
              <span>
                (rating with star )and <a href="">(number of ratings)</a>
              </span>
              <span>share and love icons</span>
            </div>
            <p className="flex">
              Brand: <a href="">Brand</a>|
              <a href="">More items of that brand</a>
            </p>
          </div>
          <div>
            <p>Price of Product</p>
            <p>
              Old Price <span>-discountPercentage</span>
            </p>
            <p>
              Promotions <span>Voucher banner</span>
            </p>
          </div>
          <div className="flex flex-col">
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
            <p className="flex">
              Quantity
              <span>Count with two plus and minus button </span>
            </p>
          </div>
          <div className="flex">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualFlashCard;
