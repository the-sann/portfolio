import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full box-border z-10 top-0 left-0 px-8 md:px-20 py-3 shadow-md bg-white">
      <div className="flex justify-between items-center bg-white">
        {/* Logo */}
        <p className="font-heading text-3xl">
          <Link
            to="/"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            <span>K</span>i<span>msann</span>
          </Link>
        </p>

        {/* Desktop navigation */}
        <div className="font-heading md:flex gap-10 hidden text-xl md:justify-center md:items-center">
          <a href="/" className="cursor-pointer">
            Home
          </a>

          <Link to="/technology">Technology</Link>

          <div className="relative group py-2">
            <a href="#about" className="cursor-pointer">
              Me
            </a>

            <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white border border-gray-200 shadow-xl rounded-md p-4">
              <ul className="space-y-2">
                <li className="hover:text-secondary cursor-pointer transition">
                  My Trip
                </li>

                <li className="hover:text-secondary cursor-pointer transition">
                  Hobbies
                </li>
              </ul>
            </div>
          </div>

          <a href="#skill" className="cursor-pointer">
            Skill
          </a>

          <a href="#project" className="cursor-pointer">
            Project
          </a>

          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-3 gap-4 px-8 py-4 shadow-lg text-xl">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/technology" onClick={closeMenu}>
            Technology
          </Link>

          <Link to="/#about" onClick={closeMenu}>
            Me
          </Link>

          <Link to="/#skill" onClick={closeMenu}>
            Skill
          </Link>

          <Link to="/#project" onClick={closeMenu}>
            Project
          </Link>

          <Link to="/#contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
