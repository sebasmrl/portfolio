import Link from "next/link";


const links:{title:string, url:string}[] = [
    { title: 'Experiencia',
        url:'/#experience'
    },
    { title: 'Proyectos',
        url:'/#projects'
    },
    { title: 'Habilidades',
        url:'/#skills'
    },
    { title: 'Sobre mi',
        url:'/#about'
    }
]

export const NavLinks = () => {
    

    return (
        <nav className="hidden lg:flex text-lg font-medium gap-4 min-h-full text-center self-stretch ">
            {
                links.map( link=>(
                    <Link key={link.url} href={link.url} className={'cursor-pointer content-center hover:shadow-[inset_0_-2px_0_rgb(226,232,240)] transition-all hover:text-white'}>
                        {link.title}
                    </Link>
                ))
            }
            
        </nav>
    )
}
