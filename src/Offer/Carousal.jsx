"use client";

import { Carousel } from "flowbite-react";
import test from "../assets/test.png";

import React from "react";

const Carousal = () => {
  return (
    <div className="w-[80%] h-auto min-h-[300px]">
      <Carousel slideInterval={70000} className="carousal h-auto min-h-[300px]">
        <div>
          <a href="">
            <img src={test} alt="dsfgsd" className="w-full object-cover" />
          </a>
        </div>
        <div>
          <a href="">
            <img
              src="public/assets/images/OfferTemplate1.png"
              alt="dsfgsd"
              className="w-full h-auto object-cover"
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              src="public/assets/images/OfferTemplate1.png"
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
