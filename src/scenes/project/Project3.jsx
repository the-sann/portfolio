import img from "../../assets/todo_screenshot.png";

function Project3() {
  return (
    <div className="w-full flex justify-center mt-10 px-2">
      <div className="flex flex-col md:flex-row border border-gray-200 shadow-lg rounded-xl overflow-hidden w-full max-w-6xl ">
        <div className=" w-full md:w-1/2 h-64 md:h-auto order-1 md:order-2">
          <img
            src={img}
            alt="Project Screenshot"
            className="w-full h-full object-cover "
          />
        </div>
        {/* Left Text Section */}
        <div className="flex flex-col justify-center gap-6 p-6 md:p-8 w-full md:w-1/2 order-2 md:order-1">
          <h2 className="font-heading text-3xl">Todo App</h2>
          <p className="text-gray-700">
            I created a room rent website that manages all the customer info,
            payment dates, and even allows long-term payments.
          </p>
          <div className="flex gap-5 ">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:cursor-not-allowed px-6 py-2 bg-secondary text-white cursor-pointer rounded-md inline-block w-40 text-center"
            >
              DEMO
            </a>
            <a
              href="#"
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

export default Project3;
