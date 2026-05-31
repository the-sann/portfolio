// ProjectsPage.jsx (or wherever you use the Weather component)
import ProjectCard from "../ProjectCard";
import dataWeather from "../data/dataFrontendMentor/weather";

function Weather() {
  return (
    <div>
      {dataWeather.map((project) => (
        <ProjectCard
          key={project.id}
          img={project.img}
          title={project.title}
          description={project.description}
          demo={project.demo}
          src_code={project.src_code}
        />
      ))}
    </div>
  );
}

export default Weather;
