"use client";

import { Carousel } from "flowbite-react";

import React from "react";

const Carousal = () => {
  return (
    <div className="w-full h-full">
      <Carousel>
        <a href="">
          <img src="./assets/images/OfferTemplate1.png" alt="..." />
        </a>
        <a href="">
          <img src="./assets/images/OfferTemplate2.png" alt="..." />
        </a>
        <a href="">
          <img src="./assets/images/OfferTemplate1.png" alt="..." />
        </a>
      </Carousel>
    </div>
  );
};

export default Carousal;
