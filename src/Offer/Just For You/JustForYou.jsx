import React from "react";
import FlashSaleCard from "../FlashSale/FlashSaleCard";

const JustForYou = () => {
  return (
    <div className="min-h-[150px] w-[80vw]">
      <h1 className="text-2xl">Just For You</h1>
      <div className="grid grid-rows-[auto] grid-cols-6">
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
      </div>
    </div>
  );
};

export default JustForYou;
