import React from "react";
import { CiStar } from "react-icons/ci";

const JustForYouCard = ({ item }) => {
  const fullStars = Math.round(item.ratings);

  const emptyStars = 5 - fullStars;

  //   console.log(item);
  return (
    <a href="" className="inline-block hover:border-2 p-2">
      <div className="flex flex-col justify-start">
        <img
          src="/assets/images/watchProduct.png"
          alt=""
          className="h-auto w-[150px] object-cover"
        />
        <p>{item.name}</p>
        <div className="flex gap-2">
          <span className="text-[#f57224]">Rs. {item.newPrice}</span>
          <span className="flex gap-2 flex-col">
            {/* no need of discount percentage in just for you card */}
            <p>-{item.discountPercentage}%</p>
          </span>
        </div>

        <p className="flex">
          {[...Array(fullStars)].map((_, index) => (
            <CiStar className="star" key={index} />
          ))}

          {[...Array(emptyStars)].map((_, index) => (
            <CiStar key={index} />
          ))}

          {/* <CiStar className="star" />
          <CiStar className="star" />
          <CiStar className="star" />
          <CiStar />
          <CiStar /> */}
        </p>
      </div>
    </a>
  );
};

export default JustForYouCard;
