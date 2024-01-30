// ItemList.jsx
import React from 'react';

const ItemList = () => {
  const products = [
    { id: 1, title: 'Producto 1', price: '$20', image: 'url_de_la_imagen_1' },
    { id: 2, title: 'Producto 2', price: '$30', image: 'url_de_la_imagen_2' },
    // Añadir más productos según sea necesario
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-6 rounded-md shadow-md">
          <img src={product.image} alt={product.title} className="mb-4 w-full h-32 object-cover" />
          <h3 className="text-lg font-bold mb-2">{product.title}</h3>
          <p className="text-gray-600">{product.price}</p>
          {/* Otros detalles o botones pueden añadirse aquí */}
        </div>
      ))}
    </div>
  );
};

export default ItemList;