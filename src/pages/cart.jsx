import React from "react";
import CartItems from "../components/Cart/CartItems";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Carrito de Compras</h1>
      <CartItems cart={cart} />
    </div>
  );
};

export default Cart;
