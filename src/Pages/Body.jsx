import React from "react";

import { Carousal, FlashSale } from "../Components/helper.js";

import AppAD from "../Components/AppAD";
import Categories from "../Components/Categories/Categories";
import JustForYou from "../Components/Offer/JustForYou/JustForYou";
import Footer from "../Footer.jsx";

const Body = ({ flashSaleItems }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#f5f5f5]">
      <div className="flex w-[80%] h-[500px] p-4">
        <Carousal />
        <AppAD />
      </div>
      <FlashSale items={flashSaleItems} />
      <Categories />
      <JustForYou items={flashSaleItems} />
      <Footer />
    </div>
  );
};

export default Body;
