import { div } from "motion/react-client";
import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";
import {BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"

const Navbar = () => {


    const [isOpen, setIsOpen]=useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen)
    }






  return (

    <nav  className="fixed top-0 flex py-6 bg-black/70 w-full border-b border-b-gray-700 px-16 justify-between items-center backdrop-blur-md md:justify-evenly ">
        <a href="/" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold hover:opacity-100 transition-all duration-300">Ismail</a>


        <ul className="hidden md:flex gap-10">
            <a href="#home" className="opacity-70 transition-all duration-300 hover:opacity-100 "><li>Home</li></a>
            <a href="#tech" className="opacity-70 transition-all duration-300 hover:opacity-100 "><li>Tech</li></a>
            <a href="#projects" className="opacity-70 transition-all duration-300 hover:opacity-100 "><li>Projects</li></a>
            <a href="#contact" className="opacity-70 transition-all duration-300 hover:opacity-100 "><li>Contact</li></a>

            

        </ul>

        <ul className=" hidden md:flex gap-4">

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300  hover:bg-blue-500  hover:opacity-100">
                <a href="https://www.linkedin.com/in/ismail-hansal-a17826267/" target="blank" ><BsLinkedin/></a>
            </li>

            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:bg-purple-500 text-xl">
            <a href="https://www.instagram.com/samael_onela/" target="blank"><BsInstagram/></a>
            </li>
            <li className="cursor-pointer opacity-70 transition-all duration-300  hover:opacity-100  text-xl">
            <a href="https://github.com/ismailhansal" target="blank"><BsGithub/></a>
            </li>




        </ul>


        {isOpen ? (
            <BiX className="block md:hidden cursor-pointer " size={25} onClick={menuOpen}/>

        ):
        (
            <BiMenu className="block md:hidden cursor-pointer" size={25} onClick={menuOpen}/>
        )
        }














        {isOpen && (

            <div className={`fixed top-[84px] right-0 flex flex-col items-start justify-start p-12 gap-10 h-screen w-1/2 bg-black/90 border-l border-gray-800 transition-all duration-300 ease-in-out ${isOpen ? "block  " : "hidden"}`}>


        <ul className=" flex flex-col md:hidden gap-8">
            <a href="/Home" className="opacity-70 transition-all duration-300 hover:opacity-100 "><li>Home</li></a>
            <a href="/Tech" className="opacity-70 transition-all duration-300 hover:opacity-100 "><li>Tech</li></a>
            <a href="/Projects" className="opacity-70 transition-all duration-300 hover:opacity-100 "><li>Projects</li></a>
            <a href="/Contact" className="opacity-70 transition-all duration-300 hover:opacity-100 "><li>Contact</li></a>

            

        </ul>


        <ul className=" flex flex-wrap md:hidden gap-5">

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300  hover:bg-blue-500  hover:opacity-100">
                <a href=""><BsLinkedin/></a>
            </li>

            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:bg-purple-500 text-xl">
            <a href=""><BsInstagram/></a>
            </li>
            <li className="cursor-pointer opacity-70 transition-all duration-300  hover:opacity-100  text-xl">
            <a href=""><BsGithub/></a>
            </li>




        </ul>







            </div>




        )}



    </nav>

)
}

export default Navbar