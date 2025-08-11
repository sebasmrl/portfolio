import { BentoGrid } from '@/components/ui/bento-grid'
import { ProjectItem } from './ProjectItem'


const projects: { name: string, description: string, image: string, actionButton?: { text: string, href: string } }[] = [
  {
    name: 'Comodos.co',
    description: 'App web para encontrar inmuebles para arrendamiento basada en busqueda cercana a traves de coordenadas (lat,lng) y filtros adicionales.',
    image: '/mockups/comodos.svg',
    actionButton: {
      text: 'Visitar',
      href: 'https://www.comodos.co'
    }
  },
  {
    name: 'Lauriyei Mantenimientos',
    description: 'Sitio web empresarial de Lauriyei Mantenimientos enfocado a SEO.',
    image: '/mockups/lauriyei-mockup.svg',
    actionButton: {
      text: 'Ver más',
      href: 'https://lauriyei.com'
    }
  },
  {
    name: 'Palacio de las papas',
    description: 'Sistema de gestión de productos para el consumo "Palacio de las papas".',
    image: '/mockups/palacio-papas-mockup.svg',
  },
  {
    name: 'Nursing Núñez',
    description: 'Sistema de gestión académica de la Facultad de Enfermería de la Corporación Universitaria Rafael Núñez.',
    image: '/mockups/nursing-nunez-mockup.svg',
  },
  
]


export const ProjectsSection = () => {
  return (
    <section id="projects" className='mt-16 md:mt-36 py-4'>
      <h2 className='pb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600'>Proyectos</h2>

      <BentoGrid className=' grid grid-cols-1 sm:grid-cols-2 sm:gap-x-2 gap-y-0 '>

        {
          projects.map(project => (
            <ProjectItem
              key={project.name.split(' ').join('_')}
              name={project.name}
              description={project.description}
              image={{
                url: project.image,
                alt: 'Imagen de mockup de proyecto',
                width: 400,
                height: 400,
              }}
              actionButton={ project?.actionButton }
            />
          ))
        }



      </BentoGrid>
    </section >
  )
}
