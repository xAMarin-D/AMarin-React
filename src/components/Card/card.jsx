import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="container mx-auto mt-10 flex justify-center items-center">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full md:max-w-4xl">
        <div className="md:w-1/2">
          <img
            className="object-contain h-auto w-full"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">
            {product.description || "No hay descripción disponible."}
          </p>
          <div className="flex-1 flex flex-col justify-end">
            <div className="mb-10">
              <div className="text-xl mb-2 font-bold">{product.price}</div>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
            >
              Agregar al carro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
