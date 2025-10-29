import { useState } from "react";
import './Navbar.css'

export default function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className="flex justify-between items-center bg-[#4C223E] py-[1rem] sm:py-[0.75rem] px-[2rem] sticky top-0 z-10 !font-[Inter]">
            <a href="#home" className="!text-[#FAF5E9] text-xl !no-underline">Home</a>
            <div className="flex sm:sr-only absolute top-[0.75rem] right-[0.75rem] flex-col justify-between w-[2.25rem] h-[2rem]" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span className="h-[0.1rem] w-full bg-[#9C80DB] rounded-full"></span>
                <span className="h-[0.1rem] w-full bg-[#9C80DB] rounded-full"></span>
                <span className="h-[0.1rem] w-full bg-[#9C80DB] rounded-full"></span>
            </div>
            <ul className={'${menuOpen ? "open" : ""} hidden sm:flex items-center space-x-8 m-0'}>
                <li><a href="#about" className="!text-[#FAF5E9] hover:!text-[#9C80DB] !no-underline">About</a></li>
                <li><a href="#projects" className="!text-[#FAF5E9] hover:!text-[#9C80DB] !no-underline">Projects</a></li>
                <li><a href="#contact" className="!text-[#FAF5E9] hover:!text-[#9C80DB] !no-underline">Contact</a></li>
                <li><button className="text-[#C5B2E7] !rounded-4xl bg-[#823e783f] border !border-[#823E78] px-3 py-1 hover:bg-[#C5B2E7] hover:text-[#823e78] hover:!border-[#9C80DB]">Resume</button></li>
            </ul>
        </nav>
    );
}