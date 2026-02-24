import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center gap-4 text-2xl mt-4 p-4 bg-white">
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="hover:text-blue-700" />
      </a>
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="hover:text-pink-500" />
      </a>
      <a href="mailto:youremail@example.com">
        <FaEnvelope className="hover:text-red-500" />
      </a>
    </div>
  );
};
export default Footer;
