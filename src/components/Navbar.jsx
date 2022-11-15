import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Pdf from "../assets/Treadwell-Resume.pdf";

const Navbar = () => {

    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const navList = [
      "Home",
      "About",
      "Skills",
      "Portfolio",
      "Contact"
    ]

    const mobileNavList = [
      "Home",
      "About",
      "Skills",
      "Portfolio",
      "Contact"
    ]

    const renderNavList = (navListArray) => {
      return navListArray.map((navList) => {
        return <li>{navList}</li>
      })
    }

    const renderMobileNavList = (mobileNavListArray => {
      return mobileNavListArray.map((mobileNavList) => {
        return <li className="py-6 text-4xl">{mobileNavList}</li>
      })
    })
    
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>{/* Add Logo Here 12:25 */}</div>

      {/* menu */}

      <ul className="hidden md:flex">
        {renderNavList(navList)}
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        {renderMobileNavList(mobileNavList)}
      </ul>

      

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/stephon-treadwell/" target="_blank">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/StephonT" target="_blank">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b91c1c]">
            <a className="flex justify-between items-center w-full text-gray-300" href= "mailto: streadwe@gmail.com" target="_blank">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#475569]">
            <a className="flex justify-between items-center w-full text-gray-300" href={Pdf} target="_blank" rel="noreferrer" download>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// left off at 32:42
