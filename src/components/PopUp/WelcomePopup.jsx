import React, { useState, useEffect } from "react";

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-out ${
        showPopup ? "opacity-100" : "opacity-0"
      } animate-fadeIn`}
    >
      <div className="bg-white p-5 md:p-6 lg:p-8 rounded-2xl shadow-2xl max-w-md mx-auto text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Bienvenido a Driip Club
        </h2>
        <p>Descubre las últimas colecciones y tendencias aquí.</p>
        <button
          onClick={() => setShowPopup(false)}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 transition ease-in-out duration-300"
        >
          Explorar Ahora
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;
