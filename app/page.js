// 'use client'
import AppBar from "@/components/appbar";
import Experience from "@/components/experience";
import MainSection from "@/components/mainsection";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-[400vh] bg-gradient-to-br from-black to-blue-950">
      <Link href={'/Home1'}><div>New portfolio under construction ⚒️. Click here to see.</div></Link>
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
