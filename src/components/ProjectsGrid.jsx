import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Green Circle",
    year: "2024 - 2025",
    image: "./image_project/green_circle.png",
    skills: ["Réaliser", "Administrer", "Gérer", "Conduire", "Collaborer"],
    technologies: ["react", "node-js", "database", "js", "html5", "css3-alt", "python"],
    status: "Terminé",
    type: "Universitaire",
    description: `
      C'est un site dédié aux entreprises pour se donner des meubles pour une économie circulaire. Le site permet aussi d'acheter des e-learnings, participer à des événements et de lire des articles pour pouvoir en apprendre plus sur l'écologie et l'économie circulaire.
      Le projet repose sur React pour le front-end et Node.js côté serveur. J’ai contribué à l’intégration des données issues d’une API interne, à la gestion de données sensibles avec une base de données partagée et à l'élaboration d'un chatbot en Python.
    `
  },
  {
    title: "DESCARTES",
    year: "2023-2025",
    image: "./image_project/DESCARTES.PNG",
    skills: ["Réaliser", "Administrer", "Gérer", "Conduire","Collaborer"],
    technologies: ["java","html5","css3-alt"],
    status: "En cours",
    type: "Professionnel",
    description: `
       J’ai développé une application en Java intégrant une carte interactive permettant de visualiser un réseau de transport dynamique à partir de données GTFS.  
       Dans le cadre de ce projet, j’ai également conçu plusieurs indicateurs d’analyse du réseau afin d’évaluer ses performances et son efficacité.  
       Enfin, j’ai réalisé un rapport complet sous forme de site web, regroupant l’ensemble des indicateurs et leurs interprétations pour une meilleure compréhension des données.
    `
  },
  {
    title: "Undercover",
    year: "2025",
    image: "./image_project/undercover.png",
    skills: ["Réaliser", "Administrer", "Gérer", "Conduire"],
    technologies: ["angular","database","node-js"],
    status: "En cours",
    type: "Personnel",
    description: `
       Réalisation d'une application web permettant de jouer au jeu undercover sur un navigateur, l'application permets plusieurs parties simultanées avec un nombre de joueurs pouvant aller jusqu'a 10 et plus de 1 million de mots 
       générés depuis le dictionnaire français.
    `
  },
  {
    title: "Visualisateur de contrôles CNIL",
    year: "2024",
    image: "./image_project/cnil.png",
    skills: ["Réaliser", "Gérer", "Collaborer"],
    technologies: ["php", "js", "html5", "css3-alt", "database"],
    status: "Terminé",
    type: "Universitaire",
    description: `
      Outil web permettant d'afficher les contrôles effectués par la CNIL sur le territoire français. À partir de données ouvertes, l’application offre une interface cartographique pour visualiser la localisation, le type de contrôle et les entités concernées. 
      Nous avons dû gérer le traitement des données, leur structuration en base, et développer l’interface utilisateur en PHP et JavaScript.
    `
  },
  {
    title: "Backpack Hero",
    year: "2023",
    image: "./image_project/bckpckhero.png",
    skills: ["Réaliser", "Collaborer"],
    technologies: ["java"],
    status: "Terminé",
    type: "Universitaire",
    description: `
      Jeu rogue-like développé en Java, dans lequel le joueur doit gérer un sac à dos stratégique pour optimiser ses combats contre des ennemis générés aléatoirement.
      Le gameplay repose sur la logique d'inventaire, la répartition des objets et les effets de ceux-ci. Ce projet a permis d’explorer la programmation orientée objet, la gestion des états de jeu et l’algorithme de génération procédurale.
    `
  },
  {
    title: "Balls Game",
    year: "2022-2024",
    image: "./image_project/balls_game.png",
    skills: ["Réaliser", "Collaborer"],
    technologies: ["python"],
    status: "Terminé",
    type: "Universitaire",
    description: `
      Balls Game est un jeu développé en Python dans lequel les joueurs peuvent cliquer pour créer des boules ou diviser celles de l’adversaire. Il comporte plusieurs modes de jeu que l’on peut activer ou désactiver selon les préférences.
      Ce projet met en œuvre une gestion fine des collisions, des événements souris, ainsi que des systèmes de règles dynamiques activables à la volée. Il a été conçu pour être modulable, interactif et visuellement fluide grâce à l’utilisation de Tkinter.
    `
  },
  {
    title: "Projet UNESCO : Avignon",
    year: "2022",
    image: "./image_project/Avignon.jpg",
    skills: ["Réaliser", "Administrer", "Gérer", "Conduire","Collaborer"],
    technologies: ["html5","css3-alt","js","php"],
    status: "Terminé",
    type: "Universitaire",
    description: `
       J’ai participé à la création d’un site web en partenariat avec l’UNESCO, mettant en valeur la richesse culturelle et historique de la ville d’Avignon.
       Ce projet visait à offrir une plateforme interactive permettant aux visiteurs de découvrir le patrimoine architectural, les événements emblématiques et l’impact de la ville sur la scène internationale.
    `
  }
];

const ProjectsGrid = () => {
  const [selectedTech, setSelectedTech] = useState("Tous");
  const [selectedSkill, setSelectedSkill] = useState("Tous");

  const allTechnologies = [...new Set(projectsData.flatMap(p => p.technologies))];
  const allSkills = [...new Set(projectsData.flatMap(p => p.skills))];

  const filteredProjects = projectsData
    .filter(p => selectedTech === "Tous" || p.technologies.includes(selectedTech))
    .filter(p => selectedSkill === "Tous" || p.skills.includes(selectedSkill));

  return (
    <section className="py-20 w-full flex flex-col items-center overflow-y-scroll h-screen">
      <h1 className="text-4xl font-bold mb-10 text-white">Projets</h1>

      {/* Filtres */}
      <div className="w-4/5 flex flex-col md:flex-row gap-4 mb-10">
        <select
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
          className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Tous">Toutes les technologies</option>
          {allTechnologies.map((tech, i) => (
            <option key={i} value={tech}>{tech}</option>
          ))}
        </select>

        <select
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
          className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Tous">Toutes les compétences</option>
          {allSkills.map((skill, i) => (
            <option key={i} value={skill}>{skill}</option>
          ))}
        </select>
      </div>

      {/* Grille des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
