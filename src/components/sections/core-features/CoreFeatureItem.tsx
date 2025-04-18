
interface Props{
    accentTitle?:string;
    accentText?: string;
    text?:string;
}

export const CoreFeatureItem = ({ accentTitle="Title",accentText="Accent", text="text Test"}:Props) => {
  return (
    <article className="flex flex-col  border dark:border-blue-600/40 border-sky-600/15 bg-gradient-to-tr from-sky-400/5 to-blue-600/30 rounded-md py-4 px-8  sm:py-8 items-start justify-center min-h-44 ">
        <p className="font-extrabold text-5xl sm:text-[5rem] bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600 text-transparent  leading-tight">
          {accentTitle}
        </p>
        <p className="font-extrabold text-3xl sm:text-4xl bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600 text-transparent pb-2">
          {accentText}
        </p>
        <p className="w-full font-normal  text-2xl sm:text-3xl dark:text-white ">
            {text}
        </p>
      </article>
  )
}
