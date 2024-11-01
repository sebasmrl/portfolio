import Marquee from "@/components/ui/marquee";
import { SkillItem } from "./SkillsItem";
import { IoLogoFigma, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoTypescript, BiSolidFileJson } from "react-icons/bi";
import { SiMongodb, SiNestjs, SiPostgresql, SiPython, SiTypeorm } from "react-icons/si";
import { FaAws, FaJava, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";




const tecnologies = [
  {
    icon: <IoLogoReact  size={40}/>,
    name: 'React'
  },
  {
    icon: <RiNextjsLine   size={40}/>,
    name: 'Next.js'
  },
  {
    icon: <FaNodeJs  size={40}/>,
    name: 'Node.js'
  },
  {
    icon: <IoLogoFigma  size={40}/>,
    name: 'Figma'
  },
  {
    icon: <BiLogoTypescript  size={40}/>,
    name: 'TypeScript'
  },
  {
    icon: <IoLogoJavascript  size={40}/>,
    name: 'Javascript'
  },
  {
    icon: <SiNestjs  size={40}/>,
    name: 'Nest.js'
  },
  {
    icon: <BiSolidFileJson  size={40}/>,
    name: "RestAPI's"
  },
  {
    icon: <SiTypeorm  size={40}/>,
    name: 'TypeORM'
  },
  {
    icon: <GrMysql size={40} />,
    name: 'MySQL'
  },
  {
    icon: <SiPostgresql size={40}/>,
    name: 'PostgreSQL'
  },
  {
    icon: <SiMongodb  size={40}/>,
    name: 'MongoDB'
  },
  {
    icon: <SiPython size={40}/>,
    name: 'Python'
  },
  {
    icon: <FaJava  size={40}/>,
    name: 'Java'
  },
  {
    icon: <FaAws size={40}/>,
    name: 'EC2'
  },

];
const firstRow = tecnologies.slice(0, tecnologies.length / 2);
const secondRow = tecnologies.slice(tecnologies.length / 2);

export function SkillsSection() {
  return (
    <section id="skills" className="w-full dark mt-16 md:mt-24">
      <h2 className='pb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600'>
        Habilidades
      </h2>
      <div className=" relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((tecnology) => (
            <SkillItem key={tecnology.name} {...tecnology} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((tecnology) => (
            <SkillItem key={tecnology.name} {...tecnology} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}
