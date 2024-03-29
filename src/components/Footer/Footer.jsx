import React from "react";
import logoImage from "../../assets/img/Drip.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div>
          <img
            src={logoImage}
            alt="Drip N' Club Logo"
            className="h-16 w-auto"
          />{" "}
        </div>

        <div>
          <h5 className="uppercase font-bold mb-3">Ayuda</h5>
          <ul>
            <li>
              <a href="mailto:serviciocliente@moredrops.cl">
                serviciocliente@driip.cl
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="uppercase font-bold mb-3">Información</h5>
          <ul>
            <li>
              <a href="#">Conocenos</a>
            </li>
            <li>
              <a href="#">Políticas de Privacidad</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
