import About from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Intro from "@/components/Intro";
import { ModeToggle } from "@/components/ModeToggle";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className=" max-w-7xl mx-auto relative flex flex-col justify-center items-center px-2">
      <ModeToggle />
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Contact />
      <Divider />
    </main>
  );
}
