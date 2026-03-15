import { Link } from "react-router-dom";
import img from "../../assets/project_image/kimsannquiz.png";

function Project1() {
  return (
    <div className="w-full flex justify-center mt-10 px-2 md:px-4">
      <div className="flex flex-col md:flex-row border border-gray-200 shadow-lg rounded-xl overflow-hidden w-full md:max-w-6xl">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto order-1 md:order-2">
          <a href="https://kimsannquiz.netlify.app/" target="_blank">
            <img
              src={img}
              alt="Project Screenshot"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 p-6 md:p-8 w-full md:w-1/2 order-2 md:order-1">
          <h2 className="font-heading text-3xl font-semibold">Quiz APP</h2>
          <p className="text-white bg-blue-400 text-xl p-8">
            I create a basic quiz bank using react state and tailwindcss
          </p>
          <div className="flex gap-5">
            <a
              href="https://kimsannquiz.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-400 text-white cursor-pointer rounded-md inline-block w-40 text-center"
            >
              DEMO
            </a>
            <a
              href="https://github.com/SANN-py/quiz_app/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-secondary text-white cursor-pointer rounded-md inline-block w-40 text-center"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
