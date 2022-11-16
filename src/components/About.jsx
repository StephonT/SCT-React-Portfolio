import React from "react";

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
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div>
            <p>
            I am a husband and a father. I love to play video games, basketball, and read inspirational books. I also love the deep blue sea and interested in what lives beneath the ocean. Whale watching in Alaska is at the top of my bucket list. An added hobby of mine is learning technology languages and applying them to projects (Refer to the portfolio section to see my projects).
            </p>
          </div>
          <div>
            <p> I am currently a Police Sergeant in the state of New Jersey. I am looking to switch careers into the tech industry so that I can help people on a larger scale. As technology continues to grow around us, so does the opportunities.   </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
