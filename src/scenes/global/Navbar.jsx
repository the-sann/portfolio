import { HomeIcon } from "lucide-react";
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
    <>
      <nav
        className="
  font-heading
  fixed
  
  left-0
  w-full
  z-50
  hidden
  gap-3
  py-4
  shadow-md


  md:flex
  md:flex-row
  md:justify-center
  md:gap-3
  md:left-1/2
  md:-translate-x-1/2
  md:w-[600px]
  md:rounded-full
  md:border
  md:shadow-xl
  md:border-gray-200
  md:transition
"
      >
        <a
          href="/"
          className="cursor-pointer px-5 py-2 rounded-2xl hover:bg-gray-200 transition"
        >
          Home
        </a>

        <Link
          to="/technology"
          className="cursor-pointer px-5 py-2 rounded-2xl hover:bg-gray-200 transition"
        >
          Technology
        </Link>

        <div className="relative group py-2">
          <a
            href="#about"
            className="cursor-pointer px-5 py-2 rounded-2xl hover:bg-gray-200 transition"
          >
            Me
          </a>

          <div className="absolute top-full left-0 hidden group-hover:block  w-48  border transition border-gray-200 shadow-xl rounded-2xl p-4">
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

        <a
          href="#skill"
          className="cursor-pointer px-5 py-2 rounded-2xl hover:bg-gray-200 transition"
        >
          Skill
        </a>

        <a
          href="#project"
          className="cursor-pointer px-5 py-2 rounded-2xl hover:bg-gray-200 transition"
        >
          Project
        </a>

        <a
          href="#contact"
          className="cursor-pointer px-5 py-2 rounded-2xl hover:bg-gray-200 transform transition"
        >
          Contact
        </a>
      </nav>

      {/* Mobile hamburger */}
      {/* <button
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
      </button> */}

      {/* Mobile navigation */}
      {/* {isOpen && (
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
      )} */}

      <nav
        className="
    font-heading
    rounded-full
    border
    border-gray-200
    shadow-xl
    transition
    fixed
    bottom-4
    inset-x-2
    mx-auto
    max-w-[500px]
    z-[9999]
    flex
    items-center
    justify-around
    gap-3
    py-2
    px-2
    shadow-md
    bg-white
    md:hidden
  "
      >
        <a
          href="/"
          className="px-5 py-2 rounded-2xl hover:bg-gray-200 transition"
        >
          <HomeIcon />
        </a>

        <a
          href="#skill"
          className="px-5 py-2 rounded-2xl hover:bg-gray-200 transition"
        >
          Skill
        </a>

        <a
          href="#project"
          className="px-5 py-2 rounded-2xl hover:bg-gray-200 transition"
        >
          Project
        </a>

        <a
          href="#contact"
          className="px-5 py-2 rounded-2xl hover:bg-gray-200 transition"
        >
          Contact
        </a>
      </nav>
    </>
  );
};

export default Navbar;
