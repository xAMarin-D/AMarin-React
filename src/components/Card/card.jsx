import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity: Number(quantity) });
  };

  return (
    <div className="container mx-auto mt-10 flex justify-center items-center">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full md:max-w-4xl">
        <div className="md:w-1/2">
          <img
            className="object-contain h-auto w-full"
            src={product.Image}
            alt={product.Title}
          />
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">{product.Title}</h2>
          <p className="text-gray-700 mb-4">
            {product.Description || "No hay descripción disponible."}
          </p>
          <div className="mb-10">
            <div className="text-xl mb-2 font-bold">{product.Price}</div>
            <div className="quantity-selector mb-4">
              <label htmlFor="quantity">Cantidad:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="ml-2 border rounded px-2 py-1 text-black w-16"
              />
            </div>
            <button
              onClick={handleAddToCart}
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
