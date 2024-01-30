import React from 'react';
import logoImage from '../../assets/img/Drip.png'; // Asegúrate de que la ruta al logo sea correcta

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Logo Section - Ajusta el tamaño aquí con clases como h-16, h-24, etc. */}
        <div>
          <img src={logoImage} alt="Drip N' Club Logo" className="h-16 w-auto" /> {/* Ajustado a h-16 */}
        </div>
        
        {/* Help Section */}
        <div>
          <h5 className="uppercase font-bold mb-3">Ayuda</h5>
          <ul>
            <li><a href="mailto:serviciocliente@moredrops.cl">serviciocliente@driip.cl</a></li>
            {/* Add more help items here */}
          </ul>
        </div>
        
        {/* Information Section */}
        <div>
          <h5 className="uppercase font-bold mb-3">Información</h5>
          <ul>
            <li><a href="#">Conocenos</a></li>
            <li><a href="#">Políticas de Privacidad</a></li>
            {/* Add more information items here */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
