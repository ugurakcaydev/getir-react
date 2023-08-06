import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function ProductItem({ product }) {
  return (
    <div className="relative bg-white flex flex-col gap-y-1 items-center text-center text-sm font-semibold p-3">
      <button className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md transition-colors hover:bg-brand-color hover:text-brand-yellow hover:border-brand-color bg-white">
        <AiOutlinePlus size={16} />
      </button>
      <img src={product.image} alt={product.title} />
      <div className=" text-brand-color">{product.price}</div>
      <div className=" text-gray-900">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
}

export default ProductItem;
