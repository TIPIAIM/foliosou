import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import NOUSSOUM from "../assets/NOUSSOUM.jpg";
import concourimage from "../assets/concourimage.jpg";
import bachir from "../assets/bachir.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Animation2() {
  const titleRef = useRef();
  const [clickedText, setClickedText] = useState("");

  const handleClick = (text) => {
    setClickedText(text);
  };

  const onLoad = () => {
    const timeline = gsap.timeline({
      onComplete: () => {
        console.log("Vous êtes dans le site d'information de Alpha Ousmane");
      },
    });

    timeline
      .fromTo(
        ".letter",
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.3, delay: 0.5 }
      )
      .to(".title", { y: 0, delay: 0.5 })
      .to(".letter", { x: 100, rotate: -360, delay: 1, duration: 1 });
  };

  const animateElement = (elem, animationProps, triggerProps) => {
    gsap.fromTo(elem, animationProps.from, {
      ...animationProps.to,
      scrollTrigger: {
        trigger: elem,
        start: "top 40%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
        ...triggerProps,
      },
    });
  };

  useEffect(() => {
    onLoad();
    animateElement("#box1", {
      from: { opacity: 0, x: -400 },
      to: { opacity: 1, x: 0 },
    });
    animateElement("#box2", {
      from: { opacity: 0, y: -400 },
      to: { opacity: 1, y: 0 },
    });
    animateElement("#box3", {
      from: { opacity: 0, y: 400 },
      to: { opacity: 1, y: 0 },
    });
    animateElement("#box4", {
      from: { opacity: 0, x: 400 },
      to: { opacity: 1, x: 0 },
    });
  }, []);

  return (
    <div className="App min-h-screen bg-gradient-to-b from-white via-gray-100 to-green-100 text-green-700 p-8 flex items-center justify-center">
      <div className="text-center w-full max-w-4xl">
        {/* Titre principal */}
        <div className="mt-10">
          <h3
            className="title text-4xl font-extrabold mb-8"
            ref={titleRef}
          >
            <span className="letter text-green-500">Observation - </span>
            <span className="letter text-green-800">Analyse - </span>
            <span className="letter text-green-900">Exécution</span>
          </h3>
        </div>
        {/* Boîtes avec images */}
        <div className="flex flex-nowrap justify-between gap-4 overflow-auto">
          {[
            {
              id: "box1",
              img: NOUSSOUM,
              text: "Une photo prise le jour de la fête des étudiants en 2023",
            },
            {
              id: "box2",
              img: concourimage,
              text: "Lors de la compétition du concours Youdev 'En mode pitch de projet' ",
            },
            {
              id: "box3",
              img: bachir,
              text: "Le professionnel habillement",
            },
            {
              id: "box4",
              img: NOUSSOUM,
              text: "La fête de fin d'année à SUPEMIR en 2023 - 2024",
            },
          ].map(({ id, img, text }) => (
            <div
              key={id}
              id={id}
              className="w-60 h-80 bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 text-white flex items-center justify-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 cursor-pointer"
              onClick={() => handleClick(text)}
            >
              <img
                src={img}
                alt={text}
                className="w-full p-1 h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Texte affiché au clic */}
        {clickedText && (
          <div className="mt-8 bg-gray-900 rounded-lg text-center text-green-100 text-xl font-extrabold">
            {clickedText}
          </div>
        )}
      </div>
    </div>
  );
}
