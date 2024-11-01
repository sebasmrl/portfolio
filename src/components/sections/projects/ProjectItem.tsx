import { BentoCard } from "@/components/ui/bento-grid";
import Image from "next/image"

interface Props {
  name: string;
  description: string;
  image:{
    url:string;
    alt:string;
    width:number;
    height:number;
    style?: object;
  };
  actionButton?:{
    href:string;
    text:string;
  }


}

//bg-gradient-to-t from-slate-950 to-slate-950/0 hover-group:to-slate-950/90 transition-all
export const ProjectItem = ({ name, description, image, actionButton}: Props) => {
  return (

    <BentoCard
      name={name}
      className={'text-xl border col-span-1 max-h-80 '}
      background={
        <div className="flex justify-center relative  w-full">
          <div className=" absolute min-w-full min-h-full "></div>
          <Image
            className=""
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
            style={{ width: 'auto', height: 'auto', ...image?.style  }}
          />
        </div>
      }
      description={description}
      href={actionButton && actionButton.href ? actionButton.href:'/'}
      cta={ actionButton?.text}
    />
  )
}
