import React from "react";
import { Pie } from "react-chartjs-2"; // Utilisation du graphique circulaire (pie chart)
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  Title,
  ArcElement,
  CategoryScale,
} from "chart.js";
import { motion } from "framer-motion"; // Pour les animations

// Enregistrement des composants nécessaires pour Chart.js
ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend, Title);

const ExperienceGraphc = () => {
  // Données pour le graphique
  const data = {
    labels: [
      "Début",
      "MIAGE",
      "Informatique",
      "Master1",
      "Master2",
      "Objectif",
    ], // Étiquettes du diagramme
    datasets: [
      {
        label: "Expérience acquise", // Titre de la série de données
        data: [20, 40, 60, 80, 90, 100], // Données de l'expérience
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ], // Couleurs des secteurs du graphique
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ], // Couleurs des bordures des secteurs
        borderWidth: 1, // Largeur de la bordure des secteurs
      },
    ],
  };

  // Options pour personnaliser le graphique
  const options = {
    responsive: true,
    maintainAspectRatio: true, // Permet au graphique de s'adapter à l'espace disponible sans maintenir le ratio
    plugins: {
      title: {
        display: true,
        font: {
          size: 2,
          family: "Poppins, sans-serif",
          weight: "bold",
        },
        color: "#4B8A3B", // Couleur du titre
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} %`, // Affichage des données avec le symbole de pourcentage
        },
      },
      legend: {
        position: "left", // Légende à gauche
        labels: {
          font: {
            size: 8,
            family: "Poppins, sans-serif",
            weight: "bold",
          },
          color: "#333", // Couleur des étiquettes de légende
        },
      },
    },
  };

  return (
    <div className="max-w-screen-lg mx-auto ">
      <motion.h2
        className="text-2xl font-extrabold text-center text-green-500 mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Graphique d'Expérience
      </motion.h2>
      <div className="flex justify-center mb-1">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-lg shadow-lg bg-white w-full max-w-[900px]" // Taille ajustable et responsive
        >
          <Pie data={data} options={options} />{" "}
          {/* Affichage du graphique circulaire */}
        </motion.div>
      </div>
    
    </div>
  );
};

export default ExperienceGraphc;
