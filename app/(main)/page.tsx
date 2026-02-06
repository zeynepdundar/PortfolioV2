import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Experience from "@/components/sections/experience/Experience";
import Intro from "@/components/sections/intro/Intro";
import Projects from "@/components/sections/projects/Projects";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <Skills />

      <Experience />
      <Contact />
    </>
  );
}
