import Link from "next/link";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { IoCallSharp, IoLogoGithub } from "react-icons/io5";

export default function Page() {
  return (
    <div>

      <section id="presentation" className="flex w-full h-dvh relative">

        <div id="background-section" className="flex w-full h-dvh absolute -z-10">
          <div className="bg-sky-950 w-2/3 flex-start items-end flex">
            <div className="grid grid-cols-10 gap-x-6 text-center">
              <p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p>
              <p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p>
              <p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p>
              <p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p>
              <p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p>
              <p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p>
            </div>
          </div>
          <div className="bg-sky-600 w-1/3"></div>
        </div>



        <div className="flex flex-col w-full h-dvh bg-slate-900 bg-opacity-10 ">

          <nav className="flex w-full h-10 py-14 px-4 sm:px-10 justify-between items-center">
            <p className="text-white sm:text-2xl font-bold">PORTFOLIO.</p>
            <div id="nav-links" className="flex gap-2 items-center">
              <p className="sm:text-2xl">Contactame</p>
              <Link href={'https://github.com/sebasmrl'}><IoLogoGithub size={30} /></Link>
              <Link href={'https://www.linkedin.com/in/deivy-sebastian-morales/'}><FaLinkedin size={30} /></Link>
              <Link href={'tel:573052434484'}><IoCallSharp size={30} /></Link>
            </div>
          </nav>

          <div className="flex px-10 h-full">
            <div className=" flex flex-col w-5/12 justify-center h-full">
              <p className="text-sky-400 text-xl font-medium">Hey,</p>
              <h1 className="font-bold text-6xl">Soy Sebastian Morales</h1>
              <div className="flex items-center  border-sky-500 border-4 self-center mr-10 mt-10">
                <p className="text-xl text-white w-full py-2 px-4">Desarrollador FullStack</p>
                <FaArrowRight size={20} className="bg-sky-500 h-full w-auto p-1" />
              </div>
            </div>
            <div id="profile-wrapper" className="bg-slate-500 w-7/12 ">

            </div>
          </div>

        </div>

      </section>


      
     {/*  <span className="relative inline-flex overflow-hidden rounded-full p-[2px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]">
        </span>
        <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-sky-800 bg-sky-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
          Disponible para trabajar
        </div>
      </span> */}



      <h1>algooo</h1>
      <hr />
      <h1>otra cosa</h1>
    </div>
  );
}
