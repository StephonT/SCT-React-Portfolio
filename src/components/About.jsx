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
            <img src={Face} alt="Picture of Treadwell" className="ml-10 border-double border-4" />
          </div>
          <div>
            <p className="text-lg"> I am currently a Police Sergeant in the state of New Jersey. I am looking to switch careers to become a Software Engineer. I am passionate about building web applications on the front-end as well as the back-end. I am currently building projects using React.js and collaborating with other Software Developers on full stack projects. Feel free to contact me if you would like to collaborate on a project, have questions for me, or would like to hire me! Please refer to the contact section of my portfolio for my contact information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
