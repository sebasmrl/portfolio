import { cn } from "@/lib/utils";



interface Props {
    icon: React.ReactNode,
    name: string
}

export const SkillItem = ({ icon, name }: Props) => {
    return (
        <figure
            className={cn(
                "relative w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-col items-center gap-2">
                <div className="text-sky-400">{icon}</div>
                <div className="flex flex-col">
                    <figcaption className="text-sm sm:text-lg font-medium  dark:text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};
