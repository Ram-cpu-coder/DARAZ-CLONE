import React from "react";

const FlashSaleCard = ({ item }) => {
  // if (!item) return;
  return item ? (
    <a href="" className="inline-block hover:border-2 p-2">
      <div className="flex flex-col justify-start">
        <img
          src="/assets/images/watchProduct.png"
          alt={item.name || "Product"}
          className="h-[150px] w-[150px]"
        />
        <p>{item.name}</p>
        <span className="text-[#f57224]">Rs. {item.newPrice}</span>
        <span className="flex gap-2">
          <p className="line-through text-[#9e9e9e]">Rs. {item.oldPrice}</p>
          <p>-{item.discountPercentage}%</p>
        </span>
      </div>
    </a>
  ) : (
    ""
  );
};

export default FlashSaleCard;
