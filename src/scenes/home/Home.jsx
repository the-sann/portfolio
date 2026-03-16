import About from "../about/About";
import Contact from "../contact/Contact";
import Project from "../project/Project";
import Skill from "../skill/Skill";
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <div className="px-2 md:px-20 mt-4">
      <LandingPage />
      <Skill />
      <Project />
      <About />
      <Contact />
    </div>
  );
};
export default Home;
