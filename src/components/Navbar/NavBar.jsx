import React from 'react';
import logoImage from '../../assets/img/Drip.png';
import CartWidget from '../Cart/CartWidget';


const NavBar = () => {
  {/* Cart Number*/}
  const cartItemCount = 5;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-4 shadow-md">
      {/* Left Logo */}
      <div className="flex items-center">
        <a href='App.jsx'> 
        <img src={logoImage} alt="Drip N' Club Logo" className="h-16 w-16 md:h-24 md:w-24" />
        </a>
      </div>

      {/* NavBar Center */}
      <div className="hidden md:flex grow items-center justify-center space-x-4">
        <a href="#arrivals" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110">
          Arrivals
        </a>
        <a href="#brands" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110">
          Marcas
        </a>
        <a href="#men" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110">
          Hombre
        </a>
        <a href="#women" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110">
          Mujer
        </a>
        <a href="#accessories" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110">
          Accesorios
        </a>
      </div>

      {/* Cart Right using Cart Component*/}
      <CartWidget cartItemCount={cartItemCount} />
    </nav>
  );
};

export default NavBar;
