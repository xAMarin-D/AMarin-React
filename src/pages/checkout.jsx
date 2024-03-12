import React from "react";
import { motion } from "framer-motion";

const Checkout = ({ cart }) => {
  const checkVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
        <ul className="mb-6">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.Image}
                  alt={item.Title}
                  className="h-12 w-12 object-cover"
                />
                <span>
                  {item.Title} x {item.quantity}
                </span>
              </div>
              <span className="ml-4">${item.Price}</span>
            </li>
          ))}
        </ul>
        <div className="text-center p-4">
          <motion.div
            className="inline-block"
            variants={checkVariants}
            initial="hidden"
            animate="visible"
          >
            <svg className="w-16 h-16 text-green-500" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9,21.7L3.3,16l1.4-1.4l4.3,4.3l9.7-9.7L20,10.7L9,21.7z"
              />
            </svg>
          </motion.div>
          <h2 className="text-xl font-semibold mb-4">
            ¡Muchas gracias por tu compra!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
