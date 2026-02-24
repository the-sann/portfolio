import React from "react";

function About() {
  return (
    <div className="mt-25">
      <div className="flex  justify-center">
        <div className="flex md:flex-row flex-col w-full justify-between gap-12  px-8 items-start">
          <div className="w-full md:w-1/2 space-y-5 px-3 mb-5">
            <h2 className="font-heading text-2xl font-semibold ">Me</h2>
            <p className="leading-relaxed text-gray-700 text-left md:text-justify">
              I am 25 years olds . I finished high school in 2018 . And i start
              with RUPP as Mathematic department. But in 2019 Covide come in and
              i don't have money to pay the school as well so i decide to drop.
              I start working for saving money. In 2022 i start a loan for buy a
              moto until 2024 . And on Nov 25 I start learning code in mayjor
              computer sicens until now . I learn computer sicens cause i want
              to build website for family bussines to grow thier sale and i saw
              this opportunity .
            </p>
            <button className="px-4 py-2 rounded-md cursor-pointer bg-secondary">
              Resume
            </button>
          </div>
          <div className="md:w-1/2 w-full space-y-5 px-3">
            <h2 className="font-heading text-2xl font-semibold">
              Work Experience
            </h2>
            <p className="leading-relaxed text-gray-700 text-left md:text-justify">
              I start work as cashier in 2018 . In 2019 as a teacher of english
              kingdargaten lavel. During 2019 to 2020 I stay at my hometown as
              covid viral . I back to phnom penh in end of 2020 i start work as
              Chief in Pizza Company until 2022. In Pizza Company I have learn
              about how to cook spagetti . And I change my work to start with
              Asia Master in 2022 . And after i finished my loan I decide to
              relax so i go to my hometown around 2 month . and i back to phnom
              penh again with the goal to save money for my rest of life but i
              have one thing to complete for my mom requirement is to complete
              the bacholar degree so i decide to start with Western SMC .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
