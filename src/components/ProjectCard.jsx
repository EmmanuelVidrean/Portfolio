import Swal from 'sweetalert2';

const ProjectCard = ({ project }) => {
    const iconMap = {
        "java": { name: "Java", iconType: "brands", icon: "java" },
        "react": { name: "React", iconType: "brands", icon: "react" },
        "node-js": { name: "Node.js", iconType: "brands", icon: "node-js" },
        "js": { name: "JavaScript", iconType: "brands", icon: "js" },
        "html5": { name: "HTML5", iconType: "brands", icon: "html5" },
        "css3-alt": { name: "CSS3", iconType: "brands", icon: "css3-alt" },
        "python": { name: "Python", iconType: "brands", icon: "python" },
        "php": { name: "PHP", iconType: "brands", icon: "php" },
        "figma": { name: "Figma", iconType: "brands", icon: "figma" },
        "database": { name: "Base de données", iconType: "solid", icon: "database" },
        "c": { name: "Langage C", iconType: "solid", icon: "code" },
        "angular": { name: "Angular", iconType: "brands", icon: "angular" }
    };

    const handleInfoClick = (project) => {
        Swal.fire({
            title: project.title,
            html: `
                <p><strong>Description :</strong> ${project.description}</p>
            `,
            imageUrl: project.image,
            imageWidth: 400,
            imageAlt: project.title,
            confirmButtonText: "Fermer",
            confirmButtonColor: "#3085d6",
        });
    };

    return (
        <div className="bg-gray-900 shadow-lg rounded-xl overflow-hidden flex flex-col relative text-white transition-transform transform hover:scale-105">
            <div className={`absolute right-3 top-3 px-3 py-1 text-xs font-semibold rounded-md uppercase 
                ${project.status === "En cours" ? "bg-yellow-500 text-black" :
                project.status === "Terminé" ? "bg-green-500 text-white" :
                "bg-red-500 text-white"}`}>
                {project.status}
            </div>

            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />

            <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                    <div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-gray-400 text-sm">Année : {project.year}</p>
                    </div>
                    <div className="flex space-x-2">
                        <i className="fas fa-info-circle cursor-pointer text-blue-400 hover:text-blue-300 transition"
                            onClick={() => handleInfoClick(project)}></i>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github cursor-pointer text-gray-400 hover:text-gray-200 transition"></i>
                            </a>
                        )}
                    </div>
                </div>

                <div className="mt-3">
                    <p className="text-sm text-gray-300 mb-2 font-semibold">Compétences :</p>
                    <ul className="flex flex-wrap gap-2">
                        {project.skills.map((skill, index) => (
                            <li key={index} className="text-xs bg-blue-600 text-white px-3 py-1 rounded-md">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-3">
                    <p className="text-sm text-gray-300 mb-2 font-semibold">Technologies :</p>
                    <ul className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => {
                            const { name, iconType, icon } = iconMap[tech] || { name: tech, iconType: "solid", icon: "question" };
                            return (
                                <li key={index} className="flex items-center bg-purple-700 text-white px-3 py-1 rounded-md text-sm">
                                    <i className={`fa-${iconType} fa-${icon} mr-2`}></i> {name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;