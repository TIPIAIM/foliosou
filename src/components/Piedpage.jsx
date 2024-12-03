import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"; // Icônes ajoutées

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 p-12 ">
      <div className="max-w-screen-xl p-6 mx-auto mt-10 ">
        {/* Conteneur principal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Section Logo et Description */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-xl font-extrabold text-green-500 mb-3">
              Technique Info (TIPIAIM)
            </h2>
            <p className="text-center md:text-left text-gray-400 max-w-xs">
              Votre partenaire pour des solutions informatiques de qualité,
              adaptées à vos besoins.
            </p>
          </div>

          {/* Liens utiles */}
          <div className="flex flex-col items-center md:items-start  mb-6 md:mb-0">
            <h3 className="text-lg font-semibold  text-3xl font-extrabold text-green-500 mt-3 mb-3">
              Liens utiles
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <FaHome className="text-gray-400 hover:text-green-500 transition" />
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  Accueil
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaInfoCircle className="text-gray-400 hover:text-green-500 transition" />
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  À propos
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaCogs className="text-gray-400 hover:text-green-500 transition" />
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  Services
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-gray-400 hover:text-green-500 transition" />
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-3xl font-extrabold text-green-500 mb-3">
              Contactez-nous
            </h3>
            <p className="text-gray-400 mb-3">Alphaousmaneousmane@gmail.com</p>
            <p className="text-gray-400">+224 624 138 395</p>
          </div>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="flex justify-center items-center mt-6 space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-8">
          <p>© 2024 Technique Info (tipiaim). Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
