import profile from "../../assets/landingpage.jpg";
import flowcvv1 from "../../assets/cv/flow-cv-v1.pdf";
const LandingPage = () => {
  return (
    <>
      <div className="pt-20 w-full gap-4 flex flex-col md:flex-row justify-center items-center">
        <div className=" p-4 md:order-2 md:flex md:justify-center ">
          <img
            src={profile}
            alt=""
            className="rounded-md w-full max-w-xl md:max-w-xs object-cover"
          />
        </div>
        <div className=" p-4 flex flex-col gap-3 flex-1">
          <p>Frontend & Backend Dev</p>
          <p className="text-3xl font-heading text-black font-semibold">
            Hello, my name is Kimsann Mao.
          </p>
          <p className="font-sans  ">
            I am a junior programer in AI Area. I start learning a programing
            because i see in future of market in cambodia need a website. And in
            furture a lot of family bussines in cambodia need to turn to an
            profesional one then they need a website for thier own product{" "}
          </p>
          <div className="flex gap-4">
            <a
              href={flowcvv1}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-secondary text-white rounded-md"
            >
              View CV
            </a>

            <a
              className="px-4 py-2 rounded-md text-white cursor-pointer bg-black "
              target="_blank"
              href="https://github.com/SANN-py"
            >
              Git Hub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
