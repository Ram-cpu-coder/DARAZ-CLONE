import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <div className="min-h-[150px] w-[80vw]">
      <h1 className="text-2xl p-2">Categories</h1>
      <div className="grid grid-rows-2 grid-cols-8">
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </div>
    </div>
  );
};

export default Categories;
