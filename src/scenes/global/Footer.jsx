import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-6 text-2xl mt-8 p-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/kimsann-mao-09baa9243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors duration-300"
      >
        <FaLinkedin />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/Kimsan_mao"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-sky-500 transition-colors duration-300"
      >
        <FaTelegram />
      </a>

      {/* Email */}
      <a
        href="mailto:kimsannmao025@gmail.com"
        className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
      >
        <FaEnvelope />
      </a>
    </footer>
  );
};

export default Footer;
