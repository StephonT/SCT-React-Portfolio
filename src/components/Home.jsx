import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-slate-300 text-xl">Hi, my name is</p>
        <br />
        <h1 className="text-amber-300 sm:text-7xl text-4xl">
          Stephon Treadwell.
        </h1>
        <br />
        <p className="text-slate-300 text-xl py-4 max-w-[700px]">
        I'm a Full Stack Web Developer with a business administration background looking to contribute my newly developed skills acquired from the Rutgers University Coding Boot Camp. Projects that I have done reflect my skills in HTML, CSS, JavaScript, React, Typescript, Express, Mongoose Apollo/GraphQL, MongoDB, NoSQL, web APIs and server-side API. I have strong skills in creativity, teamwork, leadership and meeting deadlines. My ability to quickly learn cutting-edge web technologies, combined with my adept problem-solving abilities and determination, make me a strong addition to any engineering team.
        {/* I am currently a Police Sergeant in the state of New Jersey. I am
            looking to switch careers to become a Software Engineer. I am
            passionate about building web applications on the front-end as well
            as the back-end. I am currently building projects using React.js and
            collaborating with other Software Developers on full stack projects.
            Feel free to contact me if you would like to collaborate on a
            project, have questions for me, or would like to hire me! Please
            refer to the contact section of my portfolio for my contact
            information. */}
        </p>
        <div>
          {/* Have to put "group" in className in order for the entire button to receive arrow animation */}
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-300 hover:border-amber-300">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
