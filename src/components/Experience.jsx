import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html from "../assets/html.png";
import framer from "../assets/framer.jpg";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import tailwind from "../assets/tailwind.jpg";
import bootstrap from "../assets/bootstrap.jpg";
import mongodb from "../assets/mongodb.jpg";
import vitejs from "../assets/vitejs.jpg";
import vercel from "../assets/vercel.jpg";
import oracle from "../assets/oracle.jpg";

import { GiSaberToothedCatHead } from "react-icons/gi";
import Experiencee from "./Experiencess";

export default function Experience() {
  const [selectedTech, setSelectedTech] = useState(null);

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      description: "HTML est la base de la création de pages web.",
    },
    {
      id: 2,
      src: framer,
      title: "Framer motion",
      style: "shadow-blue-500",
      description:
        "Framer est idéal pour les concepteurs d'interfaces utilisateurs qui cherchent à créer des prototypes hautement interactifs.",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      description:
        "JavaScript est un langage de programmation pour des pages dynamiques.",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-300",
      description:
        "React est une bibliothèque JavaScript pour créer des interfaces utilisateur.",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-400",
      description:
        "Tailwind CSS est un framework pour un design moderne et rapide.",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-500",
      description:
        "Next.js est un framework React pour des applications web performantes.",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-500",
      description:
        "GraphQL est un langage de requête pour les APIs flexible et efficace.",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-gray-700",
      description:
        "MongoDB est une base de données NoSQL flexible, orientée documents, idéale pour les applications modernes.",
    },
    {
      id: 9,
      src: oracle,
      title: "Oracle",
      style: "shadow-teal-400",
      description:
        "Oracle Database est un système de gestion de base de données relationnelle, largement utilisé pour les entreprises.",
    },
    {
      id: 10,
      src: vitejs,
      title: "ViteJS",
      style: "shadow-gray-500",
      description:
        "Vite.js est un outil de développement rapide pour les projets front-end, offrant une expérience de développement optimisée.",
    },
    {
      id: 11,
      src: bootstrap,
      title: "Bootstrap React",
      style: "shadow-pink-500",
      description:
        "React-Bootstrap est une bibliothèque de composants réactifs pour un design web rapide et élégant.",
    },
    {
      id: 12,
      src: vercel,
      title: "Vercel",
      style: "shadow-gray-700",
      description:
        "Vercel est une plateforme de déploiement cloud optimisée pour les frameworks modernes comme Next.js.",
    },
  ];

  const modalVariants = {
    hidden: { opacity: 0, y: -500 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 200 },
  };

  return (
    <div
      name="experience"
      className="bg-gradient-to- to-gray-90 via-green-50 from-blac text-gray-300 w-full min-h-screen py-8"
    >
      <div className="max-w-screen-lg mb-20 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="mb-10">
          <p className="text-5xl underline font-extrabold text-center font-signature text-green-600">
            Mes Compétences Techniques
            <GiSaberToothedCatHead className="inline-block ml-2 text-amber-500" />
          </p>
          <p className="text-center text-lg mt-2">
            Découvrez mes expériences avec les frameworks, bibliothèques et
            langages de programmation
          </p>
          <hr className="mt-4 border-amber-500 w-1/3 mx-auto" />
        </div>

        {/* Tech Icons */}
        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {techs.map(({ id, src, title, style, description }) => (
            <motion.div
              key={id}
              className={`flex flex-col items-center justify-center p-2 bg-gradient-to-b to-gray-900 via-green-500 from-black rounded-lg shadow-lg cursor-pointer transform transition hover:scale-110 ${style}`}
              onClick={() => setSelectedTech({ title, description })}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={src}
                alt={title}
                className="w-24 h-24 object-contain mb-4"
              />
              <p className="  text-lg font-semibold text-white">{title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              className="fixed inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              <div className=" bg-gradient-to-b to-green-500 via-gray-100 from-green-500 rounded-lg p-6 max-w-lg w-full">
                <h2 className=" font-bold font-signature text-3xl text-gray-900">
                  {selectedTech.title}
                </h2>
                <p className="mt-4 text-gray-600">{selectedTech.description}</p>
                <button
                  className="mt-6 px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-600"
                  onClick={() => setSelectedTech(null)}
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          )}
        
        </AnimatePresence>
          <Experiencee/>
         {/* <ExperienceGraph/>*/}
      </div>
    </div>
  );
}

  