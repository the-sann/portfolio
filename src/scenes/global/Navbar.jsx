import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed w-full box-border z-10 top-0 left-0 px-8 md:px-20 py-3 shadow-md bg-white">
        <div className="flex justify-between items-center  bg-white">
          <p className="font-heading text-3xl">
            <Link to="/" onClick={scrollToTop}>
              <span className="">K</span>i<span>msann</span>
            </Link>
          </p>

          <div className="font-sans md:flex gap-10  hidden text-xl ">
            <Link to="/about">Me</Link>
            <HashLink to="/#project">Project</HashLink>
            <HashLink to="/#contact">Contact</HashLink>
          </div>

          {/* mobile hamburger */}
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
        {isOpen && (
          <div
            className={`md:hidden flex flex-col mt-3 gap-4 px-8 py-4 shadow-lg text-xl transition-all duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3 hidden"
            }`}
          >
            <Link
              to="/about"
              className="hover:text-secondary transition cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Me
            </Link>
            <HashLink
              to="/#project"
              className="hover:text-secondary transition cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Project
            </HashLink>
            <HashLink
              to="/#contact"
              className="hover:text-secondary transition cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </HashLink>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
