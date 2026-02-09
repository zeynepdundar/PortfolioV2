import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Intro from "@/components/sections/intro/Intro";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
