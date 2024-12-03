import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa"; // Icônes ajoutées
import { FcCallback } from "react-icons/fc";
import { MdMail } from "react-icons/md";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-20 text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto mt-20">
        {/* Conteneur Principal */}
        <div className=" mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section Logo et Description */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-extrabold text-green-500 mb-3">
              Technique Info (TIPIAIM)
            </h2>
            <p className="text-gray-400">
              Votre partenaire pour des solutions informatiques de qualité,
              adaptées à vos besoins.
            </p>
          </div>

          {/* Section Liens Utiles */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-green-500 mb-3">
              Liens utiles
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaHome className="text-gray-400 hover:text-green-500 transition" />
                <Link
                  to="home"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  Accueil
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaInfoCircle className="text-gray-400 hover:text-green-500 transition" />
                <Link
                  to="about"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  À propos
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaCogs className="text-gray-400 hover:text-green-500 transition" />
                <Link
                  to="source"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  Services
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaPhoneAlt className="text-gray-400 hover:text-green-500 transition" />
                <Link
                  to="contact"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-green-500 mb-3">
              Contactez-nous
            </h3>
            <p className="text-gray-400">Alphaousmaneousmane@gmail.com</p>
            <p className="text-gray-400 mt-2">+224 624 138 395</p>
          </div>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://www.facebook.com/100064773007938/videos/430252586436453/"
            className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/alphaousmane-diallo-guinea14?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://call.whatsapp.com/voice/6BltD24KmGj7ymIleODD5N"
            className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"
          >
            <FcCallback size={20} />
          </a>
          <a
            href="mailto:alphaousmaneousmane@gmail.com"
            className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"
          >
            <MdMail size={20} />
          </a>
        </div>

        {/* Section Copyright */}
        <div className="text-center text-gray-400 mt-8">
          <p>© 2024 Technique Info (TIPIAIM). Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
