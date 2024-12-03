import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiBurningPassion } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "source" },
    { id: 3, link: "about" },
    { id: 4, link: "works" },
    { id: 5, link: "experience" },
    { id: 6, link: "contact" },
    { id: 7, link: "video" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-5 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-black fixed shadow-lg z-50">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => scroll.scrollToTop()}>
        <h1 className="text-3xl font-extrabold tracking-wide text-white hover:scale-105 transition-transform duration-200">
          Alpha Ousmane
        </h1>
        <GiBurningPassion size={40} className="text-green-200 ml- animate-pulse" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer capitalize font-semibold text-gray-300 hover:text-green-500 transition duration-300"
          >
            <Link
              to={link}
              smooth
              duration={500}
              spy
              activeClass="text-yellow-300 font-bold border-b-2 border-yellow-300"
              className="transition-colors duration-300"
            >
              {link}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer text-white z-20"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col justify-center items-center space-y-8 text-2xl text-white z-10"
          >
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer capitalize font-medium"
              >
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  spy
                  activeClass="text-yellow-300 font-bold border-b-2 border-yellow-300"
                  className="hover:text-green-500 transition duration-300"
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
