
import { BackgroundSvg, CoreFeaturesSection, ExperienceSection, Header } from "@/components";
import { AboutSection, Footer, ProjectsSection, SkillsSection } from "@/components/sections";
import { InitialSection } from "@/components/sections/InitialSection";

export default function HomePage() {
  return (
    
    <div className="w-full relative bg-transparent dark:bg-transparent bg-white overflow-hidden  text-slate-800 ">
      <BackgroundSvg />
      <Header/>
      <main className=" flex flex-col px-4 sm:px-10 md:px-10 lg:px-32 pt-14 sm:pt-20  ">
        <InitialSection />
        <CoreFeaturesSection /> 
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
      </main>
        <Footer />
    </div>
    
  );
}