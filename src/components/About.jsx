import React from "react";
import Face from "../assets/images/Face.png"


const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-slate-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-amber-300">
              About
            </p>
          </div>
          <div></div>

        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div  className="sm:text-right text-4xl font-bold flex ">
            <p>
            Hi. I'm Stephon. Nice to meet you! Please take a look around.
            </p>
            <img src={Face} alt="/" className="ml-10 border-double border-4" />
          </div>
          <div>
          <p className="text-white py-2 text-lg">
            I started web development on CodeAcademy in April of 2022, where I learned HTML, CSS, and Javascript. After completing each lesson, I grew a passion for the tech industry and decided to start a 6 month Coding Bootcamp at Rutgers University where I recently earned a Full-Stack Development certificate. During those 6 months, I learned how to use different technologies within the full stack. I am proficient in building front-end applications using HTML, CSS, Javascript, and React.
          </p>
          <p className="text-white py-2 text-lg">
             I have experience with working directly with clients and taking mock wireframes to deployed applications. In my spare time, I learn a new technology then apply the newly learned skill into an application using React or another React framework. I believe that being a great developer is not using one specific language, but choosing the best tool for the job.  
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
