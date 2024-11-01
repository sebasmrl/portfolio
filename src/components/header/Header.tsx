import Link from "next/link"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import { NavLinks } from "./NavLinks"

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-4 sm:px-32  fixed w-full animate-header-reveal progress-scrollview-1 bg-slate-950  z-10"> {/* bg-sky-900 bg-opacity-5 backdrop-filter */}
            <Link href={'/'} className="p-2 text-2xl font-black ">Sebastian Morales</Link>
            
            <NavLinks />

            <div className="flex gap-2">
              <Link target="_blank" rel="noopener noreferrer"  href={'https://www.linkedin.com/in/deivy-sebastian-morales'} className="hover:scale-10"><IoLogoLinkedin size={30}/></Link>
              <Link target="_blank" rel="noopener noreferrer" href={'https://github.com/sebasmrl'} className="hover:scale-105"><IoLogoGithub size={30}/></Link>
            </div>
      </header>
  )
}
