/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon?: any;
  description: string;
  href: string;
  cta?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative  flex flex-col  overflow-hidden rounded-xl ", //col-span-3
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]   ", //bg-gradient-to-t from-slate-950 to-slate-950/0 hover-group:to-slate-950/90 transition-all
      className,
    )}
  >
    <div className=" h-full content-end bg-gradient-to-t from-slate-950/70 to-slate-200/0 hover:from-slate-950 transition-all pointer-events-none">
      <div className="absolute top-0 hover:scale-110 transition-all w-full border -z-10 pointer-events-auto">{background}</div>

      <div className={`pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 ${ cta ? 'group-hover:-translate-y-10':''}   `}>
        {(Icon) ? <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />: <></>}
        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-100 group-hover:shadow-sm ">
          {name}
        </h3>
        <p className="max-w-lg text-sky-200 text-sm sm:text-xl ">{description}</p>

      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        {
        (cta)?
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto hover:bg-slate-100 hover:text-sky-950 border border-white/30">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        :<></>
        }
      </div>

      {/* <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" /> */}
    </div>
  </div>
);

export { BentoCard, BentoGrid };
