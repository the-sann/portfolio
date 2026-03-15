import React from "react";
import img from "../../assets/project_image/school_laravel_project.png";

function Project2() {
  return (
    <div>
      <div className="flex w-full mt-10 px-2 justify-center">
        <div className="flex flex-col md:flex-row border border-gray-200 w-full h-auto max-w-6xl shadow-lg rounded-xl overflow-hidden">
          <div className="md:w-1/2 w-full order-1 md:order-1 h-64 md:h-auto">
            <img src={img} alt="" className="h-full w-full object-cover " />
          </div>
          <div className="flex flex-col justify-center gap-6 p-6 md:p-8 w-full md:w-1/2 order-2 md:order-2">
            <h2 className="font-heading text-3xl">Admin Dashboard</h2>
            <p className="text-white bg-red-400 text-xl p-8">
              this is a school project from laravel term. this site doesn't have
              DEMO and Source code yet.But in future i will explore how to
              hosing laravel and database
            </p>
            {/* <div className="flex gap-5 ">
              <a
                // href="#"
                // target="_blank"
                rel="noopener noreferrer"
                className=" hover:cursor-not-allowed px-6 py-2 bg-secondary text-white cursor-pointer rounded-md inline-block w-40 text-center"
              >
                DEMO
              </a>
              <a
                // href="#"
                // target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-secondary text-white cursor-pointer rounded-md inline-block w-40 text-center"
              >
                Source Code
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
