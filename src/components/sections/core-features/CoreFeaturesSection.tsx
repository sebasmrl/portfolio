import { CoreFeatureItem } from "./CoreFeatureItem"

const features: { accentTitle?:string, accentText?: string; text?: string }[] = [
  { accentTitle:'1', accentText:'año', text:'de Experiencia.'},
  { accentTitle:'3', accentText:'proyectos', text:'finalizados.'},
  { accentTitle:'', accentText:'Ing. Sistemas', text:'Pregrado'},
]


export const CoreFeaturesSection = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-x-8  py-20 gap-y-4 '>
      {
        features.map((feature,i) => (
          <CoreFeatureItem 
            key={`${feature.accentText}${i}`}
            accentTitle={feature.accentTitle}
            accentText={feature.accentText}
            text={feature.text} />
        ))
      }
    </section>
  )
}
