import React from "react";

const CategoriesCard = ({ category }) => {
  return category ? (
    <a href="" className="inline-block hover:shadow hover:shadow-gray-800">
      <div className="p-5 flex flex-col justify-center items-center">
        <img
          src="/assets/images/watchProduct.png"
          alt=""
          className="h-auto w-full"
        />
        <p>{category}</p>
      </div>
    </a>
  ) : (
    ""
  );
};

export default CategoriesCard;
