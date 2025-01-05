"use client";

import { Carousel } from "flowbite-react";

import React from "react";

const Carousal = () => {
  return (
    <div className=" w-[80%] border">
      <Carousel slideInterval={5000} className="w-full h-[300px]">
        <a href="">
          <img src="/assets/images/OfferTemplate1" alt="" />
        </a>
        <a href="">
          <img src="/assets/images/OfferTemplate2" alt="" />
        </a>
        <a href="">
          <img src="/assets/images/OfferTemplate1" alt="" />
        </a>
        <a href="">
          <img src="/assets/images/OfferTemplate2" alt="" />
        </a>
        <a href="">
          <img src="/assets/images/OfferTemplate1" alt="" />
        </a>
      </Carousel>
    </div>
  );
};

export default Carousal;
