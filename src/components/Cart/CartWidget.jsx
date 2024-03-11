import React from "react";
import { useNavigate } from "react-router-dom";

const CartWidget = ({ cartItemCount }) => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="relative">
      {/* Cart Icon */}
      <button onClick={goToCart} className="text-black hover:text-gray-800">
        {/* SVG del carrito aquí */}
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L6.4 5H20m-1 8a2 2 0 11-4 0 2 2 0 014 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      </button>

      {/* Contador de ítems */}
      {cartItemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1">
          {cartItemCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
