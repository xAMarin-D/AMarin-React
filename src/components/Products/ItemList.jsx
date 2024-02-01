import ImgPrd1 from '../../assets/img/prd1.jpg';
import ImgPrd2 from '../../assets/img/prd2.jpg';
import ImgPrd3 from '../../assets/img/prd3.jpg';
import ImgPrd4 from '../../assets/img/prd4.jpg';
import ImgPrd5 from '../../assets/img/prd5.jpg';
import ImgPrd6 from '../../assets/img/prd6.jpg';
import ImgPrd7 from '../../assets/img/prd7.jpg';
import ImgPrd8 from '../../assets/img/prd8.jpg';
import ImgPrd9 from '../../assets/img/prd9.jpg';
import React from 'react';


const ItemList = () => {
  const products = [
    { id: 1, title: 'Air Force Nike Unisex Blanco/Gris', price: '$99.900', image: ImgPrd1 },
    { id: 2, title: 'Air Max °87 Nike Unisex Blanco/Gris ', price: '$147.000', image: ImgPrd2 },
    { id: 3, title: 'Suede Pruma Unisex Negro/Blanco', price: '$59.990', image: ImgPrd3 },
    { id: 4, title: 'Zoom Vomero Nike Hombre Negro/Verde Musgo', price: '$187.000', image: ImgPrd4 },
    { id: 5, title: 'Air Pegasus Nike Hombre Blanco/Negro', price: '$120.000', image: ImgPrd5 },
    { id: 6, title: 'Air Force 1 Nike Hombre Borgoña', price: '$112.990', image: ImgPrd6 },
    { id: 7, title: 'Dunk Low Nike Hombre Borgoña', price: '$87.990', image: ImgPrd7 },
    { id: 8, title: 'Air 2 Retro Low Nike Negro/Verde/Rojo', price: '$259.999', image: ImgPrd8 },
    { id: 9, title: 'New Balance 990v6 Hombre Negro/Gris', price: '$56.990', image: ImgPrd9 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          <div className="flex justify-center items-center h-80">
            <img src={product.image} alt={product.title} className="object-contain max-h-full max-w-full" />
          </div>
          <h3 className="text-lg font-bold mb-2">{product.title}</h3>
          <p className="text-gray-600">{product.price}</p>
          
        </div>
      ))}
    </div>
  );
};

export default ItemList;