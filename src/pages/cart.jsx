import React from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "../components/Cart/CartItems"; // Asegúrate de que la ruta de importación es correcta

const Cart = ({ cart, setCart, removeFromCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <CartItems
        cart={cart}
        setCart={setCart}
        removeFromCart={removeFromCart}
      />
      {cart.length > 0 && (
        <div className="flex justify-end items-end p-4">
          <button
            onClick={handleCheckout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Ir al checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
