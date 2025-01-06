import React from "react";
import JustForYouCard from "./JustForYouCard";

const JustForYou = ({ items }) => {
  return (
    <div className="min-h-[150px] w-[80vw]">
      <h1 className="text-2xl">Just For You</h1>
      <div className="grid grid-rows-[auto] grid-cols-6">
        {items.map((item) => {
          <JustForYouCard item={item} />;
        })}
        {/* <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard /> */}
      </div>
    </div>
  );
};

export default JustForYou;
