import About from "../about/About";
import Contact from "../contact/Contact";
import Project from "../project/Project";
import Skill from "../skill/Skill";
import LandingPage from "./LandingPage";
import Footer from "../global/Footer";
import Navbar from "../global/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-2 md:px-20 mt-4" id="home">
        <LandingPage />
        <Skill />
        <Project />
        <About />
        <Contact />
      </div>
    </>
  );
};
export default Home;
