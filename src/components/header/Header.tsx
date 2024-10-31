import Link from "next/link"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-4 sm:px-32  fixed w-full"> {/* bg-sky-900 bg-opacity-5 backdrop-filter */}
            <Link href={'/'} className="p-2 text-2xl font-black ">Sebastian Morales</Link>
            

            <nav className="hidden lg:flex text-lg font-medium gap-4 min-h-full text-center self-stretch ">
                <Link href={'/#experience'} className="cursor-pointer content-center">Experiencia</Link>
                <Link href={'/#projects'} className="cursor-pointer content-center">Proyectos</Link>
                <Link href={'/#skills'} className="cursor-pointer content-center">Habilidades</Link>
                <Link href={'/#about'} className="cursor-pointer content-center ">Sobre mi</Link>
            </nav>  

            <div className="flex gap-2">
              <Link href={'/'} className="hover:scale-105"><IoLogoLinkedin size={30}/></Link>
              <Link href={'/'} className="hover:scale-105"><IoLogoGithub size={30}/></Link>
            </div>
      </header>
  )
}
