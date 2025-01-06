import React from "react";
import CategoriesCard from "./CategoriesCard";
import categories from "../../Data/CategoriesItems";

const Categories = () => {
  return (
    <div className="min-h-[150px] w-[80vw]">
      <h1 className="text-2xl p-2">Categories</h1>
      <div className="grid grid-rows-2 grid-cols-8">
        {categories.map((category, index) => {
          return <CategoriesCard key={index} category={category} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
