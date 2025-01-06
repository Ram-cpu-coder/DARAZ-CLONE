import React from "react";

const FlashSaleCard = ({ item }) => {
  // if (!item) return;
  return item ? (
    <a href="" className="inline-block hover:border-2 p-2">
      <div className="flex flex-col justify-start">
        <img
          src="/assets/images/watchProduct.png"
          alt=""
          className="h-auto w-[150px] object-cover"
        />
        <p>{data.name}</p>
        <span className="text-[#f57224]">Rs. {data.newPrice}</span>
        <span className="flex gap-2">
          <p className="line-through text-[#9e9e9e]">Rs. {data.oldPrice}</p>
          <p>-{data.discountPercentage}%</p>
        </span>
      </div>
    </a>
  ) : (
    ""
  );
};

export default FlashSaleCard;
