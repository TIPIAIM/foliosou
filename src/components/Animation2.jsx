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
      from: { opacity: 0, y: -400 },
      to: { opacity: 1, y: 0 },
    });
    animateElement("#box4", {
      from: { opacity: 0, x: 400 },
      to: { opacity: 1, x: 0 },
    });
  }, []);

  return (
    <div className="App min-h-screen bg-gradient-to-b from-green-900 va-green-900 to-black text-green-700 p-4">
     
      <h3
        className="title text-4xl font-extrabold text-center "
        ref={titleRef}
      >
        <span className="letter  ">Observation - </span>
        <span className="letter text-green-800">Analyse - </span>
        <span className="letter text-green-900">Execution</span>
      </h3>

      {/* Boxes avec images */}
      <div className="flex mb-6 flex-wrap justify-center gap-6">
        {[
          {
            id: "box1",
            img: NOUSSOUM,
            text: "Une photo prise le jour de fete des etudiants en 2023",
          },
          {
            id: "box2",
            img: concourimage,
            text: "Lors de la competition du concours youdev ' En mode pitch de projet '",
          },
          {
            id: "box3",
            img: bachir,
            text: "Le proffessionnel habillement",
          },
          {
            id: "box4",
            img: NOUSSOUM,
            text: "La fete de fin d'année a supemir",
          },
        ].map(({ id, img, text }) => (
          <div
            key={id}
            id={id}
            className="w-60 mt-4 h-80 bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 text-white flex items-center justify-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 cursor-pointer"
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
        <div className="mt-8 text-center text-green-600 font-bold text-xl">
          {clickedText}
        </div>
      )}
    </div>
  );
}
