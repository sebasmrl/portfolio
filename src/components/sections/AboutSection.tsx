import { MailIcon, PhoneCallIcon } from "lucide-react"
import Image from "next/image"

export const AboutSection = () => {
    return (
        <section className="mt-16 md:mt-24 text-slate-900 dark:text-slate-300">
            <h2 id="about" className="pb-12 sm:pb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600">
                Sobre mi
            </h2>
            <article className="grid md:grid-cols-2 gap-y-10">
                <div className="col-span-1 flex flex-col justify-center items-center gap-4 md:col-start-2">
                    <Image 
                        className="drop-shadow-2xl rounded-full dark:bg-transparent bg-sky-500 aspect-square"
                        src={"/svgs/SM-logo.svg"} 
                        alt={"Logo Sebastian Morales"}
                        width={130}
                        height={130}
                        style={{height:'auto', width:'8rem'}}
                    />
                    <div className="flex flex-col items-center justify-center">
                    <p className="sm:text-lg inline-flex flex-nowrap gap-2"><MailIcon/> <span>davesebastian99@gmail.com</span></p>
                    <p className="sm:text-lg inline-flex flex-nowrap gap-2"> <PhoneCallIcon/> <span>+57 3182793416</span></p>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col md:col-start-1 md:row-start-1">
                    <p className="text-lg md:text-2xl  text-pretty ">
                        Mi nombre es Sebastian Morales, soy una persona <span className="font-bold  ">proactiva, organizado</span> y <span className="font-bold  ">responsable.</span> Disfruto crear cosas nuevas
                        y me actualizo constantemente en tecnología, por lo que mi objetivo es un puesto <span className="font-bold ">desafiante </span>
                         y <span className="font-bold  ">dinámico</span> donde pueda compartir mi experiencia y a su vez sumar nuevos
                        conocimientos.
                    </p>
                </div>
                
            </article>

        </section>
    )
}
