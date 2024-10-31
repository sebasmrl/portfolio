import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import React from 'react'
import { IoExitOutline } from 'react-icons/io5'

export const ProjectsSection = () => {
  return (
    <section id="projects" className='mt-20 py-4'>
      <h2 className='pb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600'>Proyectos</h2>

        <BentoGrid className='dark grid grid-cols-1 sm:grid-cols-3 gap-y-2 sm:gap-x-2 '>
            <BentoCard 
                name={'Nombre del proyecto - Card'} 
                className={'text-xl border col-span-1 max-h-80'} 
                background={<div className='bg-slate-900 p-2'>  <h1>Contenido vacio del background</h1></div>} 
                Icon={ IoExitOutline} 
                description={'alguna descripcion  del proyecto'} 
                href={'/'} 
                cta={'Ver mas'}                
            /> 
           
        </BentoGrid>
    </section >
  )
}
