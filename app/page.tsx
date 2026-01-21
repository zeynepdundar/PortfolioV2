import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Experience from "@/components/sections/experience/Experience";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <>
      <About />
      <Projects />
      <Experience />
      <Contact/>
    </>
  );
}

