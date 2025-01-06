import React from "react";

const FlashSaleCard = ({ item }) => {
  return (
    <a href="" className="inline-block hover:border-2 p-2">
      <div className="flex flex-col justify-start">
        <img
          src={item.imgSrc}
          alt=""
          className="h-auto w-[150px] object-cover"
        />
        <p>{item.name}</p>
        <span className="text-[#f57224]">Rs. {item.newPrice}</span>
        <span className="flex gap-2">
          <p className="line-through text-[#9e9e9e]">Rs. {item.oldPrice}</p>
          <p>-{item.discountPercentage}%</p>
        </span>
      </div>
    </a>
  );
};

export default FlashSaleCard;
