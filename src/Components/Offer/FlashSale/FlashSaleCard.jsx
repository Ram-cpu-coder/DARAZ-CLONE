import React from "react";
import { Link } from "react-router-dom";

const FlashSaleCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <Link
        to="/individualFlashCard"
        state={{ item }}
        className="inline-block hover:border-2 p-2"
      >
        <div className="flex flex-col justify-start">
          <img
            src={item.imgSrc}
            alt=""
            className="h-auto w-[150px] object-cover"
          />
          <p>{item.name}</p>
          <span className="text-[#f57224]">Rs. {item.newPrice}</span>
          <p className="flex gap-2">
            <span className="line-through text-[#9e9e9e]">
              Rs. {item.oldPrice}
            </span>
            <span>-{item.discountPercentage}%</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FlashSaleCard;
