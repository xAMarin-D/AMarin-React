import React from "react";

const CartItems = ({ cart }) => {
  return (
    <div>
      {cart.map((item) => (
        <div key={item.Id}>
          <img src={item.Image} alt={item.Title} />
          <div>
            <h3>{item.Title}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: {item.Price}</p>
            {/* Aquí podrías añadir botones para eliminar o cambiar la cantidad */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
