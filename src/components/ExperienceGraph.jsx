import React from "react";
import vitejs from "../assets/vitejs.jpg"; // Assure-toi que l'image est bien importée
import ExperienceGraphc from "./ExperienceGraphc";

const ExperienceGraph = () => {
  return (
    <div className="flex justify-between items-center space-x-8">
      {/* Image */}
      <img
        src={vitejs} // Remplacez cette URL par celle de votre image
        alt="Exemple"
        className="rounded-lg shadow-lg w-48 h-48" // Ajuster la taille de l'image
      />
      {/* Graphique */}
      <ExperienceGraphc />
    </div>
  );
};

export default ExperienceGraph;
