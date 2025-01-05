import React from "react";

const CategoriesCard = () => {
  return (
    <a href="" className="inline-block hover:shadow hover:shadow-gray-800">
      <div className="p-5 flex flex-col justify-center items-center">
        <img src="/assets/images/watchProduct.png" alt="" />
        <p>Category Name</p>
      </div>
    </a>
  );
};

export default CategoriesCard;
