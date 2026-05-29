import { ExperienceItem } from "./ExperienceItem"


export const ExperienceSection = () => {
  return (
    <section id="experience" className='flex flex-col w-full gap-16 mt-10 dark'>
      <h2 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600'>Experiencia</h2>

      <ol className="relative border-s border-gray-200 dark:border-gray-700 w-full" >
        <ExperienceItem
          enterprise="Cirkular Agro Fintech S.A.S"
          lapsusText="Desde Octubre de 2025 hasta Mayo de 2026"
          tasks={[
            "Desarrollo de aplicaciones backend utilizando NestJS y TypeScript.",
            "Implementación de servicios de análisis de imágenes mediante integración con modelos de OpenAI.",
            "Desarrollo de aplicaciones web y paneles administrativos en Next.js.",
            "Implementación de Azure Functions para integración de sistemas empresariales mediante HTTP - RPC con Odoo.",
            "Diseño e integración de APIs y flujos de comunicación entre múltiples plataformas.",
            "Administración y modelado de bases de datos PostgreSQL en Azure.",
            "Despliegue y administración de aplicaciones en contenedores sobre Azure.",
            "Configuración y gestión de Virtual Networks, políticas de acceso y recursos cloud en Azure.",
            "Automatización y sistematización de procesos manuales mediante generación de trazabilidad, identificadores únicos y relacionamiento de datos.",
            "Mapeo, transformación y consolidación de información proveniente de diferentes sistemas.",
            "Definición de arquitectura técnica, priorización de tareas y planeación de rutas de desarrollo.",
            "Desarrollo de interfaces para visualización y análisis de datos en Next.js y Looker Studio.",
            "Integración completa entre servicios, aplicativos y herramientas internas de la organización."
          ]}
        />
        <ExperienceItem
          enterprise="Comodos.co - Independiente"
          lapsusText="Desde Enero hasta Agosto de 2025"
          tasks={[
            'Aplicación web Comodos con las tecnologias de Next.js y Nest.js integrando servicios de AWS como S3, RDS y ECS',
            'Diseñar modelos de datos(ER) para la aplicación.',
            'Definir personas, roles, politicas y asignacion de recursos de AWS.',
            'Desarrollar Resful API en Nest.js integrando servicios de AWS como RDS, S3 y CloudFront.',
            'Diseñar y desarrollar Frontend con Next.js implementado gestores de estado(Zustand), también server & client actions, Axios para peticiones HTTP, Auth.js para autenticación, TailwindCSS y GoogleMaps API para la captura y muestreo de coordenadas.',
            'Habilitar certificados SSL.',
            'Integración de backend y frontend.',
            'Despliegue backend Restful API en AWS ECS Fargate con asignación de ELB.',
            'Despliegue frontend en Vercel.',
            'Habilitar dominios y subdominios para ambos servicios desde Cloudflare.'
          ]}
        />
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
            'Sistema de gestión académica de la Facultad de Enfermería de la CURN.',
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
