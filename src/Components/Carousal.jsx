"use client";

import { Carousel } from "flowbite-react";

import React from "react";

const Carousal = () => {
  return (
    <div className="w-full h-full">
      <Carousel className="carousal">
        <a href="">
          <img
            src="https://img.lazcdn.com/us/domino/d875228b-bf9a-460d-b582-bc9ce174c7ec_NP-1976-688.jpg_2200x2200q80.jpg"
            alt="..."
          />
        </a>
        <a href="">
          <img
            src="https://img.lazcdn.com/us/domino/9ff52f9b574ef5f34975e231516f3cbe.jpg_2200x2200q80.jpg"
            alt="..."
          />
        </a>
        <a href="">
          <img
            src="https://img.lazcdn.com/us/domino/50b532d0-18b6-4d25-a6a4-9d97fb0b0e89_NP-1976-688.jpg_2200x2200q80.jpg"
            alt="..."
          />
        </a>
      </Carousel>
    </div>
  );
};

export default Carousal;
