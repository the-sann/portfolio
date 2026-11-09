import ProjectCard from "../../components/ProjectCard";
import { data } from "../../const/data";

function Weather() {
  return (
    <div>
      {data.weather.map((project) => (
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
