import React, { useEffect } from "react";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import github from "../assets/github.png";
import linkedine from "../assets/linkedine.jpg";
import LogoTIPTAM from "../assets/LogoTIPTAM.png";
import watchap from "../assets/watchap.jpg";
import mail from "../assets/mail.jpg";
import fb from "../assets/fb.jpg";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Codee() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialisation de AOS
  }, []);

  const sources = [
    {
      id: 1,
      image: github,
      title: "GitHub",
      description: "Accédez à mes projets open source sur GitHub.",
      link: "https://github.com/TIPIAIM",
    },
    {
      id: 2,
      image: linkedine,
      title: "LinkedIn",
      description: "Découvrez mon profil professionnel sur LinkedIn.",
      link: "https://www.linkedin.com/in/alphaousmane-diallo-guinea14?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 3,
      image: LogoTIPTAM,
      title: "YouTube",
      description: "Découvrez mes vidéos et tutoriels sur YouTube.",
      link: "https://youtube.com/@tiptamcode?si=fJ5GGXOJSqylTgPx",
    },
    {
      id: 4,
      image: mail,
      title: "Contact Email",
      description: "Contactez-moi par email pour toute question.",
      link: "mailto:alphaousmaneousmane@gmail.com",
    },
    {
      id: 5,
      image: watchap,
      title: "WhatsApp",
      description: "Appelez-moi directement via WhatsApp pour les echanges.",
      link: "https://call.whatsapp.com/voice/6BltD24KmGj7ymIleODD5N",
    },
    {
      id: 6,
      image: fb,
      title: "Facebook",
      description: "Suivez-moi sur Facebook pour rester connecté.",
      link: "https://www.facebook.com/100064773007938/videos/430252586436453/",
    },
  ];

  return (
    <div
      name="source"
      className="bg-gradient-to- to-green-90 via-green-90 from-blac text-white font-bold min-h-screen p-20"
    >
      <div className=" mt-6"></div>
      {/* Titre principal */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <AiOutlineCodeSandbox size={50} className="mx-auto text-lime-400" />
        <h1 className="text-5xl font-signature font-extrabold text-green-500">
          Mes Codes / Sources
        </h1>
        <p className="mt-4 text-gray-300">
          Explorez mes projets et accédez à mes sources pour en savoir plus sur
          mon travail.
        </p>
      </motion.div>

      {/* Tableau d'images avec titres, descriptions et liens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {sources.map((source) => (
          <motion.div
            key={source.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-tr from-green-80 via-green-60 to-lime-400 p-2 rounded-xl shadow-lg flex flex-col items-center transition-transform"
            data-aos="fade-up"
          >
            <motion.img
              src={source.image}
              alt={source.title}
              className="rounded-full w-36 h-36 object-cover border-4 border-white shadow-md mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: source.id * 0.2 }}
            />
            <h3 className="text-xl font-semibold mb-2 text-white">
              {/*{source.title}*/}
            </h3>
            <p className="text-gray-100 text-center mb-4">
              {source.description}
            </p>
            <a
              href={source.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-bold hover:underline hover:text-green-300 no-underline transition-colors"
            >
              Visiter
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
