import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NOUSSOUM from "../assets/NOUSSOUM.jpg";
import concourimage from "../assets/concourimage.jpg";
import bachir from "../assets/bachir.jpg";
import grandfrere from "../assets/grandfrere.jpg";
import licenceMiage from "../assets/licenceMiage.jpg";
import granfrere2 from "../assets/granfrere2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Animation2() {
  const [clickedId, setClickedId] = useState(null);

  const handleClick = (id) => {
    setClickedId((prevId) => (prevId === id ? null : id));
    gsap.fromTo(
      `#text-${id}`,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  };

  useEffect(() => {
    const animateBoxes = () => {
      gsap.utils.toArray(".box").forEach((box) => {
        gsap.fromTo(
          box,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    };

    animateBoxes();
  }, []);

  const boxes = [
    {
      id: "box1",
      img: NOUSSOUM,
      text: "Une photo prise le jour de la fête des étudiants en 2023",
    },
    {
      id: "box2",
      img: concourimage,
      text: "Lors de la compétition du concours Youdev 'En mode pitch de projet'",
    },
    {
      id: "box3",
      img: bachir,
      text: "Le professionnel habillement",
    },
    {
      id: "box4",
      img: grandfrere,
      text: "Mon grand frère qui m'a toujours soutenu dans mes bêtises et succès 'haaa'",
    },
    {
      id: "box5",
      img: licenceMiage,
      text: "La fête de remise des diplômes de licence à l'université de Labé, promotion 2017 - 2020",
    },
    {
      id: "box6",
      img: granfrere2,
      text: "Un grand frère et modèle de référence, merci pour votre contribution.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-green-100 text-green-700 p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-green-800">
            <span className="block">Observation - Analyse - Exécution</span>
          </h3>
        </div>

        {/* Boîtes avec images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boxes.map(({ id, img, text }) => (
            <div key={id} className="relative box">
              <div
                className="w-full h-96 bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => handleClick(id)}
              >
                <img
                  src={img}
                  alt={text}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Texte affiché au clic */}
              {clickedId === id && (
                <div
                  id={`text-${id}`}
                  className="absolute inset-x-0 bottom-0 bg-green-900 bg-opacity-70 text-white text-center p-4 text-sm font-semibold rounded-b-lg"
                >
                  {text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
