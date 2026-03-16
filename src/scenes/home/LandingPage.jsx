import profile from "../../assets/landingpage.jpg";
import flowcvv2 from "../../assets/cv/flow-cv-v2.pdf";

const LandingPage = () => {
  return (
    <div className="pt-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center md:order-2">
        <img
          src={profile}
          alt="Kimsann Mao"
          className="rounded-xl shadow-lg w-full max-w-md object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <p className="text-blue-500 font-semibold">Full-Stack Developer</p>

        <h1 className="text-4xl md:text-5xl font-bold font-heading">
          Hello, I'm Kimsann Mao
        </h1>

        <p className="text-gray-600 leading-relaxed text-lg">
          I am a junior full-stack developer passionate about building modern
          web applications. I started learning programming because I see the
          growing need for digital solutions in Cambodia. My goal is to help
          local businesses grow by creating professional websites and systems.
        </p>

        <div className="grid grid-cols-1 items-center text-center md:grid-cols-3  gap-4 mt-4">
          <a
            href={flowcvv2}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            View CV
          </a>

          <a
            href="https://github.com/SANN-py"
            target="_blank"
            className="px-6 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition"
          >
            GitHub
          </a>
          <a
            href="#about"
            className="px-6 py-2 bg-red-500 hover:bg-red-400 text-white rounded-lg transition"
          >
            About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
