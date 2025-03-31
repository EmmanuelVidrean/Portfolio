import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUserCircle, FaProjectDiagram, FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  const [bgFocus, setBgFocus] = useState(false);

  const sections = [
    { id: "home", label: "Accueil", icon: <FaHome /> },
    { id: "orders", label: "Qui suis-je ?", icon: <FaUserCircle /> },
    { id: "favourite", label: "Projets", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50"> 
      {/* Navbar Container */}
      <nav 
        className={`shadow-lg rounded-b-3xl flex justify-around items-center h-20 w-full mx-auto max-w-4xl ${bgFocus ? "bg-gray-900" : "bg-black/70"} transition-all`}
        onMouseOver={() => setBgFocus(true)}
        onMouseLeave={() => setBgFocus(false)}  
      >
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.id}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-purple-500"
            className="flex flex-col items-center cursor-pointer hover:text-purple-500 text-white transition-opacity opacity-100"
          >
            <div className="text-3xl mb-2">{section.icon}</div>
            <p className="text-sm">{section.label}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
