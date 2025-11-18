import { useState } from "react";
import './Navbar.css'
import Button from "./Button";

export default function Navbar () {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="scroll-mt-24 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#4C223E] py-[1rem] sm:py-[0.75rem] px-[2rem] sticky top-0 z-10 !font-[Inter]">
            <a href="#home" className="!text-[#FAF5E9] text-xl !no-underline">Home</a>
            <div className="flex sm:hidden absolute top-[0.75rem] right-[0.75rem] flex-col justify-between w-[2.25rem] h-[2rem] hover:bg-[#823E78] p-2 rounded-2" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span className="h-[0.1rem] w-full bg-[#9C80DB] rounded-full"></span>
                <span className="h-[0.1rem] w-full bg-[#9C80DB] rounded-full"></span>
                <span className="h-[0.1rem] w-full bg-[#9C80DB] rounded-full"></span>
            </div>
            <ul className={`${menuOpen ? "flex" : "hidden"} sm:flex flex-col sm:flex-row items-start sm:items-center w-[100%] sm:w-auto sm:space-x-8 mb-[0.25rem] sm:mb-0 m-0`}>
                <li className='text-center list-none mb-[0.5em] sm:mb-0 text-[1.5rem] sm:text-[1rem]'><a href="#about" className="!text-[#FAF5E9] hover:!text-[#9C80DB] !no-underline">About</a></li>
                <li className='text-center list-none mb-[0.5em] sm:mb-0 text-[1.5rem] sm:text-[1rem]'><a href="#projects" className="!text-[#FAF5E9] hover:!text-[#9C80DB] !no-underline">Projects</a></li>
                <li className='text-center list-none mb-[0.5em] sm:mb-0 text-[1.5rem] sm:text-[1rem]'><a href="#contact" className="!text-[#FAF5E9] hover:!text-[#9C80DB] !no-underline">Contact</a></li>
                <li className='text-center list-none mb-[0.5em] sm:mb-0 text-[1.5rem] sm:text-[1rem]'><Button title="Resume" link="/resume.pdf"/></li>
            </ul>
        </nav>
    );
}