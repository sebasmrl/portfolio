
interface Props {
    enterprise?: string,
    lapsusText?: string;
    tasks?: string[];
}

export const ExperienceItem = ({ enterprise = 'Enterprise', lapsusText = "LapsusText", tasks = [] }: Props) => {
    
    return (
        <li className="mb-10 ms-6 text-slate-950 dark:text-white">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-sky-800 dark:text-blue-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>

            <div className="pl-4 text-black ">
                <h3 className=" items-center mb-1 text-lg sm:text-3xl font-semibold text-sky-500">{enterprise} <span className="hidden bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Ultima</span></h3>
                <time className="block mb-2 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">{lapsusText}</time>
                <ul className="flex flex-col gap-1 "
                >
                    {
                        tasks.map((task, i) => (
                            <li key={`${task.substring(0, 2)}${i}`} className="text-base text-pretty sm:text-lg font-normal text-gray-500 dark:text-gray-400">
                                - {task}
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        </li>
    )
}




    /* //GoToButton 
     <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
    <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg> Ir al sitio
        </a> */

