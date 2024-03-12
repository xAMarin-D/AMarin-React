import React from "react";

const CartItems = ({ cart, setCart, removeFromCart }) => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Tu carrito está vacío.</div>
      ) : (
        <div className="flex flex-col space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border-b-2"
            >
              <div className="flex items-center">
                <img
                  src={item.Image}
                  alt={item.Title}
                  className="w-20 h-20 object-cover object-center mr-4"
                />
                <div>
                  <h3 className="font-bold">{item.Title}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.Price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItems;
