import React from "react";

import Carousal from "./Offer/Carousal";
import AppAD from "./Offer/AppAD";
import FlashSale from "./Offer/FlashSale/FlashSale";
import Categories from "./Categories/Categories";
import JustForYou from "./Offer/Just For You/JustForYou";

import flashSaleItems from "./FlashSaleItem";

const Body = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="flex w-[80%] h-[500px] p-4">
        <Carousal />
        <AppAD />
      </div>
      <FlashSale items={flashSaleItems} />
      <Categories />
      <JustForYou />
    </div>
  );
};

export default Body;
