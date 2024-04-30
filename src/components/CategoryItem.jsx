import React from "react";

const CategoryItem = ({ category }) => {
  const { title, subtitle, imageUrl } = category;
  return (
    <div className="category-container h-80 relative overflow-hidden flex items-center justify-center border-2 border-black hover:bg-gray-200">
      <div
        className="background-image absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container bg-white opacity-70 h-32 w-full absolute flex flex-col items-center justify-center p-4 cursor-pointer">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700">{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
