"use client";

import { Carousel } from "flowbite-react";

import React from "react";

const Carousal = () => {
  return (
    <div className="w-[80%] h-[auto] min-h-[300px]">
      <Carousel
        slideInterval={3000}
        className="carousal h-[auto] min-h-[300px]"
      >
        <a href="">
          <img src="/assets/images/OfferTemplate1.png" alt="dsfgsd" />
        </a>
        <a href="">
          <img src="/assets/images/OfferTemplate2.png" alt="sdfgsdfg" />
        </a>
        <a href="">
          <img src="/assets/images/OfferTemplate1.png" alt="sdfgdsfg" />
        </a>
        <a href="">
          <img src="/assets/images/OfferTemplate2.png" alt="sdfgsdfg" />
        </a>
        <a href="">
          <img src="/assets/images/OfferTemplate1.png" alt="sdfgsdfg" />
        </a>
      </Carousel>
    </div>
  );
};

export default Carousal;
