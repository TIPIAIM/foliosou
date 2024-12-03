import React from "react";
import alphaousmane from "../assets/alphaousmane.jpg";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { Link } from "react-scroll";
import Animation2 from "./Animation2";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      name="home"
      className="min-h-screen font-serf w-full bg-gradient-to- from-gray-90 via-green-90 to-blac text-blue-900"
    >
      {/* Animation d'introduction */}
      <Animation2 />

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Section Texte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center h-full md:w-1/2 "
        >
          <p className="py-4 text-base mt-2 sm:text-lg md:text-xl  text-green-100 font-bold leading-relaxed font-poppins">
         
            La programmation est bien plus qu'un simple domaine d'études pour
            moi, c'est une véritable passion.
           {/* <ul className="list-disc pl-3">
              <li>
                Le développement de sites web dynamiques et interactifs.
              </li>
              <li>La conception et gestion de bases de données efficaces.</li>
              <li>
                L'utilisation des technologies d'IA ainsi que les maths.
              </li>
              <li>
                L'exploration de nouvelles technologies pour résoudre des
                problèmes complexes.
              </li>
            </ul>*/}
            Mon objectif est de toujours fournir des solutions performantes et
            esthétiques tout en améliorant l'expérience utilisateur.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link
              to="about"
              smooth
              duration={500}
              className="flex items-center w-fit px-3 py-2 bg-gradient-to-r from-green-500 via-teal-500 to-blue-700 text-white text-base sm:text-lg font-bold rounded-md shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              En savoir plus
              <TbArrowBigRightLinesFilled
                size={25}
                className="ml-2 transform hover:rotate-90 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Section Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-5 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src={alphaousmane}
            alt="Mon profil"
            className="rounded-2xl w-full max-w-xs md:max-w-md shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
      
    </div>
  );
}
