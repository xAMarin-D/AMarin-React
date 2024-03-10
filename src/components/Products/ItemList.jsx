import React from "react";
import { useNavigate } from "react-router-dom";

const ItemList = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)}
          className="bg-white p-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          <div className="flex justify-center items-center h-80">
            <img
              src={product.Image}
              alt={product.Title}
              className="object-contain max-h-full max-w-full"
            />
          </div>
          <h3 className="text-lg font-bold mb-2">{product.Title}</h3>
          <p className="text-gray-600">{product.Price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
