import React, { useState, useEffect } from 'react';
import { FcVoicePresentation } from "react-icons/fc";
import { motion } from 'framer-motion';
import NOUSSOUM from "../assets/NOUSSOUM.jpg";


import AOS from 'aos'; // Importer AOS
import 'aos/dist/aos.css'; // Importer les styles AOS

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  // Définir les variantes d'animation pour le formulaire et le bouton
  const inputVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, rotate: 5, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)", transition: { type: "spring", stiffness: 300, damping: 15 } },
  };

  // Fonction de validation de l'email
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Regex pour valider l'email
    return regex.test(email);
  };

  // Fonction de gestion de la soumission
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!validateEmail(email)) {
      alert("Veuillez entrer un email valide.");
      return;
    }

    // Si l'email est valide, soumettre le formulaire
    e.target.submit();
  };

  // Initialiser AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      once: true, // L'animation se produit une seule fois
    });
  }, []);

  return (
    <div name="contact" className='bg-gradient-to-b from-gray-900 via-green-900 to-black p-4 w-full h-screen'>
      <div className='flex justify-center items-center max-w-screen-lg mx-auto h-full'>
        {/* Image à gauche */}
        <div className="hidden md:block w-1/2 p-4" data-aos="fade-right">
          <img src={NOUSSOUM} alt=" Contact " className="w-full h-auto object-cover rounded-lg" />
        </div>

        {/* Formulaire à droite */}
        <div className="flex flex-col w-full md:w-1/2 p-4 justify-center">
          <div className="pb-8 text-center py-4">
            <p className='flex col-span-2 mt-2 text-5xl text-white font-bold underline'>
              Contact <FcVoicePresentation />
            </p>
            <p className='py-3 text-white font-bold'>
              Vous pouvez saisir votre message ici merci et bon suite à vous
            </p>
          </div>

          <form
            onSubmit={handleSubmit} // Utiliser la validation avant soumission
            action='https://getform.io/f/1f9c369e-5388-43de-b61a-6fa4818f9166'
            method='POST'
            className='flex flex-col w-full'
          >
            {/* Input Name avec AOS animation */}
            <motion.input
              type="text"
              name="name"
              required
              placeholder="Entrer votre nom"
              className="p-1 bg-lime-100 border-2 rounded-md text-black font-bold focus:outline-none"
              initial="hidden"
              animate="visible"
              variants={inputVariants}
              data-aos="fade-up" // Animation AOS
            />

            {/* Input Email avec AOS animation et pattern de validation */}
            <motion.input
              type="email"
              name="email"
              required
              placeholder="Entrer votre mail"
              className="my-2 p-1 bg-lime-100 border-2 rounded-md text-black font-bold focus:outline-none"
              initial="hidden"
              animate="visible"
              variants={inputVariants}
              pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"  // Validation regex
              title="Entrez un email valide (exemple: exemple@gmail.com)"
              data-aos="fade-up" // Animation AOS
            />

            {/* Textarea Message avec AOS animation */}
            <motion.textarea
              name="message"
              placeholder="Entrer votre message ici"
              rows="10"
              required
              className="bg-lime-50 border-2 rounded-md text-black font-bold focus:outline-none"
              initial="hidden"
              animate="visible"
              variants={inputVariants}
              data-aos="fade-up" // Animation AOS
            ></motion.textarea>

            {/* Submit Button avec AOS animation */}
            <motion.button
              className="text-white font-bold bg-gradient-to-b from-amber-800 to-lime-700 px-3 py-1 my-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              data-aos="fade-up" // Animation AOS
            >
              Parlons ici <FcVoicePresentation size={30} className={`ml-4 ${isHovered ? "rotate-90" : ""} duration-300`} />
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}
