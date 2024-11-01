import { ExperienceItem } from "./ExperienceItem"


export const ExperienceSection = () => {
  return (
    <section id="experience" className='flex flex-col w-full gap-16 mt-10 dark'>
      <h2 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600'>Experiencia</h2>

      <ol className="relative border-s border-gray-200 dark:border-gray-700 w-full" >
        <ExperienceItem
          enterprise="Lauriyei Mantenimientos"
          lapsusText="Desde Julio hasta Octubre de 2024"
          tasks={[
            'Sitio web empresarial de Lauriyei Mantenimientos.',
            'Organizar información de presentación.',
            'Diseñar sistema UI.',
            'Desarrollar sitio web en base al sistema UI.',
            'Agregar caracteristicas SEO.',
            'Desplegar servicio en Vercel.',
            'Agregar dominio y seguridad ante D-DOS attacks con Cloudflare.',
            'Brindar soporte continuo ante futuras preferencias.',
          ]}
        />
        <ExperienceItem
          enterprise="Freelance - Subcontratación"
          lapsusText="Desde Junio hasta Diciembre de 2023"
          tasks={[
            'Sistema de gestión de productos para el consumo "Palacio de las papas".',
            'Diseño de interfaz de usuario en figma.',
            'Desarrollo de interfaz usuario en React.js.',
            'Desarrollo backend con Node.js y Express.js.',
            'Integracion e implementación en entorno local de la aplicación segun exigencia del cliente.'
          ]}
        />
        <ExperienceItem
          enterprise="Corporación Universitaria Rafael Núñez"
          lapsusText="Desde Agosto hasta Octubre de 2021"
          tasks={[
            'Sistema de gestión académica de la facultad de Enfermería.',
            'Levantar historias de usuario necesarias para la ejecucion del proyecto.',
            'Determinar los tiempos de ejecución de las historias de usuario junto al cronograma de las mismas.',
            'Diseñar UI de la aplicación (Figma).',
            'Desarrollar back-end de la aplicacion.',
            'Consumir servicios REST determinados en Backend.'
          ]}
        />
      </ol>

    </section>
  )
}
