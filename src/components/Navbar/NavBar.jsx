import React from "react";
import logoImage from "../../assets/img/Drip.png";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  {
  }
  const cartItemCount = 5;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-4 shadow-md">
      {/* Left Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logoImage}
            alt="Drip N' Club Logo"
            className="h-16 w-16 md:h-24 md:w-24"
          />
        </Link>
      </div>

      {/* NavBar Center */}
      <div className="hidden md:flex grow items-center justify-center space-x-4">
        <Link
          to="/arrivals"
          className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110"
        >
          Arrivals
        </Link>

        <Link
          to="/men"
          className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110"
        >
          Hombre
        </Link>
        <Link
          to="/women"
          className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110"
        >
          Mujer
        </Link>
        <Link
          to="/accesories"
          className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110"
        >
          Accesorios
        </Link>
      </div>

      {/* Cart Right using Cart Component*/}
      <CartWidget cartItemCount={cartItemCount} />
    </nav>
  );
};

export default NavBar;
