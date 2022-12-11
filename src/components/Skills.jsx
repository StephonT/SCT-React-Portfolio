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
    {skill: html, title: 'Html'},
    {skill: css, title: "Css"},
    {skill: javascript, title: "Javascript"},
    {skill: node, title: "Node"},
    {skill: mongodb, title: "MongoDb"},
    {skill: reactimg, title: "React"},
    {skill: typescript, title: "Typescript"},
    {skill: github, title: "Github"},
  ];

  const renderTechSkills = (techSkillsArray) => {
    return techSkillsArray.map((techSkill) => {
      return (
        <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={techSkill.skill} alt="" />
          <p className="my-4 text-xl">{techSkill.title}</p>
        </div>
      );
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
          {renderTechSkills(techSkills)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
