import { motion } from "framer-motion";
import { useState } from "react";
import { GiSaberToothedCatHead } from "react-icons/gi";

function Experiencee() {
  const professionalExperiences = [
    {
      role: "Développeur Fullstack",
      company: "Technique Info Pour Tous",
      duration: "2024 - Présent",
      description:
        "Création d'applications web innovantes pour divers secteurs, intégrant ReactJS, Node.js et MongoDB.",
    },
    {
      role: "Stage Développeur Logiciel",
      company: "Supemir",
      duration: "2023",
      description:
        "Conception d'un système de gestion des stocks avec une expérience utilisateur améliorée.",
    },
    {
      role: "Freelance Développeur",
      company: "Indépendant",
      duration: "2020 - 2024",
      description:
        "Développement de projets sur mesure pour des clients, allant des formulaires dynamiques aux systèmes complets.",
    },
    {
      role: "Stagiaire Développeur Web",
      company: "AOD-Avocat, Guinée Conakry",
      duration: "25 août - 15 novembre 2024",
      description:
        "Contribution à la mise en place d’une plateforme de gestion documentaire pour le cabinet.\nOptimisation des outils numériques internes pour améliorer l'efficacité des avocats.\nRéalisation d’un tableau de bord interactif facilitant le suivi des dossiers juridiques.\nCollaboration étroite avec une équipe multidisciplinaire pour proposer des solutions adaptées aux besoins des clients.",
    },
    {
      role: "Participant au concours de coding YouDev",
      company: "École Supemir, Maroc (Casablanca)",
      duration: "6 juillet 2024",
      description:
        "Conception d’un projet innovant présenté dans un cadre compétitif et évalué par un jury d’experts.\nDémonstration de compétences en développement Fullstack et résolution de problèmes complexes sous contrainte de temps.\nAttestation reçue en reconnaissance de la qualité et de l’originalité du projet présenté.",
    },
    {
      role: "Chef de Projet - Hackathon organisé par la NASA",
      company: "Supemir, Maroc (Casablanca)",
      duration: "2023",
      description:
        "Supervision d’une équipe de développeurs dans la création d’un prototype de solution technologique innovante.\nGestion de projet agile, avec planification, suivi des tâches et respect des délais.\nPrésentation réussie du projet final devant un jury, ayant valu à l’équipe une attestation de participation reconnue.",
    },
    {
      role: "Chargé au Système d’Information",
      company: "Clinique Privée SAPSUME, Guinée Conakry (Labé)",
      duration: "Mai 2020 - 2022",
      description:
        "Gestion et maintenance du système d’information pour assurer la disponibilité des données critiques en temps réel.\nMise en œuvre de solutions informatiques pour optimiser les processus administratifs et médicaux.\nFormation du personnel à l'utilisation efficace des outils numériques et des bases de données.",
    },
  ];

  return (
    <div name="experience" className="text-gray-300 w-full min-h-screen bg-gradient-to- from-gray-00 via-gray-00 ">
      <div className="max-w-screen-lg mb-2 mx-auto flex flex-col justify-center items-center w-full h-full">
        {/* Titre */}
        <div className="mb-10 mt-6">
          <p className="text-4xl rounded-xl font-extrabold text-center text-white">
            Mes Expériences Professionnelles
            <GiSaberToothedCatHead className="inline-block ml-2 text-amber-500" />
          </p>
        </div>

        {/* Liste des expériences */}
        <div className="mt-1 w-full px-4 sm:px-0">
          <ul className="space-y-8">
            {professionalExperiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ experience }) {
  const [isHovered, setIsHovered] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const cardVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <motion.li
      className="bg-gradient-to-r from-green-500 to-gray-900 p-6 rounded-lg shadow-lg transition-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardVariants}
    >
      <h3 className="text-2xl font-semibold text-white">
        {experience.role} -{" "}
        <span className="text-amber-400">{experience.company}</span>
      </h3>
      <p className="text-gray-300">{experience.duration}</p>

      {/* Description avec animation */}
      <motion.div
        className="mt-2 overflow-hidden"
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        variants={textVariants}
      >
        <p className="text-gray-200 whitespace-pre-line">
          {experience.description}
        </p>
      </motion.div>
    </motion.li>
  );
}

export default Experiencee;
