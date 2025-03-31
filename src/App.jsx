import React from "react";
import Navbar from "./components/Navbar";
import ProjectsGrid from "./components/ProjectsGrid";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Section Accueil */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent">
          Emmanuel Vidrean
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Étudiant en informatique et développeur passionné
        </p>
      </section>

      {/* Section À propos */}
      <section id="orders" className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-green-300">À propos</h2>
            <p className="mt-4 text-gray-400">
            Passionné par les nouvelles technologies et le développement informatique, je poursuis actuellement mon parcours en alternance en tant que développeur. Animé par la curiosité et un souci constant de rigueur, j’aime explorer de nouvelles approches et concevoir des solutions innovantes répondant aux besoins spécifiques des utilisateurs. Toujours en quête d’apprentissage et de perfectionnement, je mets un point d'honneur à développer des projets à la fois performants, ergonomiques et optimisés.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Expérience */}
      <section className="py-16 px-6">
        <h2 className="text-center text-2xl font-semibold text-blue-400">Expériences</h2>
        <div className="mt-8 space-y-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Développeur en alternance - UGE</h3>
            <p className="text-sm text-gray-400">Champs-sur-Marne | 2023 - Présent</p>
            <p className="mt-2 text-gray-300">Réalisation d'une application Swing en Java nommée DESCARTES.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">BUT informatique parcours réalisation d'applications - IUT de Marne la vallée</h3>
            <p className="text-sm text-gray-400">Champs-sur-Marne | 2022 - 2025</p>
            <p className="mt-2 text-gray-300">Formation de technicien informatique en 3 ans</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Baccalauréat général mention bien - Lycée Gustave Eiffel</h3>
            <p className="text-sm text-gray-400">Gagny | 2019 - 2022</p>
            <p className="mt-2 text-gray-300">Spécialités NSI et Mathématiques en terminale avec SVT en première </p>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="favourite" className="py-16 bg-gray-800 px-6">
        <ProjectsGrid />
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-16 px-6">
        <Contact />
      </section>

      <Navbar />
    </div>
  );
}

export default App;
