import React from "react";
import FlashSaleCard from "./FlashSaleCard";

const FlashSale = () => {
  return (
    <div className="min-h-[150px] w-[80vw]">
      <h1 className="text-2xl">FlashSale</h1>
      <div>
        <div className="flex justify-between items-center p-3">
          <p className="text-[orange]">On Sale Now</p>
          <a href="" className="text-[orange] border-2 border-orange-300 p-2">
            SHOP ALL PRODUCTS
          </a>
        </div>
        <hr className="w-full" />
        <FlashSaleCard />
      </div>
    </div>
  );
};

export default FlashSale;
