
import { BackgroundSvg, CoreFeaturesSection, Header } from "@/components";
import { InitialSection } from "@/components/sections/InitialSection";

export default function HomePage() {
  return (
    <div className="w-full relative bg-transparent">
      <BackgroundSvg />
      <Header/>
      <main className="flex flex-col px-4 sm:px-32 pt-14 ">
        <InitialSection />
        <CoreFeaturesSection /> 
       
      </main>

    </div>
  );
}