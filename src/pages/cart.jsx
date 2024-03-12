import React from "react";
import CartItems from "../components/Cart/CartItems";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <CartItems cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Cart;
