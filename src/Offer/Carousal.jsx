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
        <div>
          <a href="">
            <img
              src="/assets/images/OfferTemplate1.png"
              alt="dsfgsd"
              className="w-full h-auto object-cover"
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              src="/assets/images/OfferTemplate1.png"
              alt="dsfgsd"
              className="w-full h-auto object-cover"
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              src="/assets/images/OfferTemplate1.png"
              alt="dsfgsd"
              className="w-full h-auto object-cover"
            />
          </a>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
