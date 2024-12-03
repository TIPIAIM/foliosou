import React from "react";
import { Link } from "react-scroll";
import NOUSSOUM from "../assets/NOUSSOUM.jpg"; // Assure-toi que l'image est bien importée
import { FcLeft } from "react-icons/fc";

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen w-full bg-gradient-to-b to-gray-900 via-green-800 from-black text-blue-900 font-poppins flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto px-6 py-10 flex flex-col items-center justify-center text-center">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-5xl underline sm:text-5xl font-signature font-extrabold text-green-600">
            À Propos de Moi (Un peu)
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-0">
          {/* Image Section */}
          <div className=" w-34 h-34 md:w-48 md:h-48 overflow-hidden rounded-lg shadow-full transform transition-all duration-300 hover:scale-105">
            <img
              src={NOUSSOUM}
              alt="Profil"
              className="w-34 h-34 object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-8 max-w-2xl">
            <p className="bg-gradient-to-b font-bold from-gray-900 via-green-900 to-black font-signatur text-white sm:text-xl leading-relaxed bg-opacity-80 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
              Après avoir obtenu mon diplôme de bac +3 en licence MIAGE à
              l'université de Labé (Guinée Conakry) de 2017 à 2020, puis en 2022,
              j'ai continué ma formation en obtenant une licence professionnelle
              en développement Fullstack. Actuellement, je suis en 5e année
              informatique-Réseaux-Multimédia, où je me perfectionne dans des
              domaines tels que le développement web, la gestion des réseaux, et
              l'optimisation des systèmes multimédia. Ma passion pour la
              programmation et l'innovation m’a permis de développer des
              compétences solides en développement web, en gestion de bases de
              données et en création de solutions technologiques adaptées. Je
              suis toujours en quête de nouvelles opportunités pour appliquer
              mes connaissances et participer à des projets ambitieux.
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-10">
          <Link
            to="home"
            smooth
            duration={500}
            className="bg-gradient-to-r p-3 from-blue-100 via-green-500 flex items-center px-8 py-2 to-black text-white text-lg font-semibold rounded-md shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Retour
            <FcLeft
              size={25}
              className="bg-gradient-to-r from-white via-green-500 to-green-900 text-white ml-2 transform hover:rotate-90 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
