import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="h-screen py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <p className="text-lg text-gray-700 mb-6">
        N'hésitez pas à me contacter via mes réseaux professionnels :
      </p>

      {/* Liens sociaux et CV */}
      <div className="flex items-center gap-8 text-4xl text-blue-600">
        <a
          href="https://www.linkedin.com/in/emmanuel-vidrean-003629266/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
          aria-label="LinkedIn"
          title="Mon LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/EmmanuelVidrean"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
          aria-label="GitHub"
          title="Mon GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="/CV_2025-03-28_Emmanuel_Vidrean.pdf"
          download
          className="hover:text-blue-800 transition"
          title="Télécharger mon CV"
        >
          <FaFilePdf />
        </a>
        <a
          href="mailto:vidreanemmanuel3srt@gmail.com"
          className="hover:text-blue-800 transition"
          title="Envoyer un email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
