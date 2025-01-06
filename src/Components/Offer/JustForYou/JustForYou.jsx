import React from "react";
import JustForYouCard from "./JustForYouCard";

const JustForYou = ({ items }) => {
  // console.log(items);
  return (
    <div className="min-h-[150px] w-[80vw] flex flex-col">
      <h1 className="text-2xl">Just For You</h1>
      <div className="grid grid-rows-[auto] grid-cols-6">
        {items.map((item) => {
          return <JustForYouCard item={item} />;
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
      <a href="" className="m-3 flex justify-center">
        <button className="text-center  border px-[100px] py-2">
          LOAD MORE
        </button>
      </a>
    </div>
  );
};

export default JustForYou;
