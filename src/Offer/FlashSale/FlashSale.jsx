import React from "react";
import FlashSaleCard from "./FlashSaleCard";

const FlashSale = ({ items }) => {
  return (
    <div className="min-h-[150px] w-[80vw]">
      <h1 className="text-2xl">FlashSale</h1>
      <div>
        <div className="flex justify-between items-center p-3">
          <p className="text-[#f57224]">On Sale Now</p>
          <a href="" className="text-[#f57224] border-2 border-orange-300 p-2">
            SHOP ALL PRODUCTS
          </a>
        </div>
        <hr className="w-full" />
        <div className="grid grid-rows-[auto] grid-cols-6">
          {items.map((item, index) => (
            <FlashSaleCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
