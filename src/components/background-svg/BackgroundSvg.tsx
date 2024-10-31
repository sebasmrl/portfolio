import Image from "next/image"


interface Props{
    image?: string;
}

export const BackgroundSvg = ({ image="/svgs/section2.svg"}:Props) => {
  return (
    <div className="absolute -z-10 w-full h-auto object-fill">
         <Image 
                className="w-full h-full"
                src={image}
                alt=""
                width={1280}
                height={720}
                style={{}} 
            /> 
      </div>
  )
}
