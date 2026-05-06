import { Link } from "react-router-dom";
import img from "../../assets/project_image/pos.png";

function Project_Express() {
  return (
    <div className="w-full flex justify-center mt-10 px-2 md:px-4">
      <div className="flex flex-col md:flex-row border border-gray-200 shadow-lg rounded-xl overflow-hidden w-full md:max-w-6xl">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto order-1 md:order-2">
          <a
            href="https://sala-it-express-learning-frontend.vercel.app/"
            target="_blank"
          >
            <img
              src={img}
              alt="Project Screenshot"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 p-6 md:p-8 w-full md:w-1/2 order-2 md:order-1">
          <h2 className="font-heading text-3xl font-semibold">POS system</h2>
          <p className="text-white bg-blue-400 text-xl p-8">
            Full stack use Sequelize use express use shadcnui integrate with aba
            payway use React Typescript use TanstackForm use Axios use zod
            validate
          </p>
          <ul>
            <p>To test</p>
            <li>First navigate to product</li>
            <li>Second navigate to Sale POS</li>
          </ul>
          <p className="bg-amber-500 p-2 rounded-xl text-white">
            Note that abapayway is unable due to expired
          </p>
          <div className="flex gap-5">
            <a
              href="https://sala-it-express-learning-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-400 text-white cursor-pointer rounded-md inline-block w-40 text-center"
            >
              DEMO
            </a>
            <a
              href="https://github.com/SANN-py/salaIt_express_learning_frontend"
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

export default Project_Express;
