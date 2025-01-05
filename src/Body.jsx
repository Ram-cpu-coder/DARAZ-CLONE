import React from "react";

import Carousal from "./Offer/Carousal";
import AppAD from "./Offer/AppAD";
import HeroOffer from "./Offer/HeroOffer";
import FlashSale from "./Offer/FlashSale/FlashSale";
import Categories from "./Categories/Categories";
import JustForYou from "./Offer/Just For You/JustForYou";

const Body = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[auto]">
      <div className="md:w-[80%] w-[100%] border h-[auto] min-h-[300px] flex flex-col md:flex-row justify-center items-center">
        <Carousal />
        <AppAD />
      </div>
      <HeroOffer />
      <FlashSale />
      <Categories />
      <JustForYou />
    </div>
  );
};

export default Body;
