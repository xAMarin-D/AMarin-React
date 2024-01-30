import React, { useState, useEffect } from 'react';

// Asumiendo que tienes algunas imágenes en la carpeta src/assets/img/
import image1 from '../../assets/img/carrousel-2.jpg';
import image2 from '../../assets/img/carrousel-3.jpg';
import image3 from '../../assets/img/carrousel-1.jpg';

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3];
  const delay = 5000; // 5 segundos entre cambios de slide

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, delay);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-none" style={{ minWidth: '100%' }}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
