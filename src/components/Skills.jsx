import React from "react";
import css from "../assets/images/tech-logos/css.png";
import github from "../assets/images/tech-logos/github.png";
import html from "../assets/images/tech-logos/html.png";
import javascript from "../assets/images/tech-logos/javascript.png";
import mongodb from "../assets/images/tech-logos/mongo.png";
import node from "../assets/images/tech-logos/node.png";
import typescript from "../assets/images/tech-logos/TypeScript.png";
import reactimg from "../assets/images/tech-logos/react.png";

const Skills = () => {
  const techSkills = [
    html,
    css,
    javascript,
    node,
    mongodb,
    reactimg,
    typescript,
    github,
  ];

  const renderTechSkills = (techSkillsArray) => {
    return techSkillsArray.map((techSkill) => {
      return <img className="w-40 mx-auto" src={techSkill} />;
    });
  };


  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-slate-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-amber-300">
            Skills
          </p>
          <p className="py-4">A Few Technologies I have experience with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8">
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="" />
            <p className="my-4">HTML</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="" />
            <p className="my-4">CSS</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="" />
            <p className="my-4">Node</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongodb} alt="" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reactimg} alt="" />
            <p className="my-4">React</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={typescript} alt="" />
            <p className="my-4">TypeScript</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
