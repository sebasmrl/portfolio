import Link from "next/link"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import { MdAlternateEmail } from "react-icons/md"

export const Footer = () => {
    return (
        <footer className="min-h-40 bg-gradient-to-b from-slate-800/0 to-slate-950 flex flex-col justify-center items-center gap-2 mt-20 sm:mt-40">

            <div className="flex gap-2 items-center">
                <Link target="_blank" rel="noopener noreferrer" href={'https://www.linkedin.com/in/deivy-sebastian-morales'} className="hover:scale-105"><IoLogoLinkedin size={30} /></Link>
                <Link target="_blank" rel="noopener noreferrer" href={'https://github.com/sebasmrl'} className="hover:scale-105"><IoLogoGithub size={30} /></Link>
                <Link target="_blank" rel="noopener noreferrer" href={'mailto:davesebastian99@gmail.com'} className="hover:scale-105"><MdAlternateEmail size={30} /></Link>
            </div>
            <span className="text-base font-medium text-slate-400 ">Sebastian Morales</span>
        </footer>
    )
}
