import React from "react";

import Carousal from "../Components/Carousal";
import AppAD from "../Components/AppAD";
import FlashSale from "../Components/Offer/FlashSale/FlashSale";
import Categories from "../Components/Categories/Categories";
import JustForYou from "../Components/Offer/JustForYou/JustForYou";
import Footer from "./Footer";

import flashSaleItems from "../Data/FlashSaleItem";

const Body = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
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
