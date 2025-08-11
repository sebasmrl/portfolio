import ShimmerButton from '../ui/shimmer-button'
import { MdDownload } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import WordRotate from '../ui/word-rotate'

export const InitialSection = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 w-full gap-2 gap-y-6 sm:gap-y-2 pt-20 sm:py-20 dark:text-white">
            <div className="flex justify-center sm:col-start-3">
                <div className="rounded-full overflow-hidden">
                    <Image
                        priority={true}
                        className="w-72"
                        src={'/profile-image.webp'}
                        alt="Imagen de perfil"
                        width={200}
                        height={240}
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center sm:col-span-2 sm:col-start-1 sm:row-start-1">
                <p className="font-medium text-2xl">Hola, Soy</p>
                <h1 className=" font-extrabold text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600">Sebastian Morales</h1>
                <WordRotate className="text-3xl sm:text-4xl font-light" words={["Ingeniero de Sistemas", "Desarrollador Front-end", "Desarrollador Back-end", "Diseñador Ui"]} />
                <div className="flex gap-2 mt-4 text-sm md:text-base justify-center sm:justify-start">
                    <Link href={'https://drive.google.com/file/d/1wNWZnRNgagHT65DHSQ1BwL1Yo0BQo9vy/view?usp=sharing'} target='_blank' rel='noopener noreferrer ' className="flex flex-nowrap items-center text-white content-center justify-center gap-1 py-2 px-4  rounded-full bg-gradient-to-r from-sky-400 to-violet-600 hover:bg-gradient-to-l active:opacity-65" >
                        <span className="">Descargar CV</span>
                        <MdDownload size={20} className="" /></Link>
                    <ShimmerButton className="py-2 dark:text-white text-white">Disponible para trabajar</ShimmerButton>
                </div>
            </div>


        </section>
    )
}
