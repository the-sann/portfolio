import React from "react";
import img from "../../assets/project2.jpg";

function Project2() {
  return (
    <div>
      <div className="flex w-full mt-10 px-4 justify-center">
        <div className="flex flex-col md:flex-row border border-gray-200 w-full h-auto max-w-6xl shadow-lg rounded-xl overflow-hidden">
          <div className="md:w-1/2 w-full order-1 md:order-1 h-64 md:h-auto">
            <img src={img} alt="" className="h-full w-full object-cover " />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 w-full md:w-1/2 order-2 md:order-2">
            <h2 className="font-heading text-3xl">Project Name</h2>
            <p className="text-gray-700">
              I created a room rent website that manages all the customer info,
              payment dates, and even allows long-term payments.
            </p>
            <button className="px-6 py-2 bg-secondary text-white cursor-pointer rounded-md w-max">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
