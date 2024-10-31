import Image from "next/image"


interface Props{
    image?: string;
}

export const BackgroundSvg = ({ image="/svgs/section2.svg"}:Props) => {
  return (
    <div className="absolute -z-10 w-full h-auto object-cover scale-150 top-10 sm:top-0 sm:scale-100">
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
