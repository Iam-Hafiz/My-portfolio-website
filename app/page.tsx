import About from "@/components/About";
import Divider from "@/components/Divider";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className=" max-w-7xl mx-auto relative flex flex-col justify-center items-center px-2">
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
    </main>
  );
}
