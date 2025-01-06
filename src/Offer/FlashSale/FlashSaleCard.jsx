import React from "react";

const FlashSaleCard = ({ item }) => {
  console.log("Item in FlashSaleCard:", item);
  return (
    <a href="" className="inline-block hover:border-2 p-2">
      <div className="flex flex-col justify-start">
        <img
          src="/assets/images/watchProduct.png"
          alt=""
          className="h-[150px] w-[150px]"
        />
        <p>{}</p>
        <span className="text-[#f57224]">Rs. 34</span>
        <span className="flex gap-2">
          <p className="line-through text-[#9e9e9e  ]">Rs. 50</p>
          <p>-25%</p>
        </span>
      </div>
    </a>
  );
};

export default FlashSaleCard;
