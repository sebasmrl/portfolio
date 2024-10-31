
interface Props{
    accentTitle?:string;
    accentText?: string;
    text?:string;
}

export const CoreFeatureItem = ({ accentTitle="Title",accentText="Accent", text="text Test"}:Props) => {
  return (
    <article className="flex flex-col  min-h-full  p-5 border dark:border-blue-600/40 border-sky-600/15 bg-gradient-to-tr from-sky-400/5 to-blue-600/30 rounded-md py-8 items-start justify-center">
        <p className="font-extrabold text-[5rem] bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600 text-transparent  leading-tight">
          {accentTitle}
        </p>
        <p className="font-extrabold text-4xl bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600 text-transparent pb-2">
          {accentText}
        </p>
        <p className="w-full font-normal text-3xl">
            {text}
        </p>
      </article>
  )
}
