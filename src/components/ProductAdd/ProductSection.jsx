
// ProductSection.jsx
import React from 'react';
import ItemList from '../Products/ItemList';

const ProductSection = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold mb-6 text-center border-b-2 border-black pb-2 transition duration-300 ease-in-out transform hover:scale-105">
        Nuestros Productos
      </h2>
      <ItemList />
    </div>
  );
};

export default ProductSection;
