import Project1 from "./QuizApp";
import Project2 from "./AdminDashboard";
import TodoProject from "./TodoApp";
import Project_Express from "./Project_Express";
import AdminDashboard from "./AdminDashboard";
import QuizApp from "./QuizApp";
import Weather from "./frontendMentor/Weather";

const Project = () => {
  return (
    <div id="project">
      <div className="flex flex-col justify-center items-center pt-20 ">
        <p className="text-4xl font-heading ">Project</p>
        <div className="w-20 h-1 bg-yellow-500 mt-3"></div>
      </div>
      <div>
        <Project_Express />
        <QuizApp />
        <AdminDashboard />
        <TodoProject />
        <Weather />
      </div>
    </div>
  );
};
export default Project;
