import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

const Project = () => {
  return (
    <div id="project">
      <div className="flex flex-col justify-center items-center pt-20 ">
        <p className="text-4xl font-heading ">Project</p>
        <div className="w-20 h-1 bg-yellow-500 mt-3"></div>
      </div>
      <div>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    </div>
  );
};
export default Project;
