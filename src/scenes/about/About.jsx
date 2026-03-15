import React from "react";

function About() {
  return (
    <div className="mt-25">
      <div className="flex md:flex-row flex-col w-full justify-between gap-12  md:px-8 ">
        <div className="w-full md:w-1/2 space-y-5 px-3 mb-5">
          <h2 className="font-heading text-2xl font-semibold bg-red-400  p-4">
            Me
          </h2>
          <p className="leading-relaxed text-white text-left md:text-justify bg-red-400 text-xl p-6">
            I am 25 years old. I graduated from high school in 2018 and started
            studying Mathematics at the Royal University of Phnom Penh (RUPP).
            However, when COVID-19 started in 2019, my financial situation
            became difficult, and I had to stop my studies and start working to
            support myself and my family. Over the years, I worked different
            jobs while saving money and learning about life and responsibility.
            In November 2024, I decided to start learning Computer Science. My
            goal is to become a developer and build websites that can help my
            family business grow and reach more customers.
          </p>
        </div>
        <div className="md:w-1/2 w-full space-y-5 px-3">
          <h2 className="font-heading text-2xl font-semibold bg-blue-400 p-4">
            Work Experience
          </h2>
          <p className="leading-relaxed text-white bg-blue-400 text-left md:text-justify p-6 text-xl ">
            I am 25 years old. I graduated from high school in 2018 and started
            studying Mathematics at the Royal University of Phnom Penh (RUPP).
            However, when COVID-19 started in 2019, my financial situation
            became difficult, and I had to stop my studies and start working to
            support myself and my family. Over the years, I worked different
            jobs while saving money and learning about life and responsibility.
            In November 2024, I decided to start learning Computer Science. My
            goal is to become a developer and build websites that can help
            family business in cambodia grow and reach more customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
