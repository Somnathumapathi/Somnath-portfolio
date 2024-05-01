import AppBar from "@/components/appbar";
import Experience from "@/components/experience";
import MainSection from "@/components/mainsection";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[400vh] bg-gradient-to-br from-black to-blue-950">
      <div className="max-w-7xl mx-auto p-10">
        <AppBar/>
        <MainSection/>
      </div>
      <div className="max-w-7xl mx-auto p-10">
        <Skills/>
      </div>
      <div className="max-w-7xl mx-auto p-10">
        <Projects/>
      </div>
      <div className="max-w-7xl mx-auto p-10">
        <Experience/>
      </div>
    </main>
  );
}
