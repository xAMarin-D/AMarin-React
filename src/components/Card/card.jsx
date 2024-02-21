import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-500 line-through">{product.price}</span>
        <span className="text-gray-900 font-bold">{product.discountPrice}</span>
        <span className="text-red-600 font-bold">
          {product.discountPercentage}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => onAddToCart(product)}
          className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
        >
          Agregar al carro
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
